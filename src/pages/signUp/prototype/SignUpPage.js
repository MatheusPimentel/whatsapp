import Prototype from 'src/prototype/Prototype'
import { lang } from 'src/util/lang'
import { checkLoginState, login } from 'src/util/facebook'
import { attrsName, attrsEmail, attrsPassword } from 'pages/signUp/helper'

/**
 * @type {SignUpPage}
 */
export default class SignUpPage extends Prototype {
  /**
   * @type {string}
   */
  classesNames = 'none'

  styleDiv = {
    width: '100%'
  }

  construct () {
    this.field('labelSignUp')
      .fieldIsLabel('h3', lang('login.pages.sign-up.title'))

    this.field('name')
      .fieldRequired(lang('login.pages.sign-up.validations.name.nameRequired'))
      .fieldIsInput(attrsName)

    this.field('email')
      .fieldRequired(lang('login.pages.sign-up.validations.email.emailRequired'))
      .fieldIsInput(attrsEmail)

    this.field('password')
      .fieldRequired(lang('login.pages.sign-up.validations.password.passwordRequired'))
      .fieldIsInput(attrsPassword)

    this.field('btnSignUp')
      .fieldIsButton({
        label: lang('login.pages.sign-up.buttons.signUp'),
        color: 'primary'
      })

    this.field('signIn')
      .fieldIsLabel('span', lang('login.pages.sign-up.fields.signUp'))
      .setAttrs({
        style: {
          display: 'block',
          width: '100%',
          textAlign: 'end',
          cursor: 'pointer',
          textDecoration: 'underline',
          color: '#0000EE'
        }
      })
      .fieldOn('click', function() {
        Object.keys(this.record).forEach(key => this.record[key] = null)
        this.$emit('click-sign-in', true)
      })

    this.hook('created', function() {
      checkLoginState.call(this)
    })
  }
}
