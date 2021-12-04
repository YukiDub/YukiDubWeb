export default {
    actions: {
        async loadAnimesList({commit}, page = 1, perPage = 30, filters = []) {
            let url = '/api/v1/anime?perPage=' + perPage + '&page=' + page;

            let animeData = await axios.get(url).then(data => {
                return data.data;
            });

            animeData.data.forEach(anime=>{
                anime.studios.forEach(studio=> {
                    studio.url = '/animes?studio=' + studio.name
                })
                anime.genres.forEach(genre=> {
                    genre.url = '/animes?genre=' + genre.name_en
                })
                anime.type.forEach(type=> {
                    type.url = '/animes?genre=' + type.name
                })
            })
            commit('updateAnimePagination', animeData.meta)
            commit('updateAnimesList', animeData)
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
        },
        updateAnimePagination(state, pagination){
            state.animePagination = pagination;
        }
    },
    state: {
        animes: [],
        animePagination: [],
        animeItem: []
    },
    getters: {
        animeList(state){
            return state.animes.data;
        },
        animePagination(state){
            return state.animePagination;
        },
        animeItem(state){
            return state.animeItem;
        }
    }
}