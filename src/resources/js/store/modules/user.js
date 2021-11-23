export default {
    actions: {
        login({commit, dispatch, state}, tokens){
            localStorage.setItem('access_token', tokens.access_token)
            localStorage.setItem('refresh_token', tokens.refresh_token)
            commit('updateAccessToken', tokens.access_token)
            commit('updateRefreshToken', tokens.refresh_token)

            dispatch('getProfile')
        },

        getProfile({commit, getters}){
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + getters.getAccessToken
            axios.get('/api/v1/auth/profile')
                .then(({data}) => {
                    localStorage.setItem('user', JSON.stringify(data.data))
                    commit('updateUserLogin', data.data)
                    commit('updateAuthStatus', true)
                })
                .catch(({response}) => {
                    if (response.status === 401 || 403) {
                        commit('updateAuthStatus', false)
                    }
                });
        },

        updateRefreshToken(){
            let data = {
                // Доделать бэк
            }
            axios.post('/oauth/token', data)
                .then(({data}) => {

                })
                .catch(({response}) => {

                });
        },

        logout({commit}){
            localStorage.removeItem('access_token')
            localStorage.removeItem('refresh_token')
            localStorage.removeItem('user')

            commit('updateAccessToken', null)
            commit('updateRefreshToken', null)
            commit('updateUserLogin', null)
            commit('updateAuthStatus', false)
        }
    },
    mutations: {
        updateAccessToken(state, token){
            state.access_token = token;
        },
        updateRefreshToken(state, token){
            state.refresh_token = token;
        },
        updateUserLogin(state, user){
            state.user = user
        },
        updateAuthStatus(state, status){
            state.isAuth = status
        }
    },
    state: {
        user:          JSON.parse(localStorage.getItem('user')),
        access_token:  localStorage.getItem('access_token'),
        refresh_token: localStorage.getItem('refresh_token'),
        isAuth:        !!localStorage.getItem('user'),
    },
    getters: {
        getRefreshToken(state){
            return state.refresh_token;
        },
        getAccessToken(state){
            return state.access_token;
        },
        getUserLogin(state){
            return state.user
        },
        isAuth(state){
            return state.isAuth
        }
    }
}