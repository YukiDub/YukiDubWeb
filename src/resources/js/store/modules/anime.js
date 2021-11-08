export default {
    actions: {
        async loadAnimesList(ctx, page = 1, perPage = 30, filters = []) {
            let url = '/api/v1/anime?perPage=' + perPage + '&page=' + page;

            // if(filters){
            //     filters.forEach(filter => {
            //
            //     })
            // }

            let animes = await axios.get(url).then(data => {
                return data.data;
            });

            ctx.commit('updateAnimesList', animes)
        }
    },
    mutations: {
        updateAnimesList(state, animes){
            state.animes = animes;
        }
    },
    state: {
        animes: [],
    },
    getters: {
        animeList(state){
            return state.animes.data;
        },
        animePagination(state){
            return state.animes.meta;
        }
    }
}