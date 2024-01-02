export default {
  title: 'Sign Up',
  fields: {
    name: 'Name',
    email: 'Email',
    password: 'Password',
    signUp: 'Already have an account? Sign in here!'
  },
  validations: {
    name: {
      nameRequired: 'Name is required!'
    },
    email: {
      emailRequired: 'Email is required!',
      invalidEmail: 'You have entered an invalid email address!'
    },
    password: {
      passwordRequired: 'Password is required!'
    }
  },
  buttons: {
    signUp: 'Sign Up'
  }
}
