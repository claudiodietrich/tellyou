export default {
  methods: {
    errorHandler (error) {
      this.$store.dispatch('loading/deactivate')

      let message = this.$t('default.error.message')

      if (error.status) {
        const status = error.status

        switch (status) {
          case 422:
            message = this.$t('default.error.validation')
            break
        }
      }

      this.$toast.open({
        type: 'is-danger',
        duration: 5000,
        position: 'is-top',
        message
      })
    }
  }
}
