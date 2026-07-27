const { createApp } = Vue;

createApp({
  data() {
    return {
      newuser: {
        name: "",
        age: 30,
        email: "",
        password: "",
        confirmPassword: "",
        position: "full stack developer",
      },
      link: "https://www.google.com",
      number1: 0,
      number2: 0,
      mycolor: "red",
      age: 22,
      students: ["ahmed", "ali", "yazan", "basem"],
      employees: [
        {
          name: "ahmed",
          id: 1,
          position: "backend",
        },
        {
          name: "mohamed",
          id: 2,
          position: "front",
        },
        {
          name: "basem",
          id: 3,
          position: "devops",
        },
      ],
    };
  },
  //how to write methods in vue.js and how to use them in the template
  methods: {
    sayHello() {
      return "helo" + this.name;
    },

    increment() {
      this.number++;
    },

    dontwork() {
      // return 'this is not a method';
      console.log("this is not a method");
    },
    doOnetime() {
      console.log("this is a one time method");
      alert("this is a one time method");
    },
    printmyname() {
      console.log(this.name);
    },

    sendData() {
      return this.newuser;
    },
  },

  computed: {
    incrementNumber() {
      return this.number1 * 2;
    },
    decrementNumber() {
      return this.number2 * 5;
    },
  },
}).mount("#app-root");
