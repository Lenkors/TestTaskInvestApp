<template>
    <div class="stock wrapper container mx-auto">
        <div class="stock__header">
            <h2 class="head__title">Stock List</h2>
            <span class="stock__create-btn">
                <router-link to="/stock/create">Create stock</router-link>
            </span>
        </div>
        
        <div class="stock__list wrapper">
            <app-table
            :params="{
                headers: headerTitles,
                isAction: true,
                type: 'stock',
                cellData: stockByPages
            }"
            />
            <pagination v-if="!!stockPaginationData && stockPaginationData.total > stockPaginationData.per_page" :params="{
                action: stockPaginationAction,
                currentPage: stockPaginationData.current_page,
                total: stockPaginationData.total,
                perPage:stockPaginationData.per_page 
            }" />
        </div>
    </div>
</template>
<script>
import { computed, ref, watch } from 'vue-demi';
import { useMainStore } from '../../store/main';
import { storeToRefs } from 'pinia';

export default {
    name: 'Main',
    setup() {
        // Data
        const headerTitles = ref([
            'id',
            'Company',
            'Unit price',
            'Updated at'
        ])
        const stockByPages = ref([]);
        const mainStore = useMainStore(); 
        const { stocks, stockPaginationData } = storeToRefs(mainStore);

        // Computed
        const timestampToDate = computed(() => {
            return payload => {
                let validDate = new Date(payload);
                return `${validDate.getDate()}.${validDate.getMonth()}.${validDate.getFullYear()}`;
            }
        })

        // Methods
        mainStore.getAllStocks({current_page: 1})
        .then(result => {
            modifyStockList(result);
        });

        const modifyStockList = (payload) => {
           stockByPages.value = payload.map(el => {
                return {
                    id: el.id,
                    name: el.name,
                    price: el.price,
                    updated_at: timestampToDate.value(el.updated_at)
                }
            });
        }

        watch(() => stocks.value,
        () => {
            modifyStockList(stocks.value)
        })

        const stockPaginationAction = (payload) => {
             mainStore.getAllStocks({current_page: payload})
            .then(result => {
                modifyStockList(result);
            });
        }

        return {
            timestampToDate,
            headerTitles,
            stockByPages,
            stockPaginationData,
            stockPaginationAction
        }
    }
}
</script>
<style lang="scss" scope>
    @import './main.scss';
</style>