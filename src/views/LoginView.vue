<template>
    <div id="form_container">
        <div class="input_container">
      <input v-model="username" placeholder="Gebruikersnaam" />
      <input v-model="password" type="password" placeholder="Wachtwoord" />
      <button @click="login">Inloggen</button>
    </div>
      <p v-if="showFake2FA" class="fa">Voer uw 2FA-code in: <input v-model="fake2FACode" /></p>
      <button v-if="showFake2FA" @click="verify2FA">Verifiëren</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        fake2FACode: '',
        showFake2FA: false
      };
    },
    methods: {
      login() {
        if (this.username && this.password) {
          this.showFake2FA = true;
        }
      },
      verify2FA() {
        if (this.fake2FACode === '123456') {
          alert('Inloggen succesvol!');
          this.showFake2FA = false;
          this.username = '';
          this.password = '';
          this.fake2FACode = '';
          this.$router.push('/home');
        } else {
          alert('Verkeerde 2FA-code. Probeer het opnieuw.');
        }
      }
    }
  };
  </script>
  <style scoped>
  p.fa {
    text-transform: uppercase;
  font-size: .8rem;
  }
  #form_container {
    padding: 2rem;
  }

  .input_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  button {
    border: none;
    background-color: #00a9a2;
    border-radius: 5px;
    block-size: 2rem;
    font-family: 'HvDTrial Brandon Grotesque', sans-serif;
    color: white;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: .1rem;
    height: 4rem;
    margin: 3px 0;
    width: 100%
  }


  ::placeholder {
 color: #1e292f;
 font-family: 'HvDTrial Brandon Grotesque', sans-serif;
  opacity: .5; 
  text-transform: uppercase;
}

input {
  width: 100%;
  height: 3rem;
  padding: 12px 20px;
  margin: 3px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: 'HvDTrial Brandon Grotesque', sans-serif;
  text-transform: uppercase;
}
  </style>