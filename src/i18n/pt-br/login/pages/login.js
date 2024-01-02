export default {
  title: 'Login',
  fields: {
    email: 'Email',
    password: 'Password',
    signUp: 'Not a member? Sign up here!'
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
