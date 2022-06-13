<?php

namespace App\Http\Controllers;

use App\Models\Stock;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class StockController extends Controller
{
    /**
     * Display a listing of the all resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request['current_page'] == false) {
            $data = Stock::all();
            return response()->json($data, 200);
        } else {
            $data = Stock::orderBy('price', 'desc')->paginate($perPage = 6, $columns = ['*'], $pageName = 'stocks_content', $currentPage = $request['current_page']);
            return response()->json($data, 200);
        }

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:stocks',
            'price' => 'required',
        ]);
        
        if($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $stock = new Stock;
        $stock->name = $request->name;
        $stock->price = $request->price;

        $stock->save();

        return response()->json([
            'response' => $stock
        ], 201);
    }
    
    /**
     * Buy stock on user
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function buyStock(Request $request) 
    {
        $validator = Validator::make($request->all(), [
            'client_id' => 'required',
            'stock_id' =>'required',
            'volume' => 'required'
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $user = User::find($request->client_id);
        $stock = Stock::find($request->stock_id);
        $sync_data = [];

        if (intval($user->balance) >= (intval($stock->price) * intval($request->volume))) {
            for ($i = 0; $i < intval($request->volume); $i++) {
                $user->balance = intval($user->balance) - intval($stock->price);
                // $stock->users()->syncWithoutDetaching([$user->id]);
                $sync_data[$i] = [
                    "user_id" => $user->id,
                    "stock_id" => $stock->id,
                    "purchase_price" => $stock->price,
                    "created_at" => date('d-m-y h:i:s')
                ];
                $user->save();
            }
            // $stock->users()->save($sync_data);
            $stock->users()->attach($sync_data);
        } else return response()->json([
            'message' => 'not enough money'
        ], 400);
        
        return response()->json([
            'message' => 'Stock success added to client'
        ], 201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'stock_id' => 'required',
            'price' => 'required'
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $stock = Stock::find($request->stock_id);
        $stock->price = $request->price;
        $stock->save();

        return response()->json([
            'message' => 'Stock updated',
            'updatedStock' => $stock
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Stock  $stock
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, User $user)
    {
        $validator = Validator::make($request->all(), [
            'stock_id' => 'required',
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $stock = Stock::find($request->stock_id);
        $stock->users()->detach($stock);
        $stock->delete();

        return response()->json([
            'message' => 'Stock deleted and detached'
        ], 200);
    }
}
