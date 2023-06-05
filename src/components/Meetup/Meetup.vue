<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card class="ma-2">
                    <v-card-title>{{ meetup.title }} </v-card-title>
                    <v-row>
                        <v-col>
                            <v-img max-height="500px"  :src="meetup.imageUrl"></v-img>
                        </v-col>
                    </v-row>
                    <v-row class="primary--text pl-4">
                        <div>{{meetup.title }}S</div>
                    </v-row>
                     <v-row class="primary--text pa-4">
                        <div>{{ meetup.date | date}} - {{ meetup.location }}Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione vero in quo similique tenetur commodi est ipsam eius tempore voluptatum!</div>
                        <div>{{ meetup.description }}</div>
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