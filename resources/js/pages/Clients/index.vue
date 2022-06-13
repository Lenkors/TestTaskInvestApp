<template>
    <div class="client wrapper container mx-auto">
        <div class="client__header">
            <h2 class="head__title">Client List</h2>
            <span class="client__create-btn">
                <router-link to="/client/create">Create client</router-link>
            </span>
        </div>
        
        <div class="client__list wrapper">
            <app-table
            :params="{
                headers: headerTitles,
                isAction: true,
                type: 'client',
                cellData: clientByPages
            }"
            />
            <pagination v-if="!!clientPaginationData && clientPaginationData.total > clientPaginationData.per_page" :params="{
                action: clientPaginationAction,
                currentPage: clientPaginationData.current_page,
                total: clientPaginationData.total,
                perPage:clientPaginationData.per_page 
            }" />
        </div>
    </div>
</template>
<script>
import { ref, watch } from 'vue-demi';
import { useClientStore } from '../../store/clients';
import { storeToRefs } from 'pinia';

export default {
    name: 'Clients',

    setup () {
        // Data
        const headerTitles = ref([
            'id',
            'Client',
            'Cash balance',
            'Gain/Loss'
        ]);

        const clientByPages = ref([]);
        const clientStore = useClientStore();
        const { clients, clientPaginationData } = storeToRefs(clientStore);

        clientStore.getAllClients({current_page: 1})
        .then( result => {
            modifyClientList(result)
        })

        const clientPaginationAction = (payload) => {
            clientStore.getAllClients({current_page: payload})
            .then( result => {
                modifyClientList(result)
            })
        }
         
        const modifyClientList = (payload) => {
            clientByPages.value = payload.map(el => {
                return {
                    id: el.id,
                    name: el.name,
                    cash_balance: el.balance,
                    gain_loss: profitCalculation(el)
                }
            });
        }

        watch(() => clients.value,
        () => {
            modifyClientList(clients.value)
        })

        const profitCalculation = (payload) => {
            let currentPrice = [];
            let volumeOnCurPrice = 0;
            let volumeOnPurPrice = 0;
            if (!!payload.stocks?.length) {
                payload.stocks.map( el => {
                    let findCurrentPrice = currentPrice.find(elem => el.id === elem.id && el.pivot.purchase_price == elem.purchasePrice);
                    if (!!!findCurrentPrice) {
                        currentPrice.push({id: el.id, price: parseInt(el.price), purchasePrice: parseInt(el.pivot.purchase_price), count: 1})
                    } else findCurrentPrice.count += 1 
                })

                currentPrice.map(item => {
                    volumeOnCurPrice += item.count * item.price;
                    volumeOnPurPrice += item.count * item.purchasePrice;
                })
                return volumeOnCurPrice - volumeOnPurPrice
            } 

            return 0
        };

        return {
            headerTitles,
            clientByPages,
            profitCalculation,
            clientPaginationAction,
            clientPaginationData
        }
    }
}
</script>
<style lang="scss" scope>
    @import './client.scss';
</style>