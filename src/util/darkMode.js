/**
 * @returns {boolean}
 */
export const getDarkMode = function () {
  return window.app.config.globalProperties.$q.dark.isActive
}

/**
 * @param {Boolean} value
 */
export const setDarkMode = function (value) {
  window.app.config.globalProperties.$q.dark.set(value)
}
