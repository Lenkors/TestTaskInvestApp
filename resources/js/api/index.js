import axios from 'axios';

const $axios = axios.create({
    baseURL: `/api`
});

const apiList = {
    // =========================================
    //  Stock api list
    // =========================================
    getStocks: {
        method: 'GET',
        url: '/stock/get-all'
    },
    createStock: {
        method: 'POST',
        url: '/stock/create'
    },
    updateStock: {
        method: 'PATCH',
        url: '/stock/update'
    },
    deleteStock: {
        method: 'DELETE',
        url: '/stock/delete'
    },

    // =========================================
    //  Client api list
    // =========================================
    getClients: {
        method: 'GET',
        url: '/client/get-all',
    },
    createClient: {
        method: 'POST',
        url: '/client/create'
    },
    buyStock: {
        method: 'PATCH',
        url: '/client/buy-stock'
    },
    getClientDataById: {
        method: 'GET',
        url: '/client/personal-data'
    }
}

export { $axios, apiList }