export default {
    SET__PRODUCTS: (state, films) => {
        state.filmsTop = films.data.films
    },
    SET_PAGE_VALUE:(state, value)=>{
        state.page = value

    },
    // SET_LOADING_STATUS:(state, value)=>{
    //     state.isLoading = value
    // },
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
        state.allPages = films.data.pages
        console.log(state.allPages)
        console.log(films.data.pages)
    }
}