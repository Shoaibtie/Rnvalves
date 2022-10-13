/* eslint-disable prettier/prettier */
class Environment {
  constructor() {
    this.setEnvironment('dev');   //http://40.79.64.69:85/api
    //this.setEnvironment('sandbox');
    // this.setEnvironment('production');
  }

  setEnvironment(env) {
    this.environment = env;

    if (env === 'dev') {
      // Base URL
      this.baseURI = 'https://rnsvalves.com/api/';
      //this.baseURI = 'https://internationalelectrical-qa.chetu.com/api/v1';

      // API URLs on Registeration screen
      // this.registrationURL = '/registration';
      this.loginDataURL = 'crud/field-executives-auth';
      this.categoryDataURL = 'v1/catalogue-inventory/section';
    


      // this.forgotPasswordURL = '/Account/ForgotPassword?';

    }
  }
}

const Env = new Environment();

export default Env;
