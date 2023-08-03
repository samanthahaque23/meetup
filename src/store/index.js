/* eslint-disable no-undef */
import Vue from 'vue';
import Vuex from 'vuex';
import firebase from "firebase";
import 'firebase/storage';

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
        error: null,
        loading:false,        
    },
    mutations: {
        setLoadedMeetups(state,payload){
            state.loadedMeetups = payload
        },
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
        loadMeetups({commit}){
        commit('setLoading',true)
          firebase.database().ref('meetups').once('value')
          .then((data)=>{
            const meetups = []
            const obj = data.val()
            for(let key in obj){
                meetups.push({
                    id:key,
                    title:obj[key].title,
                    location:obj[key].location,
                    description:obj[key].description,
                    imageUrl:obj[key].imageUrl,
                    date:obj[key].date,
                    creatorId:obj[key].creatorId

                })
            }
            commit('setLoading',false)
            commit('setLoadedMeetups',meetups)
          })
          .catch(
            (error) =>{
                console.log(error);
                commit('setLoading',false)

            }

          )  
        },
        createMeetup({commit,getters},payload){
            const meetup = {
                title: payload.title,
                location: payload.location,
                description: payload.description,
                date:payload.date.toISOString(),
                creatorId:getters.user.id
            }
            let imageUrl
            let key
            firebase.database().ref('meetups').push(meetup)
            .then((data)=>{
                console.log(data,"data");
                 key = data.key
              
                return key;
            })
            .then(key=>{
                const filename = payload.image.name;
                const ext = filename.slice(filename.lastIndexOf('.'))
                return firebase.storage().ref('meetups/' + key  + ext).put(payload.image)

            })
            .then(fileData =>{
                imageUrl = fileData.metadata.storageReference.getDownloadURL[0]
               console.log(imageUrl,"image");
                return firebase.database().ref('meetups').child(key).update({imageUrl: imageUrl})
            })
            .then(()=>{
            commit('createMeetup',{
                    ...meetup,
                    imageUrl: imageUrl,
                    id:key
                })
            })
            .catch((error)=>{
                console.log(error);
            })
            //reach out to fire bae and storage
            // commit('createMeetup',meetup)
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
            commit('setLoading', true)
            commit('clearError')
           firebase.auth().signInWithEmailAndPassword(payload.email,payload.password)
           .then(
                user => {
                commit('setLoading',false)
                    const newUser = {
                     id: user.uid,
                     registeredMeetups: []
                    }
                    commit('setUser',newUser)
                 }
           )
           .catch(
            error => {
                commit('setLoading',false)
                commit('setError', error)
                console.log(error);
            }
           )
        },
        autoSignIn({commit},payload){
commit('setUser',{id:payload.uid,registeredMeetups:[]})
        },
        logout({commit}){
            firebase.auth().signOut()
            commit('setUser',null)
        }
     
    },
    
    getters:{
        loadedMeetups(state){
            return st ate.loadedMeetups.sort((meetupA,meetupB) => {
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