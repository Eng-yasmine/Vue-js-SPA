<template>
  <div class="about">
    <p v-if="lastFeedback">
      Last Feedback: {{ lastFeedback.feedback }} (Rating: {{ lastFeedback.rating }})
    </p>
    <p v-else>No feedback submitted yet.</p>

    <!-- هنا كدا الاب سامع الحدث اللي الابن بيطلقه -->
    <FeedbackForm @submit-feedback="handleFeedbackSubmit" />

    <h1>this is about page</h1>
  </div>
</template>

<script>
import FeedbackForm from '../components/FeedbackForm.vue'
export default {
  name: 'AboutPage',

  components: {
    FeedbackForm,
  },

  data() {
    return {
      lastFeedback: null,
    }
  },

  methods: {
    handleFeedbackSubmit(feedbackData) {
      //feedbackData هي البيانات اللي الابن بعتهم للاب {  inputValue: 'some feedback', ratingValue: 5 }
      this.lastFeedback = feedbackData
    },
  },
}
</script>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  max-width: 320px;
  margin: 1rem 0;

  p {
    font-size: 16px;
    text-align: center;
  }
}
</style>
