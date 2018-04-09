
const state = {
    count : 'wangziye'
}

const actions = {
    updateLoadingStatus({commit,state},payload){
        commit('UPDATELOADINGSTATUS',payload)
    }
}

const mutations = {
    UPDATELOADINGSTATUS:(state,payload) => {
        state.count = payload
    }
}

const getters = {
    test:state => state.count
}

export default {
    state,
    getters,
    actions,
    mutations
}
