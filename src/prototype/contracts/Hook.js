export default {
  methods: {
    /**
     * @param {String} hook
     */
    triggerHook (hook) {
      let action
      const hooks = this.getHooks

      if (hooks && hooks[hook] && typeof hooks[hook] === 'function') {
        action = hooks[hook]
      }

      if (!action) {
        return
      }
      action.call(this)
    }
  },
  created () {
    this.triggerHook('created')
  },
  beforeMount () {
    this.triggerHook('beforeMount')
  },
  mounted () {
    this.triggerHook('mounted')
  },
  beforeUpdate () {
    this.triggerHook('beforeUpdate')
  },
  updated () {
    this.triggerHook('updated')
  },
  beforeUnmount () {
    this.triggerHook('beforeUnmount')
  },
  unmounted () {
    this.triggerHook('unmounted')
  }
}
