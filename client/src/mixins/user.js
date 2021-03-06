import axios from 'axios'

export default {
  methods: {
    startSession (token, user) {
      if (this.$session.exists) {
        this.$session.destroy()
      }

      this.$session.start()
      this.$session.set('token', token)
      this.$session.set('userId', user._id)
      this.$session.set('userName', user.name)
      this.$session.set('userEmail', user.email)

      axios.defaults.headers.common['x-auth'] = token
    },
    endSession () {
      if (this.$session.exists) {
        this.$session.destroy()
      }

      this.$router.push({ name: 'home' })
    },
    isLeader (authors) {
      const leaders = authors.filter(author => {
        return author.role === 0
      }).map(author => {
        return author.user
      })

      return leaders.includes(this.$session.get('userId'))
    },
    isReviewer (authors) {
      const reviewers = authors.filter(author => {
        return author.role === 1
      }).map(author => {
        return author.user
      })

      return reviewers.includes(this.$session.get('userId'))
    }
  }
}
