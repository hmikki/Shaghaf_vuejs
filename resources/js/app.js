import Vue from 'vue';
import bootstrap from './bootstrap'


/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('home', require('./components/pages/home.vue').default);
Vue.component('add_service', require('./components/pages/add_service.vue').default);
Vue.component('my_account', require('./components/pages/my_account.vue').default);
Vue.component('my_account_2', require('./components/pages/my_account_2.vue').default);
Vue.component('orders', require('./components/pages/orders.vue').default);
Vue.component('orders_details', require('./components/pages/orders_details.vue').default);
Vue.component('orders_2', require('./components/pages/orders_2.vue').default);
Vue.component('orders_details_2', require('./components/pages/orders_details_2.vue').default);
Vue.component('our_serve', require('./components/pages/our_serve.vue').default);
Vue.component('serve_user', require('./components/pages/serve_user.vue').default);
Vue.component('stylesheets', require('./components/layouts/stylesheets.vue').default);
Vue.component('header_section', require('./components/layouts/header_section.vue').default);
Vue.component('header_login_section', require('./components/layouts/header_login_section.vue').default);
Vue.component('footer_section', require('./components/layouts/footer_section.vue').default);
Vue.component('login_section' , require('./components/modals/login-section.vue').default);
Vue.component('register_section', require('./components/modals/register_section.vue').default);
Vue.component('forget_password_section', require('./components/modals/forget_password_section.vue').default);
Vue.component('verification_code_section', require('./components/modals/verification_code_section.vue').default);
Vue.component('add_order', require('./components/modals/add_order.vue').default);
Vue.component('edit_order', require('./components/modals/edit_order.vue').default);
Vue.component('change_password', require('./components/modals/change_password.vue').default);
Vue.component('change_setting', require('./components/modals/change_setting.vue').default);
Vue.component('rate', require('./components/modals/rate.vue').default);
Vue.component('thanks_message', require('./components/modals/thanks_message.vue').default);
Vue.component('change_password_2', require('./components/modals/change_password_2.vue').default);
Vue.component('change_setting_2', require('./components/modals/change_setting_2.vue').default);
Vue.component('carosel_section', require('./components/sections/home/carosel_section.vue').default);
Vue.component('freelancer_section', require('./components/sections/home/freelancer_section.vue').default);
Vue.component('about_section', require('./components/sections/home/about_section.vue').default);
Vue.component('services_section', require('./components/sections/home/services_section.vue').default);
Vue.component('most_wanted_section', require('./components/sections/home/most_wanted_section.vue').default);
Vue.component('said_section', require('./components/sections/home/said_section.vue').default);
Vue.component('goals_section', require('./components/sections/home/goals_section.vue').default);
Vue.component('contact_section', require('./components/sections/home/contact_section.vue').default);
Vue.component('services', require('./components/sections/add_service/services.vue').default);
Vue.component('order_section', require('./components/sections/orders/order_section.vue').default);
Vue.component('orders_2_section', require('./components/sections/orders_2/orders_2_section.vue').default);
Vue.component('cards', require('./components/sections/our_serve/cards.vue').default);
Vue.component('user_services', require('./components/sections/serve_user/user_services.vue').default);
Vue.component('portfolio', require('./components/sections/serve_user/portfolio.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
const app = new Vue({
            el: '#app',
        });

