<!-- eslint-disable vue/multi-word-component-names -->
<template>
   <v-container>
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
    data() {
        return {
            meetups: [
                { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/1200px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg',id:'gfgf',title:"meetup in NYC"},
                { imageUrl: 'https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840_1280.jpg',id:'gfgf',title:"meetup in PARIS"},
                { imageUrl: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/08/142845.jpg',id:'gfgf',title:"meetup in UAE"},
            ]
        }
    },
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