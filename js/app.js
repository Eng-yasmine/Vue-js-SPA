const { createApp } = Vue;

createApp({
    data() {
        return {
            name: 'yasmeen',
            age: 30,
            position: 'full stack developer',
            link: 'https://www.google.com',
            number: 0,
        }

    },
    //how to write methods in vue.js and how to use them in the template
    methods: {
        sayHello() {
            return 'helo' + this.name;
        },

        increment() {
            this.number++;
        },

        dontwork(){
            // return 'this is not a method';
            console.log('this is not a method');

        },
        doOnetime(){
            console.log("this is a one time method");
            alert("this is a one time method");
        },
    }
}).mount('#app-root');
