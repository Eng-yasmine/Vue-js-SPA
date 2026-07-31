<template>
  <MyNav :site-name="siteName" :menu-links="menuLinks" />

  <div class="page-body">
    <MyHeader title="This is main Header" description="lorem" />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import MyNav from './components/MyNav.vue'
import MyHeader from './components/MyHeader.vue'
import cartIcon from './assets/shopping-cart.png'

export default {
  name: 'App',
  components: {
    RouterView,
    MyNav,
    MyHeader,
  },
  data() {
    return {
      // Primitive = String (نسخة قيمة)
      siteName: 'My Shop',

      // Reference = Array of Objects (مرجع)
      menuLinks: [
        { label: 'home', path: '/' },
        { label: 'about', path: '/about' },
        { label: 'service', path: '/service' },
      ],

      // هنبعتها للناف كمان (الصورة Reference للملف، بس المسار بيتعامل كقيمة للـ src)
      cartIcon,
    }
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.page-body {
  padding-top: 100px;
}
</style>
