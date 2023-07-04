<!-- eslint-disable vue/multi-word-component-names -->
<template>
   <v-container color="background">
    <v-row>
        <v-col>
            <v-flex class="text-lg-right text-sm-center">
                <v-btn large router to="/meetups" class="primary ma-1">Explore Meetups</v-btn>
                <v-btn large router to="/meetup/new" class="primary ma-1">Organize Meetups</v-btn>
            </v-flex>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
             <v-carousel :show-arrows="false">
    <v-carousel-item
      v-for="meetup in meetups"
      :key="meetup.id"
      :src="meetup.imageUrl"
      @click="onLoadMeetup(meetup.id)"
    >
    <div class="carousel-title">{{ meetup.title }}</div>

    </v-carousel-item>
  </v-carousel>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum odit laudantium ab sequi similique nisi molestias ad earum magni eos? Lorem ipsum dolor, s
                it amet consectetur adipisicing elit. Perspiciatis amet reprehenderit, error explicabo eius quo architecto iste neque quibusdam impedit 
                nulla eveniet recusandae consequatur odio. Ex illum expedita ut exercitationem, harum doloremque vel. Repellendus nam placeat veritatis quaerat, inventore possimus.</p>
        </v-col>
    </v-row>
   </v-container>
</template>
<script>
export default {
    computed:{
        meetups (){
            return this.$store.getters.featuredMeetups
        }
    },
    methods:{
        onLoadMeetup(id){
            this.$router.push('/meetup/' + id);
        }
    }
}
</script>
<style>
.main{
    height: 90vh;
}
.carousel-title{
    background: rgba(4, 4, 4, 0.293);
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    padding: 10px;
    text-transform: capitalize;
    color: #f3f3f3a3;
    position: absolute;
    bottom: 50px;
    width: 100%;


}
</style>