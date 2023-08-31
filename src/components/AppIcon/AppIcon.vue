<template>
  <q-icon
    :name="name"
    :size="size"
  />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppIcon',
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped>

</style>
