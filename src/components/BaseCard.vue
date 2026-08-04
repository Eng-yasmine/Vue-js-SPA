<template>
  <div class="base-card">
    <header v-if="$slots.header" class="base-card_header">
      <slot name="header">
        <h2>Default Header</h2>
      </slot>
    </header>
    <div v-if="$slots.body" class="base-card_body">
      <slot name="body"></slot>
    </div>
    <footer v-if="$slots.footer" class="base-card_footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
}
</script>

<style scoped>
.base-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
  max-width: 420px;
  background: #fff;
}

.base-card__header {
  margin-bottom: 0.75rem;
  font-weight: bold;
}

.base-card__footer {
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid #eee;
}
</style>
