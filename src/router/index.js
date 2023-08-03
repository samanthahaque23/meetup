import Vue from 'vue'
import Home from '@/components/Home'
import Meetups from '@/components/Meetup/Meetups'
import Meetup from '@/components/Meetup/Meetup'
import createMeetup from '@/components/Meetup/createMeetup'
import Profile from '@/components/User/Profile'
import signUp from '@/components/User/signUp'
import signIn from '@/components/User/signIn'
import Router from 'vue-router'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Home
        },
        {
            path: '/meetups',
            name: 'Meetups',
            component: Meetups
        },
        {
            path: '/meetup/new',
            name: 'createMeetups',
            component: createMeetup,
            beforeEnter:AuthGuard
        },
        {
            path: '/meetup/:id',
            name: 'Meetup',
            props: true,
            component: Meetup
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile,
            beforeEnter:AuthGuard
        },
        {
            path: '/signIn',
            name: 'signIn',
            component: signIn
        },
        {
            path: '/signUp',
            name: 'signUp',
            component: signUp
        },
    ],
   
})