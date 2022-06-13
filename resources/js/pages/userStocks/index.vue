<template>
    <div class="user_stock wrapper container mx-auto">
        <div class="user_stock__header">
            <h2 class="head__title">{{ clientData?.name || 'User'}} stock List</h2>
        </div>
        
        <div class="user_stock__list wrapper">
            <app-table
            :params="{
                headers: headerTitles,
                isAction: false,
                type: 'user-stock',
                cellData: userStocksList
            }"
            />
            <div class="user_stock__total">
                <div class="user_stock__total-elem">
                    <span class="title">Total: </span> <span :class="`${checkNumSign(totalProfitCalculation)}`">{{` € ${totalProfitCalculation}`}}</span>
                </div>    
                <div class="user_stock__total-elem">
                    <span class="title">Invested: </span> <span :class="`${checkNumSign(investedCalculation)}`">{{` € ${investedCalculation}`}}</span>   
                </div>
                <div class="user_stock__total-elem">
                    <span class="title">Performance: </span> <span :class="`${checkNumSign(performanceCalculation)}`">{{ performanceCalculation}} %</span>
                </div>
                <div class="user_stock__total-elem">
                    <span class="title">Cash balance: </span> <span :class="`${checkNumSign(clientData?.balance || 0)}`">€ {{ clientData?.balance || 0}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { useClientStore } from '../../store/clients';
import { useRoute } from 'vue-router';
import { ref, watch, computed } from 'vue-demi';
export default {
    name: 'userStocks',
    setup () {

        const headerTitles = ref([
            '#',
            'Company',
            'Volume',
            'Purchase price',
            'Current price',
            'Gain/Loss'
        ]);

        const clientStore = useClientStore();

        const userStocksList = ref([]);
        const clientData = ref(); 
        const route = useRoute();
        const stockList = ref([]);


        const requestClientData = () => {
            return new Promise ((resolve) => {
                clientStore.getStockByClient({client_id: route.params.id})
                .then( result => {
                    clientData.value = result
                    resolve(true)
                }) 
            })
        }
        
        watch(() => clientData.value,
        () => {
            if (!!!clientData.value) {
                requestClientData()
                .then(() => {
                    clientData.value.stocks.map( el => {
                        let findCurrentPrice = stockList.value.length ? stockList.value.find(elem => el.id === elem.id && el.pivot.purchase_price == elem.purchasePrice) : undefined;
                        if (!!!findCurrentPrice) {
                            stockList.value.push({id: el.id, price: parseInt(el.price), name: el.name, purchasePrice: parseInt(el.pivot.purchase_price), count: 1})
                        } else findCurrentPrice.count += 1 
                    })
                    modifyUserStockList()
                })
            }
        }, {immediate: true})

        const modifyUserStockList = () => {
            userStocksList.value = stockList.value.map((el, index) => {
                return {
                    id: index+1,
                    company: el.name,
                    volume: el.count,
                    purchase_price: el.purchasePrice,
                    current_price: el.price,
                    gain_loss: (el.count * el.price) - (el.count * el.purchasePrice)
                }
            })
        }
        
        const totalProfitCalculation = computed(() => {
            let volumeOnCurPrice = 0;
            let volumeOnPurPrice = 0;
            if (stockList.value?.length) {
                stockList.value.map(item => {
                    volumeOnCurPrice += item.count * item.price;
                    volumeOnPurPrice += item.count * item.purchasePrice;
                })
                return volumeOnCurPrice - volumeOnPurPrice
            } 
            return 0
        });

        const investedCalculation = computed(() => {
            let volumeOnPurPrice = 0;

            if (stockList.value?.length) {
                stockList.value.map(item => {
                    volumeOnPurPrice += item.count * item.purchasePrice;
                })
            }
            return volumeOnPurPrice;
        })

        const performanceCalculation = computed(() => {
            if (stockList.value?.length) { 
                let findPercent = investedCalculation.value / 100;
                return (totalProfitCalculation.value / findPercent).toFixed(2)
            }
            return 0;
        })

        const checkNumSign = computed(() => {
            return payload => {
                let checkNumber = Math.sign(payload);
                if (checkNumber == -1) return 'negative'
                else if (checkNumber == 0 || checkNumber == -0 || checkNumber == NaN ) return 'neutral'
                else return 'positive'
            }
        })

        return {
            headerTitles,
            totalProfitCalculation,
            userStocksList,
            requestClientData,
            clientData,
            investedCalculation,
            performanceCalculation,
            stockList,
            checkNumSign
        }
    }
}
</script>
<style lang="scss" scope>
    @import './userStocks.scss';
</style>