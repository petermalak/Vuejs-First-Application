<template>
  <div class="Login">
    <div id="Login">
      <h1>Login</h1>
      <strong>Email: </strong>
      <input type="text" v-model="email" />
      <strong>Password: </strong>
      <input type="password" v-model="password" />
      <br><br> 
      <button type="button" v-on:click="formSubmit">Login</button>
      <br><br><br>
      <strong>Token:</strong>
      <pre>{{ token }}</pre>
    </div>
        <div v-if="token === 'QpwL5tke4Pnpja7X4' " >
      <router-link to="/pages">List All Resources</router-link>
    </div> 
      <label> Login Only with the email on the site </label>
  </div>
</template>

<script>
//import axios from "axios";
import { mapActions ,mapGetters } from "vuex";

export default {
  mounted() {
    console.log("Component mounted.");
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
    formSubmit(e) {
      e.preventDefault();
      const admin = {
        email: this.email,
        password: this.password,
      };
      this.login(admin);
    }
  },
  computed: mapGetters(["token"]),
};

</script>

<style scoped>
    #Login {
        width: 50%;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 100px;
        padding: 10px;
    }
    button{
        font-size: 25px;
        padding: 3px;
        margin: 3px;
    }

</style>
