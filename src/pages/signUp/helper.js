import { lang } from 'src/util/lang'

/**
 * @type {{rules: (function(*): *)[], label: (String|Object), type: string}}
 */
export const attrsName = {
  label: lang('login.pages.sign-up.fields.name')
}

/**
 * @type {{rules: (function(*): *)[], label: (String|Object), type: string}}
 */
export const attrsEmail = {
  label: lang('login.pages.sign-up.fields.name'),
  type: 'email',
  rules: [
    email => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) || lang('login.pages.login.validations.email.invalidEmail')
  ]
}

/**
 * @type {{label: (String|Object), type: string}}
 */
export const attrsPassword = {
  label: lang('login.pages.sign-up.fields.password'),
  type: 'password'
}
