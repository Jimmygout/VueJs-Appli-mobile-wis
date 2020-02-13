  <template>
         <VueRecaptcha sitekey="6LdSONcUAAAAAAs12SW9HLjMC_YQbRx-0QeF7cvQ" :loadRecaptchaScript="true" @verify="validate"/>
     </template>
     <script>
        import VueRecaptcha from 'vue-recaptcha'
        import Validation from '@/services/recaptchaValidate'
        export default {
          name: 'Recaptcha',
          components: {VueRecaptcha},
          data () {
            return {
             
            }
          },
          methods: {
            validate (response) {
              Validation.validate({Response: response}).then(result => {
                this.$emit('validate', result.objectResult.success)
              })
            }
          }
        }
      </script>