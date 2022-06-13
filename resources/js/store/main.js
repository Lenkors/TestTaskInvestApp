import { defineStore } from 'pinia';
import { $axios, apiList } from '../api';

export const useMainStore = defineStore({
    id: 'main',
    state: () => ({
        appHeaderName: 'Test Invest App',
        stocks: [],
        currentPage: 1,
        stockPaginationData: false
    }),

    actions: {
        getAllStocks (payload) {
            this.currentPage = payload.current_page;
            return new Promise ((resolve, reject) => {
                $axios({
                    method: apiList.getStocks.method,
                    url: apiList.getStocks.url,
                    params: payload
                })
                .then(resp => {
                    if (!!resp.data?.data) resolve(resp.data.data),
                     this.stocks = resp.data.data,
                     this.stockPaginationData = resp.data
                     
                    else if (!!resp.data.length) resolve(resp.data),
                     this.stocks = resp.data,
                     this.stockPaginationData = false

                    else resolve([])
                }).catch(err => reject(err))
            })
        },
        createStock (payload) {
            return new Promise ((resolve, reject) => {
                $axios({
                    method: apiList.createStock.method,
                    url: apiList.createStock.url,
                    data: payload
                })
                .then(resp => {
                    resolve(resp)
                }).catch(err => reject(err))
            })
        },
        /**
         * Update Stock
         * @param {Object} payload required params {stock_id, price} 
         * @returns 
         */
        updateStock (payload) {
            return new Promise((resolve, reject) => {
                $axios({
                    method: apiList.updateStock.method,
                    url: apiList.updateStock.url,
                    data: payload
                }).then( resp => {
                    this.getAllStocks({current_page: this.currentPage})
                    .then(() => resolve(resp))
                }).catch(err => reject(err))
            })
        },
        /**
         * Delete stock
         * @param {Object} payload stock_id param required 
         * @returns 
         */
        deleteStock (payload) {
            return new Promise ((resolve, reject) => {
                $axios({
                    method: apiList.deleteStock.method,
                    url: apiList.deleteStock.url,
                    data: payload
                })
                .then(resp => {
                    this.getAllStocks({current_page: this.currentPage})
                    .then(() => resolve(resp))
                })
                .catch(err => reject(err))
            })
        } 
    }
})