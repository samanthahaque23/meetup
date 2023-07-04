<template >
    <v-container class="align-center d-flex justify-center" style="height:93vh">
        <v-row >
       
            <v-col class="align-center d-flex justify-center">

                <v-card style="width:60%;">
      <v-col class="col-md-12" v-if="error">
                        <app-alert
                            @dismissed="onDismissed"
                            color="error"
                            :text="error"
                        ></app-alert>
                    </v-col>
                    <form class="pa-4" @submit.prevent="onSignIn" >
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
                      
                       <v-btn
                            :loading="loading"
                            :disabled ="loading"
                            type="submit"
                            class="flex-grow-1"
                            height="48"
                            variant="tonal"
                            @click="load"
                        >
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
      },
           error() {
            console.log(this.$store.getters.error, "comp");
            return this.$store.getters.error;
        },
        loading(){
            return this.$store.getters.loading;

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
        onSignIn (){
         this.$store.dispatch('signUserIn',{email:this.email,password:this.password})
        },
          onDismissed() {
            console.log("dis");
            this.$store.dispatch("clearError");
        },
        
    }
}
</script>