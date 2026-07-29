<template>
<nav class="my-nav">
      <div class="icon">{{icone}}</div>
         <div class="logo">{{logo}}</div>
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
icone:'icon',
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


   .my-nav{
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;
background-color:rgba(221, 111, 111, 0.87);

}



</style>