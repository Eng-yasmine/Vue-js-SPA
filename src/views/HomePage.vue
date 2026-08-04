<template>
  <div class="my-main">
    <h1>this is home page</h1>
    <base-card>
      <template #header>
        <h2>Welcome Card</h2>
      </template>

      <template #body>
        <p>This is the body of the card.</p>
      </template>

      <p v-if="visitorName">welcom {{ visitorName }}</p>
      <p v-else>name not fount</p>
      <template #footer>
        <p>This is the footer of the card.</p>
      </template>
    </base-card>
    <WelcomeForm @submit-name="handleSubmitName" />
  </div>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue'
import WelcomeForm from '@/components/WelcomeForm.vue'

export default {
  name: 'HomePage',
  components: {
    BaseCard,
    WelcomeForm,
  },

  data() {
    return {
      visitorName: '',
    }
  },

  methods: {
    handleSubmitName(name) {
      this.visitorName = name
    },
  },
}
</script>

<style scoped>
.my-main {
  padding: 1rem 2rem;
}
</style>
