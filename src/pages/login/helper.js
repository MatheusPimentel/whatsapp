import { lang } from 'src/util/lang'

/**
 * @type {{rules: (function(*): *)[], label: (String|Object), type: string}}
 */
export const attrsEmail = {
  label: lang('login.pages.login.title'),
  type: 'email',
  rules: [
    email => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) || lang('login.pages.login.validations.email.invalidEmail')
  ]
}

/**
 * @type {{label: (String|Object), type: string}}
 */
export const attrsPassword = {
  label: lang('login.pages.login.fields.password'),
  type: 'password'
}
