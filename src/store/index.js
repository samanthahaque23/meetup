/* eslint-disable no-undef */
import Vue from 'vue';
import Vuex from 'vuex';
import firebase from "firebase";

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:
    {
        loadedMeetups:[
            {location: 'New York',description:'yay its new york', date:new Date(),imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/1200px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg',id:'gfg',title:"meetup in NYC"},
            {location: 'New York',description:'yay its new york', date:new Date(),imageUrl: 'https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840_1280.jpg',id:'ggf',title:"meetup in PARIS"},
            {location: 'New York',description:'yay its new york', date:new Date(),imageUrl: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/08/142845.jpg',id:'gff',title:"meetup in UAE"},
        ],
        user:null,
        error: null
       
    },
    mutations: {
        createMeetup (state, payload ) {
            state.loadedMeetups.push(payload)
        },
        setUser(state,payload){
            state.user = payload;
        },
        setLoading(state,payload){
            state.loading = payload;
        },
        setError(state, payload){
            state.error = payload;
        },
        clearError(state){
            state.error = null;
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
                id: new Date().toISOString()
            }
            //reach out to fire bae and storage
            commit('createMeetup',meetup)
        },
        signUserUp({commit}, payload) {
           commit('setLoading', true)
           commit('clearError')
           firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password).then( user => {
                commit('setLoading',false)
                const newUser = {
                    id: user.uid,
                    registeredMeetups: []
                }
                commit('setUser', newUser)
            }
           )
           .catch( error => {
                commit('setLoading',false)
                commit('setError', error)
                console.log(error);
            }
           )
        },
        signUserIn({commit},payload){
           firebase.auth().signInWithEmailAndPassword(payload.email,payload.password)
           .then(
                user => {
                    const newUser = {
                     id: user.uid,
                     registeredMeetups: []
                    }
                    commit('setUser',newUser)
                 }
           )
           .catch(
            error => {
                console.log(error);
            }
           )
        },
     
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
        user(state){

           return state.user;
        },
        featuredMeetups(state,getters){
            return getters.loadedMeetups.slice(0,5);
        },
        error(state){
            return state.error
        },
        loading(state){
            return state.loading
        }
  
    }
})