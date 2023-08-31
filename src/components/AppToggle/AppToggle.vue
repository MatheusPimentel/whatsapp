<template>
  <q-toggle
    class="input-component"
    :label="label"
    v-model="record"
    :model-value="record"
    @update:model-value="input"
  />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppToggle',
  props: {
    value: {
      type: Boolean,
      default: null
    },
    label: {
      type: String,
      default: null
    }
  },
  data: () => ({
    record: true
  }),
  created () {
    this.record = this.value
  },
  methods: {
    input ($event) {
      this.$emit('input', $event)
    }
  },
  watch: {
    value () {
      this.record = this.value
    }
  }
})
</script>

<style scoped>
</style>
