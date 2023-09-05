import Prototype from 'src/prototype/Prototype'
import { lang } from 'src/util/lang'
import { attrsEmail, attrsPassword } from 'pages/login/helper'

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

    this.hook('created', function() {
      alert('Login Page')
    })
  }
}
