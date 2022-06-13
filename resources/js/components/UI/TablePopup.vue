<template>
  <Menu v-slot="active" as="div" class="relative inline-block text-left ">
    <MenuButton>
      <div class="flex w-full justify-center items-center h-7 w-7">
        <icon-base title="dots" width="23" height="4"/>
      </div>
    </MenuButton>
    <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-out"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
          v-show="active"
          class="z-[200] absolute right-0 w-max mt-2 origin-top-right bg-white  rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none px-[19px] py-[30px]"
      >
        <MenuItem
            v-for="(item, index) in menuList"
            v-slot="{ active }"
            :key="`${item.name} - ${index}`"  
            as="div"
            class="pb-[25px] last:pb-[8px]"
        >
          <RouterLink :to="item?.path" v-if="!!item?.path">
            <div class="font-normal text-regular-gray text-[14px] leading-3 w-max">{{ item.name }}</div>
          </RouterLink>
          <span v-else>
            <div class="font-normal cursor-pointer text-regular-gray text-[14px] leading-3 w-max" @click="openModal(item)">{{item.name}}</div>
          </span>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>

  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="isOpen = false" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
              {{dialogDynamicTitle}}
              </DialogTitle>
            
              <div class="mt-2" v-if="isUpdated">
                <label>
                    New price:
                    <input 
                    type="number" 
                    v-model="v$.newPrice.$model" 
                    :class="{'border-red-500': v$.newPrice.$error}"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </label>
              </div>

              <div class="mt-2">
                <p class="text-sm text-gray-500">
                {{dialogDynamicDesc}}
                </p>
              </div>

              <div class="mt-4">
                <button
                  type="button"
                  :class="{'bg-red-100 hover:bg-red-200 text-red-900 focus-visible:ring-red-500':isDelete, 'bg-blue-100 hover:bg-blue-200 text-blue-900 focus-visible:ring-blue-500': isUpdated}"
                  class="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  {{dialogDynamicBtnTitle}}
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { Menu,
 MenuButton, 
 MenuItems, 
 MenuItem, 
 DialogPanel, 
 DialogTitle, 
 TransitionRoot,
 TransitionChild,
 Dialog 
 } from '@headlessui/vue'
import { computed, ref } from 'vue-demi'
import { useMainStore } from '../../store/main'
import { useToast } from 'vue-toastification'
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';

export default {
    components: {
        Menu,
        MenuItems,
        MenuButton,
        MenuItem,
        DialogPanel, 
        DialogTitle, 
        TransitionRoot,
        TransitionChild,
        Dialog 
    },

    props: {
        params: {
            type: Object,
            default: () => {
                return {
                    menuType: 'stock',
                    itemData: {
                        id: 0
                    }
                }
            }
        }
    },

    setup (props) {
        //Data
        const isOpen = ref(false);
        const mainStore = useMainStore();
        const toast = useToast();
        const isDelete = ref(false);
        const isUpdated = ref(false);
        const newPrice = ref(props.params.itemData?.price);
        const rules = {
            newPrice: {required}
        }

        // Methods
        const closeModal = () => {
            isOpen.value = false
            if (isDelete.value) {
                mainStore.deleteStock({stock_id: props.params.itemData?.id})
                .then(() => {
                    isOpen.value = false;
                    toast.success('Stock was deleted');
                }).catch(err => toast.warning(err));
            } else if (isUpdated.value) {
                mainStore.updateStock({stock_id:props.params.itemData?.id, price: newPrice.value})
                .then(() => {
                    isOpen.value = false;
                    toast.success('Stock was updated');
                }).catch(err => toast.warning(err));
            } 
        }

        const openModal = (payload) => {
            isOpen.value = true;

            if (!!payload?.isUpdate) {
                isUpdated.value = true;
                isDelete.value = false;
            } else if (!!payload?.isDelete) {
                isUpdated.value = false;
                isDelete.value = true;
            }
        }

        // Computed
        const menuList = computed(() => {
            let stockMenuList = [
                {name: 'Update unit price', isUpdate: true},
                {name: 'Delete stock', isDelete: true}
            ],
            clientMenuList = [{name: 'View user\'s stock', path: `/user-stocks/${props.params.itemData?.id}`}];
            switch (props.params?.menuType) {
                case 'stock':
                   return  stockMenuList;

                case 'client':
                   return clientMenuList;
                    
                default:
                    return stockMenuList;
            }
        });

        const dialogDynamicTitle = computed(() => {
            if (isDelete.value) return  `Delete ${props.params.itemData?.name} Stock ?`
            else return `Update ${props.params.itemData?.name} Stock ?`
        });

        const dialogDynamicDesc = computed(() => {
            if (isDelete.value) return  `Warning.
            Invested funds will not be returned to users after deletion. Stock ${props.params.itemData?.name} will be deleted.`
            else return `Stock ${props.params.itemData?.name}  will be updated`
        });

        const dialogDynamicBtnTitle = computed(() => {
            if (isDelete.value) return 'Delete'
            else return 'Edit'
        })

        return {
            menuList,
            closeModal,
            openModal,
            isOpen,
            dialogDynamicTitle,
            dialogDynamicDesc,
            dialogDynamicBtnTitle,
            newPrice,
            isDelete,
            isUpdated,
            v$: useVuelidate(rules, {newPrice})
        }
    }
}
</script>