<template>
    <v-container>
        <v-card class="pa-3 ma-3" width="800px" height="80vh">
            <v-form ref="form" @submit.prevent="onCreateMeetup">
                <h2 class="centralized">Create a New Meetup</h2>
                <v-text-field
                    name="title"
                    label="title"
                    id="title"
                    v-model="title"
                    required
                ></v-text-field>

                  <v-text-field
                    name="Location"
                    label="Location"
                    id="Location"
                    v-model="location"
                    required
                ></v-text-field>

                    <v-text-field
                    name="imageUrl"
                    v-model="imageUrl"
                    label="imageUrl"
                    id="image_url"
                    required
                ></v-text-field>
                <v-img max-width="300px" max-height="250px" :src="imageUrl"></v-img>
                    <v-text-field
                    name="description"
                    label="description"
                    v-model="description"
                    id="description"
                    required
                    multi-line
                ></v-text-field>
                      
             <div class="float-right">
               
                   <v-btn color="primary" class="mr-4" :disabled="!formIsValid" type="submit">
                  Save
                </v-btn>

                <v-btn color="secondary">
                 Cancel
                </v-btn>
             </div>
            </v-form>
        </v-card></v-container
    >
</template>

<script>export default {
    data () {
        return {
            title: '',
            location:'',
            imageUrl:'',
            description:''
        }
    },
    computed:{
        formIsValid(){
            return this.title !== '' && this.location !== '' && this.imageUrl !== '' && this.description !== ''
        }
    },
    methods:{
        onCreateMeetup (){
            const meetupData = {
               title: this.title ,
               location: this.location,
               imageUrl: this.imageUrl,
               description: this.description,
               date: new Date()

            }
            this.$store.dispatch('createMeetup',meetupData)
        }
    }
}
</script>