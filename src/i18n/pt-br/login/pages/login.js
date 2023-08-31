export default {
  title: 'Login',
  fields: {
    email: 'Email',
    password: 'Password'
  },
  validations: {
    email: {
      emailRequired: 'Email is required!',
      invalidEmail: 'You have entered an invalid email address!'
    },
    password: {
      passwordRequired: 'Password is required!'
    }
  },
  buttons: {
    login: 'Login'
  }
}
