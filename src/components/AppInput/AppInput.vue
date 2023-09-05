<template>
  <q-input
    class="input-component"
    :outlined="outlined"
    :model-value="value"
    :label="label"
    :rules="rules"
    :type="type"
    @update:model-value="input"
  />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppInput',
  emits: ['input'],
  props: {
    value: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    outlined: {
      type: Boolean,
      default: true
    },
    rules: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    input ($event) {
      this.$emit('input', $event)
    }
  }
})
</script>

<style scoped>
</style>
