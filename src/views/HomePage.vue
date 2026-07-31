<template>
  <div class="my-main">
    <h1>this is home page</h1>

    <p v-if="visitorName">welcom {{ visitorName }}</p>
    <p v-else>name not fount</p>

    <WelcomeForm @submit-name="handleSubmitName" />
  </div>
</template>

<script>
import WelcomeForm from '@/components/WelcomeForm.vue'

export default {
  name: 'HomePage',

  components: {
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
