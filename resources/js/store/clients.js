import { defineStore } from 'pinia';
import { $axios, apiList } from '../api';

export const useClientStore = defineStore({
    id: 'client',
    state: () => ({
        clients: [],
        currentPage: 1,
        clientPaginationData: false
    }),

    actions: {
        getAllClients (payload) {
            this.currentPage = payload.current_page;
            return new Promise ((resolve, reject) => {
                $axios({
                    method: apiList.getClients.method,
                    url: apiList.getClients.url,
                    params: payload
                })
                .then(resp => {
                    if (!!resp.data?.data) {
                        resolve(resp.data.data);
                        this.clients = resp.data.data;
                        this.clientPaginationData = resp.data;
                    }
                    else if (!!resp.data.length) resolve(resp.data), this.clients = resp.data, this.clientPaginationData = false
                    else resolve([])
                })
                .catch(err => reject(err))
            })
        },

        createClient (payload) {
            return new Promise ((resolve, reject) => {
                $axios({
                    method: apiList.createClient.method,
                    url: apiList.createClient.url,
                    data: payload
                })
                .then(resp => {
                    this.getAllClients({current_page: this.currentPage})
                    .then(() => {
                        resolve(resp)
                    })
                })
                .catch(err => reject(err))
            })
        },

        buyStock (payload) {
            return new Promise((resolve, reject) => {
                $axios({
                    method: apiList.buyStock.method,
                    url: apiList.buyStock.url,
                    data: payload
                }).then(resp => {
                    resolve(resp)
                }).catch(err => reject(err))
            })
        },

        getStockByClient (payload) {
            return new Promise ((resolve, reject) => {
                $axios({
                    method: apiList.getClientDataById.method,
                    url: apiList.getClientDataById.url,
                    params: payload
                }).then(resp => {
                    resolve(resp.data)
                }).catch(err => reject(err))
            })
        }
    }
})