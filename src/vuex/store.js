import {createStore} from "vuex";
import mutations from "@/vuex/mutations";
import actions from "@/vuex/actions";
import getters from "@/vuex/getters";
const store = createStore({
    state: {
        page: 1,
        filmsTop: [],
        searchValue: '',
        searchResults: [],
        cart: [],
        topFilm: [],
        trend:[],
        serials:[],
        current_user: {},
        categories: '',
        years: '2023',
        films: [],
        isLoading: false,
        allPages: 2
    },
    mutations,//синхронны
    actions,//асинхронны
    getters


});
export default store;