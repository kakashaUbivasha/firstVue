import {createStore} from "vuex";
import axios from "axios";
import router from "@/router/router";


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
    },
    mutations:{
        SET__PRODUCTS: (state, films) => {
            state.filmsTop = films.data.films

        },
        SET_PAGE_VALUE:(state, value)=>{
            state.page = value

        },
        SET_TOP_FILMS:(state,films)=>{
            state.topFilm = films.data.docs

        },
        SET_SEARCH_VALUE:(state,value)  =>{
            return state.searchValue = value

        },
        SET_SEARCH_FILMS:(state,response)=>{
            state.searchResults = response.data.films
            console.log(state.searchResults)
        },
        SET_TREND_FILMS:(state, data)=>{
            state.trend = data.data.items
        },
        SET_SERIALS:(state, serials)=>{
            state.serials = serials.data.docs
        },
        updateCurrentUser:(state,data)=> {
            state.current_user = data;
        },
        ADD_CATEGORIES:(state,value)=>{
            state.categories = value

        },
        ADD_YEARS:(state,value)=>{
            value.toString()
            state.years = value
            console.log(typeof state.years)
        },

        SET_FILMS:(state,films)=>{
            state.films = films.data.docs
            console.log(films.data.pages)
        }

    },//синхронны

    actions:{
        GET_PAGE_VALUE({commit}, value){
            commit('SET_PAGE_VALUE', value)
            console.log(value)
        },
        GET_PRODUCTS_FROM_API({commit}) {

            axios.get(`https://kinopoiskapiunofficial.tech/api/v2.1/films/top?type=TOP_100_POPULAR_FILMS&page=${this.state.page}`, {
                headers: {
                    'X-API-KEY': '8535b8b3-3983-454c-a979-69b08bb57234',
                },
            })
                .then(films => {
                    // Обработка данных из ответа
                    commit('SET__PRODUCTS', films);
                })
                .catch(error => {
                    // Обработка ошибок
                    console.error('не загрузилось');
                });
        },
        GET_FILMS_FROM_API({commit}, value){
            console.log(value)
            if(value === 'Выберите жанр'||value===''){
                axios.get(`https://api.kinopoisk.dev/v1.4/movie?year=${this.state.years}&page=${this.state.page}&isSeries=false`,{
                    headers:{
                        'X-API-KEY': '19KG083-BFMMTWN-GYPDMBR-D6H8GEX',
                    }
                })
                    .then(films=>{
                        commit('SET_FILMS', films)
                        console.log(films)
                    })
                    .catch(error=>{
                        console.error(`pizda ${error}`)
                    })
            }
            else{
                axios.get(`https://api.kinopoisk.dev/v1.4/movie?year=${this.state.years}&page=${this.state.page}&genres.name=${this.state.categories}&isSeries=false`,{
                    headers:{
                        'X-API-KEY': '19KG083-BFMMTWN-GYPDMBR-D6H8GEX',
                    }
                })
                    .then(films=>{
                        commit('SET_FILMS', films)
                        console.log(films)
                    })
                    .catch(error=>{
                        console.error(`pizda ${error}`)
                    })
            }

        },
        GET_TOP_FILMS_FROM_API({commit}){
            let genre = ['аниме','комедия','драма','фантастика','фэнтези']
            let rand = Math.round((0 + Math.random()*(genre.length-1)))

            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();
            const currentMonth = currentDate.getMonth();
            let arr = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
            axios.get(`https://api.kinopoisk.dev/v1.4/movie?year=${currentYear}&month=${arr[currentMonth]}&genres.name=${genre[rand]}`,{
                headers:{
                    'X-API-KEY': '19KG083-BFMMTWN-GYPDMBR-D6H8GEX',
                }
            })
                .then(films =>{
                    commit('SET_TOP_FILMS', films)
                    console.log(films)
                })
                .catch(error=>{
                    console.error(error);
                })
        },
        GET_SEARCH_FILMS({commit}, value){
            commit('SET_SEARCH_VALUE', value)
        },

        GET_SEARCH_VALUE({commit}){
                axios.get(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${this.state.searchValue}`,{
                    headers: {
                        'X-API-KEY': '8535b8b3-3983-454c-a979-69b08bb57234',
                    },
                })
                .then(response=>{
                    commit('SET_SEARCH_FILMS', response)
                    })

                    .catch((error)=>{
                        console.error('Ошибка при поиске фильмов:', error); })


        },
        GET_TREND_FILMS({commit}){
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();
            const currentMonth = currentDate.getMonth();
            let arr = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
            axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${currentYear}&month=${arr[currentMonth]}`,{
                headers:{
                    'X-API-KEY': '8535b8b3-3983-454c-a979-69b08bb57234',
                },
            })
                .then(data=>{
                    commit('SET_TREND_FILMS', data)
                    console.log(data)
                })
                .catch((error)=>{
                    console.error('Ненайдено трендов:', error)
                })

        },
        GET_SERIALS({commit}, value){
            if(value === 'Выберите жанр'||value===''||value==='Выберите год'){
                axios.get(`https://api.kinopoisk.dev/v1.4/movie?year=${this.state.years}&page=${this.state.page}&isSeries=true`,{
                    headers:{
                        'X-API-KEY': '19KG083-BFMMTWN-GYPDMBR-D6H8GEX',
                    }
                })
                    .then(serials=>{
                        commit('SET_SERIALS', serials)
                        console.log(serials)
                    })
                    .catch(err=>{
                        console.error(`сериалы: ${err}`)
                    })
            }
            else{
                axios.get(`https://api.kinopoisk.dev/v1.4/movie?year=${this.state.years}&page=${this.state.page}&genres.name=${this.state.categories}&isSeries=true`,{
                    headers:{
                        'X-API-KEY': '19KG083-BFMMTWN-GYPDMBR-D6H8GEX',
                    }
                })
                    .then(serials=>{
                        commit('SET_SERIALS', serials)
                        console.log(serials)
                    })
                    .catch(err=>{
                        console.error(`сериалы: ${err}`)
                    })
            }

        },
        POST_LOGIN(context, params){
          axios.post('auth/login', params)
              .then(res=>{
                  localStorage.setItem('token', res.data.access)
                  router.push({name: 'mainPage'})
                    context.dispatch('loadCurrentUser')
                    console.log('успешно вошёл')
              })
              .catch((err)=>{
                  console.error(`Ошибка входа: ${err}`)
              })

        },
        POST_REGISTER(context, params){
        axios.post('auth/register', params)
            .then(res => {
            localStorage.setItem('token', res.data.access);
            router.push({name: 'mainPage'})
            context.dispatch('login', params);
                console.log('успешно зареган')

        }).catch(err => {
            console.error(`Ошибка регистрации: ${err}`)
        });

        },
        loadCurrentUser({commit}){
        axios.get('auth/user',{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res=>{
                commit('updateCurrentUser', res.data)
            })

        },
        checkCurrentUser(){
            axios.get('auth/user', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                console.log("success")
            }).catch(res=> {
                router.push('autorization')
            })
        },
        SET_CATEGORIES_TO_API({commit}, value){
            commit('ADD_CATEGORIES', value)
        },
        SET_YEARS_TO_API({commit},value){
            commit('ADD_YEARS', value)

        }


    },//асинхронны
    getters:{
        FILMS(state){
            return state.filmsTop;
        },
        PAGE_ITEM(state){
            return state.page
        },
        TOP_FILMS(state){
            return state.topFilm
        },
        SEARCH_FILMS(state){
            return state.searchResults
        },
        SEARCH_ITEM(state){
            return state.searchValue
        },
        TREND_FILMS(state){
            return state.trend
        },
        SERIALS(state){
            return state.serials
        },
        GET_CURRENT_USER(state){
            return state.current_user
        },
        GET_FILMS(state){
            return state.films
        }
    }


});
export default store;