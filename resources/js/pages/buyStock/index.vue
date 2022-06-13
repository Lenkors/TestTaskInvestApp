<template>
    <div class="buy__stock__create wrapper">
        <h2 class="text-lg font-bold">Buy Stock for client</h2>
        <div class="buy__stock__create-card w-1/2">
            <div class="buy__stock__create-card-input__wrapper">
            <div class="w-72 py-2.5"
                v-for="(item, index) in purchaseFields"
                :key="index">
                <label>
                  {{item.name}}:
                  <Listbox v-model="selected[item.name]">
                    <div class="relative mt-1">
                      <ListboxButton
                        class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                      >
                        <span class="block truncate">{{ selected[item.name].name }}</span>
                        <span
                          class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                        >
                          <!-- <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" /> -->
                        </span>
                      </ListboxButton>

                      <transition
                        leave-active-class="transition duration-100 ease-in"
                        leave-from-class="opacity-100"
                        leave-to-class="opacity-0"
                      >
                        <ListboxOptions
                          class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                        >
                          <ListboxOption
                            v-slot="{ active, selected }"
                            v-for="el in item.list"
                            :key="el.name"
                            :value="el"
                            as="template"
                          >
                            <li
                              :class="[
                                active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                                'relative cursor-default select-none py-2 pl-10 pr-4',
                              ]"
                            >
                              <span
                                :class="[
                                  selected ? 'font-medium' : 'font-normal',
                                  'block truncate',
                                ]"
                                >{{ el.name }}</span
                              >
                              <span
                                v-if="selected"
                                class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                              >
                                <!-- <CheckIcon class="h-5 w-5" aria-hidden="true" /> -->
                              </span>
                            </li>
                          </ListboxOption>
                        </ListboxOptions>
                      </transition>
                    </div>
                  </Listbox>
                 </label>
              </div>
              <div class="w-72 py-2.5">
                <div class="buy__stock__create-card-input__wrapper">
                  <label>
                      Volume:
                      <input 
                      class="buy__stock__create-card-input py-1 px-0.5"
                      :class="{'error': v$.volumeOfStocks.$error}"
                      placeholder="Volume"
                      @blur="v$.volumeOfStocks.$touch" 
                      type="text" 
                      v-model="v$.volumeOfStocks.$model">
                  </label>
                </div>
                <div class="buy__stock__create-card-btn__wrapper">
                    <button
                    @click="buyStock()" 
                    class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                        Buy
                    </button>
                </div>
              </div>
            </div>
          </div>
      </div>
</template>
<script>
import { 
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue';
import { onMounted, ref, watch } from 'vue-demi';
import { useClientStore } from '../../store/clients';
import { useMainStore } from '../../store/main';
import { useToast } from 'vue-toastification';
import useVuelidate from '@vuelidate/core';
import { required, minValue } from '@vuelidate/validators';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

export default {
    name: 'buyStock',

    components: {
        Listbox,
        ListboxLabel,
        ListboxButton,
        ListboxOptions,
        ListboxOption,
    },

    setup () {
        const selected = ref({
            client: '',
            stock: ''
        })

        const volumeOfStocks = ref(0);

        const rules = {
            volumeOfStocks: { required, minValue:minValue(1) },
            selected: {
              client: {required},
              stock: {required}
            }
        }
        
        const v$ = useVuelidate(rules, {volumeOfStocks, selected});

        const toast = useToast();

        const clientStore = useClientStore();
        const mainStore = useMainStore();
        const router = useRouter();
        const { stocks } = storeToRefs(mainStore);
        const { clients } = storeToRefs(clientStore);

        const purchaseFields = ref([
            {
                name: 'stock',
                list: stocks.value
            },
            {
                name: 'client',
                list: clients.value
            }
        ]);

        const buyStock = async () => {
          const isDataValid = await v$.value.$validate();
            if (!isDataValid) {
                v$.value.$errors.forEach(el => {
                    toast.warning(`${el.$property} - ${el.$message}`)
                })
            } else {
              clientStore.buyStock({
                client_id: selected.value.client.id,
                stock_id:  selected.value.stock.id,
                volume: volumeOfStocks.value
              })
              .then(() => {
                router.push('/clients');
                toast.success('Stock was purchased')
              }).catch(err => toast.warning(err.response.data.message || 'Server Error'))
            }
        }

        const requestDataForList = () => {
          if (!mainStore.stocks.length || !clientStore.clients.length) {
            Promise.all([
              mainStore.getAllStocks({current_page: 0}),
              clientStore.getAllClients({current_page: 0})
            ])
            .then(result => {
              purchaseFields.value[0].list = result[0];
              purchaseFields.value[1].list = result[1];
            }).catch(err => toast.warning('Server Error!'))
          }
        }

        onMounted(() => {
            requestDataForList()
        })

        watch(() => stocks.value,
        () => {
          requestDataForList()
        })

        return {
            purchaseFields,
            selected,
            buyStock,
            v$
        }
    }
}
</script>
<style lang="scss" scope>
    @import './buyStock.scss';
</style>