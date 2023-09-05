/**
 */
export default class Basic {
  /**
   * @type {string}
   */
  is = 'AppInput'

  /**
   * @type {string}
   */
  classesNames = ''

  /**
   * @type {{}}
   */
  styleDiv = undefined

  /**
   * @type {Array}
   */
  static mixins = []

  /**
   */
  constructor () {
    this.__fields = {}
    this.__hooks = {}

    try {
      this.init()
      if (this.construct && typeof this.construct === 'function') {
        this.construct()
        return
      }
    }
    catch (e) {
      console.error(e)
      return
    }
    throw new Error('Invalid `construct` method on prototype instance')
  }

  static build () {
    return new this()
  }

  /**
   * @returns {Object}
   */
  fields () {
    return this.__fields
  }

  /**
   * @returns {Object}
   */
  hooks () {
    return this.__hooks
  }

  classConfig () {
    if (!this.classesNames && !this.styleDiv) {
      return null
    }
    return {
      'class': this.classesNames,
      'style': this.styleDiv
    }
  }

  /**
   */
  init () {
    this.constructor.mixins.forEach((mixin) => this.mixin(mixin))
  }

  /**
   * @param {Object} mixin
   */
  mixin (mixin) {
    if (typeof mixin !== 'object') {
      return
    }
    Object.keys(mixin)
      .forEach((method) => {
        if (this[method]) {
          return
        }
        if (typeof mixin[method] !== 'function') {
          return
        }
        this[method] = mixin[method].bind(this)
      })
  }

  /**
   * @param  component
   * @returns {this}
   */
  setComponent (component) {
    this.setIs(component.is)
    this.setAttrs(component.attrs)
    return this
  }

  /**
   * @param {String} component
   * @returns {this}
   */
  setIs (component) {
    const name = this.__currentField
    const field = this.__fields[name]
    field.is = component
    return this
  }

  /**
   * @param {Object} attrs
   * @returns {this}
   */
  setAttrs (attrs) {
    const name = this.__currentField
    const field = this.__fields[name]
    this.__fields[name].attrs = Object.assign(field.attrs, attrs)
    return this
  }

  /**
   * @param {String} event
   * @param {Function} callable
   * @param {Boolean} reset
   * @returns {this}
   */
  setOn (event, callable, reset = false) {
    const name = this.__currentField
    if (!this.__fields[name].on[event] || reset) {
      this.__fields[name].on[event] = []
    }
    this.__fields[name].on[event].push(callable)
    return this
  }
}
