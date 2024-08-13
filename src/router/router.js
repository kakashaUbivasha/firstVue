import {createRouter, createWebHistory} from "vue-router";
import kCatalog from '/src/components/top-films/k-catalog.vue'
import kMainPage from '/src/components/k-main-page.vue'
import kRegister from '/src/components/users/k-registers.vue'
import kAutorization from '/src/components/users/k-autorization.vue'
import kFilmInfo from '/src/components/films/k-film-info.vue'
import kFilmSearch from '/src/components/films/k-film-search.vue'
import kSerials from '/src/components/serials/k-serials.vue'
import kFilms from '/src/components/films/k-films.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            name: 'home',
            component: kMainPage,
        },
        {
            path:'/catalog',
            name: 'catalog',
            component: kCatalog,
        },
        {
            path:'/register',
            name: 'register',
            component: kRegister,
        },
        {
            path:'/autorization',
            name: 'autorization',
            component: kAutorization,
        },
        {
            path: '/film-info',
            name: 'filmInfo',
            component: kFilmInfo,
        },
        {
            path: '/film-search',
            name: 'filmSearch',
            component: kFilmSearch,
        },
        {
            path: '/serials',
            name: 'serials',
            component: kSerials,
        },
        {
            path: '/films',
            name: 'films',
            component: kFilms,
        }
    ]
});

export default router;