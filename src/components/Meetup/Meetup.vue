<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card class="ma-2" elevation="10">
                    <v-card-title>
                        <h2 class="primary--text">{{ meetup.title }} </h2>
                    </v-card-title>
                    <v-row>
                        <v-col class="mx-3">
                            <v-img max-height="500px"  :src="meetup.imageUrl"></v-img>
                        </v-col>
                    </v-row>
                    <v-row class="primary--text mx-3">
                        <div>{{meetup.title }}</div>
                    </v-row>
                     <v-row class="primary--text mx-3">
                        <div>{{ meetup.description }}</div>
                    </v-row>
                     <v-row class="primary--text mx-3">
                        <div><b><h4>{{ meetup.date | date}} - {{ meetup.location }}</h4></b></div>
                    </v-row>
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-btn class="warning ma-4">
                            Register
                        </v-btn>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template> 
<script>
 export default  {
    props:['id'],
    computed: {
        meetup () {          
            return this.$store.getters.loadedMeetup(this.id)
        }
    }
 }
</script>