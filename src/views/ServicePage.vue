<template>
  <div class="service">
    <h1>Service — Toggle & Keep Data</h1>

    <!-- أزرار التجربة -->
    <div class="actions">
      <button type="button" @click="showWithIf = !showWithIf">
        Toggle بـ v-if (بدون KeepAlive)
      </button>

      <button type="button" @click="showWithKeepAlive = !showWithKeepAlive">
        Toggle بـ v-if + KeepAlive
      </button>

      <button type="button" @click="showWithShow = !showWithShow">
        Toggle بـ v-show
      </button>
    </div>

    <hr />

    <!-- 1) v-if عادي — الداتا تضيع -->
    <section>
      <h2> 1) v-if فقط</h2>
      <NotePanel v-if="showWithIf" title="بدون KeepAlive" />
    </section>

    <hr />

    <!-- 2) v-if + KeepAlive — الداتا تفضل -->
    <section>
      <h2>2) v-if + KeepAlive</h2>
      <KeepAlive>
        <NotePanel v-if="showWithKeepAlive" title="مع KeepAlive" />
      </KeepAlive>
    </section>

    <hr />

    <!-- 3) v-show — الداتا تفضل كمان -->
    <section>
      <h2>3) v-show</h2>
      <NotePanel v-show="showWithShow" title="مع v-show" />
    </section>

  </div>
</template>

<script>
import NotePanel from '../components/NotePanel.vue'

export default {
  name: 'ServicePage',

  components: {
    NotePanel,
  },

  data() {
    return {
      showWithIf: true,
      showWithKeepAlive: true,
      showWithShow: true,
    }
  },
}
</script>

<style scoped>
.service {
  padding: 1rem 2rem;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 1rem;
}

button {
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
}

.hint {
  margin-top: 1.5rem;
  color: #555;
  font-size: 14px;
}

hr {
  margin: 1.25rem 0;
  border: none;
  border-top: 1px solid #eee;
}
</style>