<template>
  <nav class="my-nav">
    <div class="site-name">{{ name }}</div>
    <div class="menu">
      <ul>
        <!--
          RouterLink بدل النص العادي:
          - to = مسار الصفحة من الراوتر
          - كده اللينك يبقى قابل للضغط وينقل بدون ريلود كامل للصفحة
          -->
          <li v-for="link in menu" :key="link.path">
            <RouterLink :to="link.path">{{ link.label }}</RouterLink>
          </li>
        </ul>
      </div>
      <!--
        لعرض أيقونة: استخدم <img> مش {{ }}
        {{ icone }} = هتكتب المسار كنص على الشاشة
        <img :src="icone"> = هتعرض الصورة نفسها
      -->
      <div class="site_icone">
        <img :src="icone" alt="cart" />
      </div>
  </nav>
</template>

<script>
// في Vite لازم نعمل import للصورة عشان يبني المسار الصحيح
import cartIcon from '../assets/shopping-cart.png'

export default {
  data() {
    return {
      name: 'audiophile',
      icone: cartIcon,
      menu: [
        { label: 'home', path: '/' },
        { label: 'about', path: '/about' },
        { label: 'service', path: '/service' },
      ],
    }
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.my-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f0a2a2;
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100; /* الناف فوق المحتوى دايمًا */
}

.site-name {
  font-size: 20px;
  color: #fff;
  font-weight: bold;
}

.site_icone img {
  margin-right: 2rem;
  width: 28px;
  height: 28px;
  cursor: pointer;
  display: block;
}

.menu {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

ul {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  gap: 20px;
  margin: 0;
}

li {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
a {
  position: relative;
  display: inline-block;
  padding: 8px 12px;
  color: #fff;
  text-decoration: none;
  overflow: hidden;
  z-index: 1;
  transition: color .3s;
}

a::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #e87f7f; /* اللون اللي هينزل */
  transform: translateY(-100%);
  transition: transform .35s ease;
  z-index: -1;
}

a:hover::before {
  transform: translateY(0);
}

a:hover {
  color: white;
}

</style>
