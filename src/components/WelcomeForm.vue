<template>
  <div class="welcome-form">
    <label for="vistor-name"> enter your nam</label>
    <input
      id="visitor-name"
      type="text"
      :value="inputValue"
      @input="onInput"
      placeholder="ex : yasmeen"
    />

    <button type="button" @click="submitName">Send</button>
  </div>
</template>

<script>
export default {
  name: 'WelcomeForm',

  emits: ['submit-name'],

  data() {
    return {
      inputValue: '',
    }
  },
  methods: {
    onInput(event) {
      this.inputValue = event.target.value
    },
    submitName(){
      if( !this.inputValue.trim()){
        return  " name not found";
      }

      this.$emit('submit-name', this.inputValue.trim())

      this.inputValue=''
    },
  },
}
</script>

<style scoped>

.welcome-form{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  max-width: 320px;
  margin: 1rem 0;

  input , button {
    padding: 8px 12px;
    font-size: 16px;
  }
}

</style>
