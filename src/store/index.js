import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:
    {
        loadedMeetups:[
            { date:'17-july,1996',imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/1200px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg',id:'gfg',title:"meetup in NYC"},
            { date:'17-july,1996',imageUrl: 'https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840_1280.jpg',id:'ggf',title:"meetup in PARIS"},
            { date:'17-july,1996',imageUrl: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/08/142845.jpg',id:'gff',title:"meetup in UAE"},
        ],
        User:{
            id:'gfg',
            registeredMeetup : ['ffg']
        }
    },
    mutations: {
        createMeetup (state, payload ) {
            state.loadedMeetups.push(payload)
        }
    },
    actions:{
        createMeetup({commit},payload){
            const meetup = {
                title: payload.title,
                localStorage: payload.location,
                imageUrl:payload.imageUrl,
                description: payload.description,
                date:payload.date,
                id:'gfg'
            }
            //reach out to fire bae and storage
            commit('createMeetup',meetup)
        }
    },
    getters:{
        loadedMeetups(state){
            return state.loadedMeetups.sort((meetupA,meetupB) => {
                return meetupA.date > meetupB.date
            })
        },
        loadedMeetup (state){
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id === meetupId
                })
            }
        },
        featuredMeetups(state,getters){
            return getters.loadedMeetups.slice(0,5);
        }
    }
})