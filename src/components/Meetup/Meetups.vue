<!-- eslint-disable vue/multi-word-component-names -->h3
<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card v-for="meetup in meetups" :key="meetup.id">
                    <v-row class="pa-4 my-2">
                        <v-col class="col-md-4">
                            <v-img
                                max-height="200"
                                max-width="300"
                                :src="meetup.imageUrl"
                            ></v-img>
                        </v-col>
                        <v-col class="ma-4">
                            <div class="d-flex justify-center flex-column">
                                <h3>{{meetup.title }}</h3>
                                <p>{{ meetup.date | date }}</p>
                                <v-btn
                                    text
                                    style="width:200px;color:white"                                   
                                    class="primary mt-4"
                                    :to=" '/meetup/'+ meetup.id"

                                >
                                    <v-icon color="white"
                                        >mdi-arrow-right</v-icon
                                    >
                                    <span class="pa-1">VIEW MEETUP</span>
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
       
    </v-container>
</template>
<script>
 export default  {
    computed: {
        meetups () {
            return this.$store.getters.loadedMeetups;
        }
    }
 }
</script>