<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Stock;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public $userPassword;

    private function generatePassword ($length = 10) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ#$%_()!?';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }

    /**
     * Create user (Client)
     */
    public function create(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:100|unique:users'
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $this->userPassword = $this->generatePassword(18);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->name.rand(1, 99999).'@test.com',
            'password' => Hash::make($this->userPassword),
            'balance' => '1000'
        ]);

        return response()->json([
            'message' => 'Client successfully created',
            'user' => $user
        ], 201);
    }

    public function index(Request $request, Stock $stock)
    {
        if ($request['current_page'] == false) {
            $data = User::all();
            return response()->json($data, 200);
        } else {
            $data = User::with('stocks')->paginate($perPage = 6, $columns = ['*'], $pageName = 'users_content', $currentPage = $request['current_page']);
            return response()->json($data, 200);
        }
    }

    public function getClientById (Request $request, Stock $stock) {
        if (isset($request['client_id'])) {
            $client = User::with('stocks')->findOrFail($request['client_id']);
            return response()->json($client, 200);

        } else return response()->json(['message' => 'User not found'], 400);
    }
}
