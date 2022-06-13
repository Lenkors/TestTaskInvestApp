<template>
   <VueTailwindPagination
        :current="params.currentPage"
        :total="params.total"
        :per-page="params.perPage"
        @page-changed="params.action($event)"

        text-before-input="Before"
        text-after-input="Next"/>
</template>
<script>
import '@ocrv/vue-tailwind-pagination/styles'
import VueTailwindPagination from '@ocrv/vue-tailwind-pagination'

export default {
    name: 'Pagination',
    components: {
        VueTailwindPagination,
    }, 
    props: {
        params: {
            type: Object,
            default: () => {
                return {
                    currentPage: 1,
                    total: 6,
                    perPage: 6,
                    action: () => {}
                }
            }
        }
    }
}
</script>