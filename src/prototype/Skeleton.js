import Basic from 'src/prototype/Basic'
import field from 'src/prototype/config/field'

/**
 */
export default class Skeleton extends Basic {
  /**
   * @param {String} name
   * @param {Object} attr
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

  getCurrentField () {
    return this.__fields[this.__currentField]
  }

  /**
   * @returns {Object}
   */
  provide () {
    return {
      fields: () => this.fields(),
      classConfig: () => this.classConfig()
    }
  }
}
