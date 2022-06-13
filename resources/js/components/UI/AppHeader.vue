<template>
    <nav class="app-header container mx-auto">
        <div class="app-header-logo">
            {{appHeaderName}}
        </div>
        <div class="app-header-page__list">
            <span v-for="(item, index) in linkList"
            :key="`header-link-${index}`">
                <router-link :to="item.link">{{item.name}}</router-link>
            </span>
        </div>
    </nav>
</template>
<script>
import { ref } from '@vue/reactivity';
import { storeToRefs } from 'pinia'
import {useMainStore} from '../../store/main.js'
export default {
    name: 'AppHeader',
    setup () {
        // Data
        const linkList = ref([
            {
                link: '/stocks',
                name: 'Stock List'
            },
            {
                link: '/clients',
                name: 'Client List'
            },
            {
                link: '/stock/buy',
                name: 'Buy Stock'
            }
        ]);

        const mainStore = useMainStore();

        const { appHeaderName } = storeToRefs(mainStore);

        // Methods

        // Computed

        return {
            linkList,
            appHeaderName
        }
    }
}
</script>
<style lang="scss" scope>
    .app-header {
    height: 100%;
    min-height: 4em;
    align-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: 4fr 6fr;

    &-logo {
        font-weight: bold;
        font-size: 1.25rem;
        cursor: default;
    }

    &-page__list {
        display: flex;
        justify-content: space-between;
        span {
            cursor: pointer;
            &:hover {
                border-bottom: 0.5px solid #3a3a3a;
            }
            a {
                padding: 0 0.5em;
            }
        }
    }
}

</style>