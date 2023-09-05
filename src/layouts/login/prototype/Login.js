import Prototype from 'src/prototype/Prototype'
import LoginPage from 'pages/login/prototype/LoginPage'
import { lang } from 'src/util/lang'
import { getDarkMode, setDarkMode } from 'src/util/darkMode'

export default class Login extends Prototype {

  /**
   * @type {string}
   */
  classesNames = 'content row'

  /**
   * @type {{padding: string, overflow: string, alignItems: string, borderRadius: string, textAlign: string, width: string, justifyContent: string, alignXontent: string}}
   */
  styleDiv = {
    justifyContent: 'center',
    alignXontent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '960px',
    borderRadius: '10px',
    overflow: 'hidden',
    padding: '30px',
  }

  construct () {
    this.field('icon')
      .fieldIsIcon({
        name: 'account_circle',
        size: '150px'
      })
      .fieldClasses('col-xs-12 col-sm-6 col-md-6')

    this.field('formLogin')
      .fieldIsForm()
      .fieldClasses('col-xs-12 col-sm-6 col-md-6')
      .fieldChildrens(LoginPage.build().provide())

    this.field('darkMode')
      .fieldIsToogle({
        label: lang('login.layout.login.fields.darkMode'),
        value: false
      })
      .fieldDefaultValue(getDarkMode())
      .fieldOn('input', function ({ $event }) {
        setDarkMode($event)
      } )

    this.hook('created', function() {
      alert('Login')
    })
  }
}
