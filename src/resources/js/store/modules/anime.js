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
        },
        async loadAnime(ctx, id) {
            let url = '/api/v1/anime/' + id;

            let anime = await axios.get(url).then(data => {
                return data.data.data;
            });

            ctx.commit('updateAnime', anime)
        }
    },
    mutations: {
        updateAnimesList(state, animes){
            state.animes = animes;
        },
        updateAnime(state, anime){
            state.animeItem = anime;
        }
    },
    state: {
        animes: [],
        animeItem: []
    },
    getters: {
        animeList(state){
            return state.animes.data;
        },
        animePagination(state){
            return state.animes.meta;
        },
        animeItem(state){
            return state.animeItem;
        }
    }
}