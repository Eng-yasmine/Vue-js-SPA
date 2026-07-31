<script setup>
import { RouterView } from 'vue-router'
import MyNav from './components/MyNav.vue'
import MyHeader from './components/MyHeader.vue'
</script>

<template>
  <!-- الناف هنا عشان تظهر في كل الصفحات مش في صفحة واحدة بس -->
  <MyNav />
  <MyHeader />

  <main class="page-content">
    <RouterView />
  </main>
</template>

<style>
.page-content {
  /* مسافة تحت الناف الثابت عشان المحتوى مش يتغطى */
  padding-top: 100px;
}
</style>
