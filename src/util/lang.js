/**
 * @param {String|Array} key
 * @param {Object} parameters
 * @param {String} [fallback]
 * @returns {String|Object}
 */
export const lang = (key, parameters = {}, fallback = '') => {
  if (typeof key === 'string') {
    const clear = key.replace(/\//g, '.')
    if (window.app.i18n.global.te(clear)) {
      return window.app.i18n.global.t(clear, window.app.i18n.global.locale, parameters)
    }
    return fallback || key
  }

  for (let path in key) {
    if (!key.hasOwnProperty(path)) {
      continue
    }

    let clear = typeof key[path] === 'string' ? key[path].replace(/\//g, '.') : ''
    if (!window.app.i18n.global.te(clear)) {
      continue
    }
    return window.app.i18n.global.t(clear, window.app.i18n.global.locale, parameters)
  }
  return fallback
}
