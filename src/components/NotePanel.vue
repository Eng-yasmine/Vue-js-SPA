<template>
  <div class="note-panel">
    <h3>{{ title }}</h3>
    <label for="note-input">ملاحظتك</label>
    <input id="note-input" type="text" :value="note" @input="onInput" placeholder="اكتبي شيء..." />
    <p>القيمة الحالية: {{ note || '(فاضي)' }}</p>
  </div>
</template>

<script>
export default {
  name: 'NotePanel',

  props: {
    title: {
      type: String,
      default: 'Note Panel',
    },
  },

  data() {
    return {
      note: '',
    }
  },

  created() {
    alert('[NotePanel] created')
  },

  mounted() {
    alert('[NotePanel] mounted')
  },

  activated() {
    // يشتغل مع KeepAlive لما المكوّن يرجع يظهر
    alert('[NotePanel] activated')
  },

  deactivated() {
    alert('[NotePanel] deactivated')
  },

  beforeUnmount() {
    alert('[NotePanel] beforeUnmount')
  },

  methods: {
    onInput(event) {
      this.note = event.target.value
    },
  },
}
</script>

<style scoped>
.note-panel {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  max-width: 400px;
}

input {
  display: block;
  width: 100%;
  margin: 0.5rem 0;
  padding: 8px;
}
</style>
