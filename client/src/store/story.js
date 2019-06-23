import axios from 'axios'

export default {
  namespaced: true,
  state: {
    story: {}
  },
  getters: {

  },
  mutations: {
    update (state, story) {
      state.story = story
    }
  },
  actions: {
    async findById ({ commit }, id) {
      try {
        const response = await axios.get(`/stories/${id}`)
        const story = response.data

        commit('update', story)
      } catch (error) {
        throw error
      }
    }
  }
}
