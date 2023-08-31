import Skeleton from 'src/prototype/Skeleton'
import fieldIs from 'src/prototype/mixins/FieldIs'
import { lang } from 'src/util/lang'

export default class Prototype extends Skeleton {

  /**
   * @type {[{fieldIsDiv(*): this}]}
   */
  static mixins = [fieldIs]

  /**
   * @param clazz
   */
  fieldClasses (clazz) {
    const classes =  {
      'class': clazz
    }
    this.setAttrs(classes)
    return this
  }

  fieldRequired (message) {
    const name = this.__currentField
    const field = this.__fields[name]
    const rules = [ record => (record && record.length > 0) || (message ? message : lang('prototype.prototype.validations.required')) ]
    if (!field.attrs.rules) {
      field.attrs.rules = rules
      return this
    }
    this.__fields[name].attrs.rules = field.attrs.rules.concat(rules)
    return this
  }

  /**
   * @param rules
   * @returns {Prototype}
   */
  fieldRules (rules) {
    const name = this.__currentField
    const field = this.__fields[name]
    if (!field.attrs.rules) {
      field.attrs.rules = rules
      return this
    }
    this.__fields[name].attrs.rules = field.attrs.rules.concat(rules)
    return this
  }

  /**
   * @param event
   * @param callable
   * @param reset
   * @returns {Prototype}
   */
  fieldOn (event, callable, reset) {
    return this.setOn(event, callable, reset)
  }

  fieldDefaultValue (value) {
    this.setAttrs({ value })
    return this
  }
}
