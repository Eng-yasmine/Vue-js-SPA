<template>
  <header>
    <div>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MyHeader',
  props: {
    // مهم: String بحرف كبير (مش string) — ده نوع Vue/JavaScript
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
header {
  width: 100%;
  padding: 3rem;
}
</style>
