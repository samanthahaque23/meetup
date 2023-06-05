<template >
    <v-container class="align-center d-flex justify-center">
        <v-row >
            <v-col class="align-center d-flex justify-center">
                <v-card style="width:60%;">

                    <form class="pa-4" @submit.prevent="onSignup" >
                        <label for="email"> Email</label>
                        <v-text-field
                            name="email"
                            class="email"
                            id="email"
                            v-model="email"
                            type="email"
                        >
                        </v-text-field>
                        <label for="password"> Password</label>

                        <v-text-field
                            name="password"
                            class="password"
                            id="password"
                            v-model="password"
                             :rules="[rules.required]"
                            type="password"
                        >
                        </v-text-field>
                        <label for="password">Confirm Password</label>

                        <v-text-field
                            name="confirmPassword"
                            class="confirmPassword"
                            id="confirmPassword"
                            v-model="confirmPassword"
                             :rules="[rules.required, rules.match]"
                            type="password"
                        >
                        </v-text-field>
                        <v-btn type="submit">
                            Sign Up
                        </v-btn>
                    </form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data () {
        return {
            email: '',
            password:'',
            confirmPassword:'',
               rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          match: this.comparePasswords,
        },
        }
    },
    computed:{
      user(){
        return this.$store.getters.user
      }
    },
    watch:{
   user(value){
         if(value !== null && value !== undefined ){
          this.$router.push('/')
         }
   }
    },
    methods:{
        onSignup (){
         this.$store.dispatch('signUserUp',{email:this.email,password:this.password})
        },
          comparePasswords () {
            if (this.password !== this.confirmPassword) {
                return "passwords does not match"
            }
            else
            return "confirmed "
         
        }
    }
}
</script>