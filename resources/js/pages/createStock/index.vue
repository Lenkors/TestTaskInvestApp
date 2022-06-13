<template>
    <div class="stock__create wrapper">
        <h2 class="text-lg font-bold">Create a new stock</h2>
        <div class="stock__create-card w-1/2">
            <div class="stock__create-card-input__wrapper">
                <label>
                    Name: 
                    <input 
                    class="stock__create-card-input py-1 px-0.5"
                    :class="{'error': v$.stockData.name.$error}"
                    @blur="v$.stockData.name.$touch" 
                    type="text" 
                    v-model="v$.stockData.name.$model">
                </label>
                
                <label>
                    Price:
                    <input 
                    class="stock__create-card-input icon py-1 px-0.5"
                    :class="{'error': v$.stockData.price.$error}"
                    @blur="v$.stockData.price.$touch" 
                    type="number" 
                    v-model="v$.stockData.price.$model">
                </label>
                

            </div>
            <div class="stock__create-card-btn__wrapper">
                <button
                @click="createNewStock()" 
                class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                    Create
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { useToast } from "vue-toastification";
import { useMainStore } from '../../store/main';

export default {
    name: 'createStock',
    data: () => ({
        stockData: {
            name: '',
            price: 0
        }
    }),
    validations () {
        return {
            stockData: {
                name: {required},
                price: {required}
            }
        }
    },
    methods: {
        async createNewStock () {
            const isDataValid = await this.v$.$validate();
            if (!isDataValid) {
                this.v$.$errors.forEach(el => {
                    this.toast.warning(`${el.$property} - ${el.$message}`)
                })
            } else {
                if (Number.isInteger(this.stockData.price)) {
                    this.stockData.price = Math.ceil(this.stockData.price)
                    this.toast.warning('The price must be an integer');
                }
                this.storeMain.createStock(this.stockData)
                .then(result => {
                    if (result.status == 201) this.toast.success('Stock successful create'), this.$router.push('/')
                }).catch(err => {
                    this.toast.error(this.validateError(err.response.data))
                })
            }
        }
    },
    computed: {
        /**
         * Validate laravel error
         * @return {String}
         */
        validateError () {
            return payload => {
                return payload[Object.keys(payload)[0]][0]
            }
        }
    },
    setup () {
        return { 
            v$: useVuelidate(),
            toast: useToast(),
            storeMain: useMainStore()
        }
    },
}
</script>
<style lang="scss" scope>
    @import './createStock.scss';
</style>