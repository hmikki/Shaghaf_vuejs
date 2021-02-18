import Home from "./components/pages/Home";
import add_service from "./components/pages/add_service";

export default {
    mode: 'history',
    routes: [
        {
            path: '/',
            component: [
                header_section,
                Home,
            ]
        },
        {
            path: '/add_service',
            component: add_service
        },
        /*
        {
            path: '/my_account',
            component: my_account
        },
        {
            path: '/my_account_2',
            component: my_account_2
        },
        {
            path: '/orders',
            component: orders
        },
        {
            path: '/orders_2',
            component: orders_2
        },
        {
            path: '/orders_details',
            component: orders_details
        },
        {
            path: '/orders_details_2',
            component: orders_details_2
        },
        {
            path: '/our_serve',
            component: our_serve
        },
        {
            path: '/service_user',
            component: service_user
        },*/
    ]
}
