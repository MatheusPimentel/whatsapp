export default {
  /**
   * @param {Object} attrs
   * @returns {default}
   */
  fieldIsDiv (attrs) {
    const component = {
      is: 'div',
      attrs
    }
    this.setComponent(component)
    return this
  },

  /**
   * @param {Object} attrs
   * @returns {default}
   */
  fieldIsIcon (attrs) {
    const component = {
      is: 'app-icon',
      attrs
    }
    this.setComponent(component)
    return this
  },

  /**
   * @param {Object, require} provide
   * @returns {default}
   */
  fieldIsPrototype (provide) {
    const field = this.getCurrentField()
    field.provide = provide
    return this
  },

  /**
   * @param provides
   * @returns {default}
   */
  fieldChildrens (...provides) {
    const field = this.getCurrentField()
    field.childrens = provides.reduce((accumulate, current) => {
      accumulate.push(current)
      return accumulate
    }, [])
    return this
  },

  /**
   * @param {String} type
   * @param {String, require} label
   * @param {Object} attrs
   * @returns {default}
   */
  fieldIsLabel (type = 'span', label = '', attrs = {}) {
    const component = {
      is: type,
      attrs: { ...attrs, html: label }
    }
    this.setComponent(component)
    return this
  },

  /**
   * @param {Object} attrs
   * @returns {default}
   */
  fieldIsForm (attrs) {
    const component = {
      is: 'q-form',
      attrs
    }
    this.setComponent(component)
    return this
  },

  /**
   * @param {Object} attrs
   * @returns {default}
   */
  fieldIsInput (attrs) {
    const component = {
      is: 'app-input',
      attrs
    }
    this.setComponent(component)
    return this
  },

  /**
   * @param {Object} attrs
   * @returns {default}
   */
  fieldIsButton (attrs) {
    const component = {
      is: 'app-button',
      attrs
    }
    this.setComponent(component)
    return this
  },

  /**
   * @param {Object} attrs
   * @returns {default}
   */
  fieldIsToogle (attrs) {
    const component = {
      is: 'app-toggle',
      attrs
    }
    this.setComponent(component)
    return this
  }
}
