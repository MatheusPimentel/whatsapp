/**
 * @param name
 * @param is
 * @param attrs
 * @param on
 * @returns {{$key, is: string, attrs: {}, on: {}}}
 */
export default (name, is = '', attrs = {}, on = {}) => ({
  $key: name,
  is,
  attrs,
  on,
  layout: {
    fieldHidden: false
  }
})
