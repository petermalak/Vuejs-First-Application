<template>
  <div class="Register">
    <div id="Register">
      <h1>Register</h1>
      <strong>Email: </strong>
      <input type="text" v-model="email" />
      <strong>Password: </strong>
      <input type="password" v-model="password" />
      <br><br>
      <button type="button" v-on:click="formSubmit">Register</button>
      <br><br><br>
      <table class="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Token</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ reg.id }}</td>
          <td>{{ reg.token }}</td>
        </tr>
      </tbody>
    </table>
    </div>
    <div v-if="reg.id === 4">
      <router-link to="/pages">List All Resources</router-link>
    </div> 
      <label> Register Only with the email on the site </label>

  </div>

</template>

<script>
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
    ...mapActions(["register"]),
    formSubmit(e) {
      e.preventDefault();
      const admin = {
        email: this.email,
        password: this.password,
      };
      this.register(admin);
    },
  },
  computed: mapGetters(["reg"]),
};
</script>

<style scoped>
    #Register {
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
