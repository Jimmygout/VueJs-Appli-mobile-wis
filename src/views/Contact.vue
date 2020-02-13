  <template>
  <div class="recaptcha">
    <h1 class="text-center mt-3">Contactez nous</h1>
    <v-container>
     <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="Prenom"
      :rules="prenomRules"
      label="Prenom"
      required
    ></v-text-field>

    <v-text-field
      v-model="Nom"
      :rules="nomRules"
      label="Nom"
      required
    ></v-text-field>

    <v-text-field
      v-model="Nom"
      :rules="nomRules"
      label="Téléphone"
      required
      type="phone"
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-textarea
      clearable
      v-model="commentaire"
      :rules="commentaireRules"
      label="Commentaire"
      required
    ></v-textarea>
<!--
    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>
-->
   <b-row>
      <b-col class="p-5 mb-2">
        <div class="text-center justify-center align-center">
          <Recaptcha :rules="[v => !!v || 'You must agree to continue!']" v-if="!logged" @validate="validate"/>
        </div>
      </b-col>
    </b-row>
    <!--
    <b-row no-gutters>
      <b-col class="p-0">
        <div class="text-center">
          <a @click="checkFrom('next')" :class="this.validateRecaptcha ? '' : 'disabled'" class="btn btn-primary text-white m-1">Forward</a>
        </div>
      </b-col>
    </b-row>
    -->
    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4 mt-3"
      @click="validate"
    >
      Valider
    </v-btn>

    <v-btn
      color="error"
      class="mr-4 mt-3"
      @click="reset"
    >
      Recommencer
    </v-btn>

  </v-form>

      
    </v-container>
    </div>
     </template>
     
     <script>
        import Recaptcha from '@/components/Recaptcha.vue'
        export default {
          components: {Recaptcha},
          data () {
            return {
              valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
            }
          },
          methods: {
            validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
        }
        }
      </script>