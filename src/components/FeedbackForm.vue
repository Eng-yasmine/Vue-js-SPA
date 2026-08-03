<template>
  <div class="feedback-form">
    <h1>write your feeedback</h1>

    <label for="feedback">Feedback</label>
    <input
      id="feedback"
      type="text"
      row="3"
      :value="inputValue"
      @input="onInput"
      placeholder="ex : yasmeen"
    />

    <label for="feedback-rating">Feedback Rating</label>
    <input
      id="feedback-rating"
      type="number"
      :value="ratingValue"
      @input="onRatingInput"
      placeholder="ex : 5"
    />

    <button type="button" @click="submitFeedback">Send</button>
  </div>
</template>

<script>
export default {
  name: 'feedbackForm',

  emits: ['submit-feedback'],

  data() {
    return {
      inputValue: '',
      ratingValue: '',
    }
  },

  methods: {
    onInput(event) {
      this.inputValue = event.target.value
    },

    onRatingInput(event) {
      this.ratingValue = event.target.value
    },

    submitFeedback() {
      if (!this.inputValue.trim() || !this.ratingValue.trim()) {
        return 'feedback or rating not found'
      }

      this.$emit('submit-feedback', {
        feedback: this.inputValue.trim(),
        rating: this.ratingValue.trim(),
      })

      this.inputValue = ''
      this.ratingValue = ''
    },
  },
}
</script>

<style scoped>
.feedback-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  max-width: 320px;
  margin: 1rem 0;

  input,
  button {
    padding: 8px 12px;
    font-size: 16px;
  }
}
</style>
