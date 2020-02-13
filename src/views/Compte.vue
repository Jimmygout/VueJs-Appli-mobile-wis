  <template>
  <div class="recaptcha">
    <h1 class="text-center mt-3">Connexion</h1>
    <v-container>
     <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="email"
      :rules="mailRules"
      label="Adresse Mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :rules="passwordRules"
      label="Mot de passe"
      type="password"
      required
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4 mt-3"
      @click="validate"
    >
      Connexion
    </v-btn>

  </v-form>

      
    </v-container>
    </div>
     </template>
     
     <script>
        export default {
          data () {
            return {
              valid: true,
              password:'',
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
            }
          },
          methods: {
            validate () {
        if (this.$refs.form.validate()) {
          this.$axios.post('http://localhost:8000/authentication_token', {
    email: this.email,
    password: this.password
      })
        }
      },
        }
        }
      </script>