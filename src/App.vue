<script setup>
import { RouterView } from 'vue-router'
import MyNav from './components/MyNav.vue'
import MyHeader from './components/MyHeader.vue'
</script>

<template>
  <MyNav />

  <!--
    ليه الهيدر كان متغطي؟
    الناف position: fixed → طالعة من تدفق الصفحة وبتغطي اللي تحتها من فوق.
    padding-top كان على main بس، والهيدر برا main فبدأ من أول الشاشة ورا الناف.
    الحل: ندي المسافة دي لكل المحتوى اللي تحت الناف (هيدر + صفحات).
  -->
  <div class="page-body">
    <MyHeader title="This is main Header" description="lorem" />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.page-body {
  /* نفس ارتفاع الناف (100px) عشان المحتوى يبدأ تحته مش وراه */
  padding-top: 100px;
}
</style>
