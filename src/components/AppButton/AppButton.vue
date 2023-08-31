<template>
  <q-btn
    v-if="icon != null"
    :class="(size !== null ? '' : 'button') + ' input-component'"
    :label="label"
    :color="color"
    :outline="getOutlined"
    :round="round"
    :icon="icon"
    :size="size"
    :style="style"
    @click="$emit('click')"
  />
  <q-btn
    v-else
    :class="(size !== null ? '' : 'button') + ' input-component'"
    :label="label"
    :color="color"
    :outline="getOutlined"
    :round="round"
    :size="size"
    :style="style"
    @click="$emit('click')"
  />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppButton',
  emits: ['click'],
  props: {
    label: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: null
    },
    outlined: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null
    },
    style: {
      type: Object,
      default: null
    }
  },
  computed: {
    getOutlined () {
      return this.$q.dark.isActive ? true : this.outlined
    }
  }
})
</script>

<style scoped>
.button {
  width: 100%;
}
</style>
