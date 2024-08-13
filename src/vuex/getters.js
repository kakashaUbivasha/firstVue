export default {
    IS_LOADING(state){
        return state.isLoading
    },
    FILMS(state){
        return state.filmsTop;
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
    },
    ALL_PAGES(state){
      return state.allPages
    }
}