import axios from 'axios'

export default {
  namespaced: true,
  state: {
    story: {}
  },
  getters: {
    orderedStages: state => {
      return state.story.stages.sort((a, b) => (a.number > b.number) ? 1 : -1)
    }
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
    },
    async addEvent ({ commit }, { storyId, stageId, event }) {
      try {
        const response = await axios.post(`/stories/${storyId}/stages/${stageId}/events`, { event })

        commit('update', response.data)
      } catch (error) {
        throw error
      }
    },
    async updateEvents ({ commit }, { storyId, stageId, events }) {
      try {
        const response = await axios.put(`/stories/${storyId}/stages/${stageId}/events`, { events })

        commit('update', response.data)
      } catch (error) {
        throw error
      }
    },
    async updateEvent ({ commit }, { storyId, stageId, event }) {
      try {
        const response = await axios.put(`/stories/${storyId}/stages/${stageId}/events/${event._id}`, { event })

        commit('update', response.data)
      } catch (error) {
        throw error
      }
    },
    async deleteEvent ({ commit }, { storyId, stageId, eventId }) {
      try {
        const response = await axios.delete(`/stories/${storyId}/stages/${stageId}/events/${eventId}`)

        commit('update', response.data)
      } catch (error) {
        throw error
      }
    },
    async updateEventReadBy ({ commit }, { storyId, stageId, eventId, userId }) {
      try {
        const response = await axios.put(`/stories/${storyId}/stages/${stageId}/events/${eventId}/readBy/${userId}`)

        commit('update', response.data)
      } catch (error) {
        throw error
      }
    },
    async createComment ({ commit }, { storyId, stageId, eventId, comment }) {
      try {
        const response = await axios.post(`/stories/${storyId}/stages/${stageId}/events/${eventId}/comments`, { comment })

        commit('update', response.data)
      } catch (error) {
        throw error
      }
    },
    async updateComments ({ commit }, { storyId, stageId, eventId, commentId, userId }) {
      try {
        const response = await axios.put(`/stories/${storyId}/stages/${stageId}/events/${eventId}/comments/${commentId}/readBy/${userId}`)

        commit('update', response.data)
      } catch (error) {
        throw error
      }
    }
  }
}
