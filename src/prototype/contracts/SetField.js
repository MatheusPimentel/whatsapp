export default {
  methods: {
    /**
     * @param component
     * @param layout
     * @param value
     * @returns {default.methods}
     */
    setFieldLayout (component, layout, value) {
      this.components[component].layout[layout] = value
      return this
    }
  }
}
