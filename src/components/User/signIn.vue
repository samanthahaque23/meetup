<template >
    <v-container class="align-center d-flex justify-center" style="height:93vh">
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
                          
                            type="password"
                        >
                        </v-text-field>
                      
                        <v-btn type="submit">
                            Sign In
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
         this.$store.dispatch('signUserIn',{email:this.email,password:this.password})
        },
    }
}
</script>