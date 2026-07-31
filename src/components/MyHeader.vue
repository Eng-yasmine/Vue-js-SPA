<template>

  <header>
    <div>

      <h1>{{title}}</h1>
      <p>{{description}}</p>

      
    </div>
  </header>
</template>

<script>
export default{
props: {
title: {
 type: string ,
 required: true,
 },
 description: {
  type: string ,
  required: true,
 },
}
}

data(){
return {}
},

}

</script>


<!--
  شيلنا lang="scss" عشان الخطأ يختفي.
  السبب: lang="scss" محتاج مكتبة sass-embedded، وهي مش متسطّبة.
  الـ CSS هنا عادي ومش محتاج SCSS.
-->
<style scoped>
header {
  width: 100%;
  padding: 3rem;
}
</style>
