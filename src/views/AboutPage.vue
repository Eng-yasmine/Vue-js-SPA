<template>
  <div class="about">
    <h1>this is about page</h1>

    <base-card>
      <template #header>
        <h2>Feedback Card</h2>
      </template>

      <template #body>
        <p>This is the body of the feedback card.</p>
      </template>

      <template #footer>
        <p>This is the footer of the feedback card.</p>
      </template>
    </base-card>
    <p v-if="lastFeedback">
      Last Feedback: {{ lastFeedback.feedback }} (Rating: {{ lastFeedback.rating }})
    </p>
    <p v-else>No feedback submitted yet.</p>

    <!-- هنا كدا الاب سامع الحدث اللي الابن بيطلقه -->
    <FeedbackForm @submit-feedback="handleFeedbackSubmit" />
  </div>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue'
import FeedbackForm from '../components/FeedbackForm.vue'
export default {
  name: 'AboutPage',

  components: {
    BaseCard,
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
