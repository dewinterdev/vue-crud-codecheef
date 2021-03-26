require('./bootstrap');

import Vue from 'vue/dist/vue'

window.Vue = Vue;

//Import Routes

//Import Vue Filter
require('./filter');

//Import progressbar
require('./progressbar');

//Setup custom events
require('./customEvents');

//Import View Router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//Import Sweetalert2
import Swal from 'sweetalert2'
window.Swal = Swal
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
window.Toast = Toast

//Import v-from
import { Form, HasError, AlertError } from 'vform'
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

//Routes
import Dashboard from './components/admin/DashboardComponent';
import Profile from './components/admin/ProfileComponent';
import User from './components/admin/UserComponent';


//Register Routes
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/Profile',
            name: 'profile',
            component: Profile,
        },
        {
            path: '/User',
            name: 'user',
            component: User,
        },
    ],

})

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);
//Components
Vue.component('dashboard-component', require('./components/Admin/DashboardComponent.vue').default);
Vue.component('profile-component', require('./components/Admin/ProfileComponent.vue').default);
Vue.component('user-component', require('./components/Admin/UserComponent.vue').default);
const app = new Vue({
    el: '#app',
    router
});
