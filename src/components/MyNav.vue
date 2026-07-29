<template>
<nav class="my-nav">
      <div class="site-name">{{name}}</div>
         <div class="site-logo">{{logo}}</div>
             <div class="menu">
              <ul>
  <li v-for="link in menu" :key="link">
    {{ link }}
  </li>
</ul>
               
         </div>
</nav>



</template>

<script >
export default{
data(){
return{
name:'name',
logo:'logo',
menu:['home','about','my-main'],



}}

}
</script>

<style scoped>

*{
margin: 0;
padding: 0;
box-sizing: border-box;
}


.my-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: rgba(219, 202, 202, 0.87);
  width: 100%;
  height: 100px;
  position: fixed;
}

.site-name {
  font-size: 20px;
  color: #000;
  font-weight: bold;
}

.site-logo {
  font-size: 20px;
  color: #000;
  font-weight: bold;
}

/* قائمة اللينكات في منتصف الناف بار */
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
  color: #000;
  font-weight: bold;
  text-align: center;
}



</style>