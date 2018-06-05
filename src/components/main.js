import Vue from 'vue'

import Login from './login/login.component.vue'
import Layout from './layout/layout.component.vue'
/*
new Vue({
    el: '#login',
    render: h => h(Login)
})*/

new Vue({
    el: '#app',
    render: h=> h(Layout)
})