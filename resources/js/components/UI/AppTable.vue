<template>
    <div class="table-wrapper bg-white w-full">
        <table class="table table-auto border-collapse w-full">
          <thead>
            <tr
              class="table__thead-tr text-regular-Light-gray text-[14px] leading-[16.98px] whitespace-nowrap leading-4 tracking-wider gap-3"
            >
              <th
                v-for="item in headerData"
                :key="item"
                class="table__thead-th text-center font-normal px-[18px] first:pl-0"
              >
                {{ item }}
              </th>
            </tr>
          </thead>
          <tbody class="">
            <tr
              v-for="(item, id) in params.cellData"
              :key="id"
              class="border-b border-[#D8DADD] last:border-b-0"
            >
              <td
                v-for="(tableCell, index) in item"
                :key="item['file_name']"
                class="py-[20px] px-[18px]"
              >
                <div class="span-container">
                  <span
                    class="flex justify-center cursor-pointer"
                  >
                    <span v-if="checkIsNumberCol(index)" :class="{
                    'is_negative': isNegative(tableCell) === 'negative', 
                    'is_neutral': isNegative(tableCell) === 'neutral',
                    'is_positive': isNegative(tableCell) === 'positive'}" v-html="tableCell"></span>
                    <span v-else v-html="tableCell"></span>
                  </span>
                </div>
              </td>
              <td
                v-if="!!params?.isAction"
                class="pr-5 pl-5 last:text-center"
              >
                <table-popup :params="{ menuType: params.type, itemData: item }" />
              </td>
            </tr>
          </tbody>
        </table>
    </div>
</template>
<script>
import { computed } from 'vue-demi'
export default {
    name: 'AppTable',

    props: {
        params: {
            type: Object,
            default: () => {
                return {
                    headers: [],
                    isAction: true,
                    type: 'client',
                    cellData: []
                }
            } 
        }
    },

    setup (props) {
        
        const headerData = computed(() => {
            if (!!props.params.isAction) {
                return [...props.params.headers, 'Actions']
            } return props.params.headers;
        });

        const isNegative = computed(() => {
          return payload => {
            let checkNumber = Math.sign(payload);
            if (checkNumber == -1) return 'negative'
            else if (checkNumber == 0 || checkNumber == -0 || checkNumber == NaN ) return 'neutral'
            else return 'positive'
          }
        })

        const checkIsNumberCol = computed(() => {
         return index => props.params?.type == 'client' && index === 'gain_loss' ? true : false
        })

        return {
            headerData,
            isNegative,
            checkIsNumberCol
        }
    }
}
</script>
<style lang="scss" scope>
    @import './AppTable.scss';
</style>