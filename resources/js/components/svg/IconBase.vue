<script>

import { computed } from "vue";
import sprite from "./sprites.svg";
export default {
  props: {
    width: {
      type: String || Number
    },
    height:{ 
      type: String || Number
    },
    title: {
      type: String
    }
  },

  setup (props) {
    const uri = computed(() => `${sprite}#${props.title}`);
    return {
      uri
    }
  }
  
}


</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height">
    <use :href="uri"></use>
  </svg>
</template>

<style lang="scss" scoped>
use {
  fill: currentColor;
}
</style>
