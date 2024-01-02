import Basic from 'src/prototype/Basic'
import field from 'src/prototype/config/field'

/**
 */
export default class Skeleton extends Basic {
  /**
   * @param name
   * @param attr
   * @returns {Skeleton}
   */
  field (name, attr = {}) {
    const is = this.is
    this.__currentField = name
    const attrs = { value: null, ...attr }
    this.__fields[name] = field(name, is, attrs)
    this.setAttrs({
      class: 'col-xs-12 col-sm-12 col-md-12'
    })
    return this
  }

  /**
   * @param layout
   * @returns {Skeleton}
   */
  setLayout (layout) {
    const name = this.__currentField
    const field = this.__fields[name]
    this.__fields[name].layout = Object.assign(field.layout, layout)
    return this
  }

  /**
   * @param name
   * @param handler
   * @returns {Skeleton}
   */
  hook (name, handler) {
    this.__hooks[name] = handler
    return this
  }

  getCurrentField () {
    return this.__fields[this.__currentField]
  }

  /**
   * @returns {Object}
   */
  provide () {
    return {
      fields: () => this.fields(),
      classConfig: () => this.classConfig(),
      hooks: () => this.hooks()
    }
  }
}
