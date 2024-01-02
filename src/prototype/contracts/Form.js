export default {
  methods: {
    parseFieldAttrs (field) {
      return {
        ...field.attrs
      }
    },
    renderField (field) {
      let listeners = {}
      if (field.on) {
        Object.keys(field.on).forEach((event) => {
          listeners[event] = ($event) => this.fieldApplyListener(field.$key, event, $event)
        })
      }
      return {
        $key: field.$key,
        provide: field.provide || false,
        childrens: field.childrens || false,
        attrs: this.parseFieldAttrs(field),
        is: field.is,
        on: field.on || [],
        layout: field.layout,
        listeners
      }
    },
    fieldApplyListener ($key, listenerName, $event) {
      return this.components[$key].on[listenerName].forEach((listener) => {
        listener.call(this, {$event, field: this.components[$key]})
      })
    }
  }
}
