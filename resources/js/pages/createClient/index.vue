<template>
    <div class="client__create wrapper">
        <h2 class="text-lg font-bold">Create a new client</h2>
        <div class="client__create-card w-1/2">
            <div class="client__create-card-input__wrapper">
                <label>
                    Username:
                    <input 
                    class="client__create-card-input icon py-1 px-0.5"
                    :class="{'error': v$.userName.$error}"
                    placeholder="Username"
                    @blur="v$.userName.$touch" 
                    type="text" 
                    v-model="v$.userName.$model">
                </label>
                

            </div>
            <div class="client__create-card-btn__wrapper">
                <button
                @click="createNewClient()" 
                class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                    Create
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue-demi';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { useClientStore } from '../../store/clients';
import { useToast } from 'vue-toastification';
import { useRouter } from 'vue-router';
 
export default {
    name: 'createClient',

    setup () {
        const userName = ref('');
        const rules = {
            userName: {required}
        }
        const clientStore = useClientStore();
        const toast = useToast();
        const router = useRouter();

        const createNewClient = () => {
            clientStore.createClient({name: userName.value})
            .then(() => {
                toast.success('Client successes created');
                router.push('/clients');
            })
        }

        return {
            userName,
            createNewClient,
            v$: useVuelidate(rules, {userName})
        }
    }
}
</script>
<style lang="scss" scope>
    @import './createClient.scss';
</style>