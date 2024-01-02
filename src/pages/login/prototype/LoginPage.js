import Prototype from 'src/prototype/Prototype'
import { lang } from 'src/util/lang'
import { attrsEmail, attrsPassword } from 'pages/login/helper'
import { checkLoginState, login } from 'src/util/facebook'

/**
 * @type {LoginPage}
 */
export default class LoginPage extends Prototype {
  /**
   * @type {string}
   */
  classesNames = 'none'

  styleDiv = {
    width: '100%'
  }

  construct () {
    this.field('labelLogin')
      .fieldIsLabel('h3', lang('login.pages.login.title'))

    this.field('email')
      .fieldRequired(lang('login.pages.login.validations.email.emailRequired'))
      .fieldIsInput(attrsEmail)

    this.field('password')
      .fieldRequired(lang('login.pages.login.validations.password.passwordRequired'))
      .fieldIsInput(attrsPassword)

    this.field('btnLogin')
      .fieldIsButton({
        label: lang('login.pages.login.buttons.login'),
        color: 'primary'
      })

    this.field('btnfacebook')
      .fieldIsButton({
        round: true,
        icon: 'facebook',
        size: 'lg',
        style: {
          color: '#3B5998',
          background: '#3B5998'
        }
      })
      .fieldOn('click', function() {
        login.call(this)
      })

    this.field('btnGmail')
      .fieldIsButton({
        round: true,
        icon: 'mail',
        size: 'lg',
        style: {
          color: '#EA4335',
          background: '#EA4335',
          marginLeft: '10px'
        }
      })

    this.field('signUp')
      .fieldIsLabel('span', lang('login.pages.login.fields.signUp'))
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
        this.$emit('click-sign-up', true)
      })

    this.hook('created', function() {
      checkLoginState.call(this)
    })
  }
}
