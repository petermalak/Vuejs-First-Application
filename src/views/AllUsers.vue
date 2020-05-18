<template>
  <div>
    <pages/>
    <h1 class="page-header">All Users</h1>
    <br />
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Avatar</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in allUsers" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td>{{ user.avatar }}</td>
         <td> <button type="button" @click="deleteUser(user.id)">Delete</button></td> 
        </tr>
      </tbody>
    </table>
    <h1>Edit User</h1>
      <form @submit="update" id="edit">
        <input type="text" v-model="id_edit" placeholder="Add User ID...">
        <input type="text" v-model="email_edit" placeholder="Add Email...">
        <input type="text" v-model="first_name_edit" placeholder="Add First name...">
        <input type="text" v-model="last_name_edit" placeholder="Add Last Name...">
        <input type="text" v-model="avatar_edit" placeholder="Add avatar...">
        <input type="submit" value="Submit">
      </form>
      <form @submit="onSubmit" id="add">
        <h1>Add User</h1>
        <input type="text" v-model="id_add" placeholder="Add User ID...">
        <input type="text" v-model="email_add" placeholder="Add Email...">
        <input type="text" v-model="first_name_add" placeholder="Add First name...">
        <input type="text" v-model="last_name_add" placeholder="Add Last Name...">
        <input type="text" v-model="avatar_add" placeholder="Add avatar...">
        <input type="submit" value="Submit">
      </form>
  </div>
</template>

<script>
import { mapActions ,mapGetters } from "vuex";
import pages from "./pages.vue";

export default {
  name: "AllUsers",
  data() {
    return {
     id_edit:"",
      email_edit:"",
      first_name_edit:"",
      last_name_edit: "",
      avatar_edit: "",
      id_add:"",
      email_add:"",
      first_name_add:"",
      last_name_add: "",
      avatar_add: ""
    };
  },
  components:{
    pages
  },
  methods: {
    ...mapActions(["fetchUsers" , "deleteUser", "updateUser","addUser"]),
    update(e) {
      e.preventDefault();
      const updUser = {
        id: this.id_edit,
        email: this.email_edit,
        first_name: this.first_name_edit,
        last_name: this.last_name_edit,
        avatar: this.avatar_edit
      };
      this.updateUser(updUser);
    },
    onSubmit(e) {
      e.preventDefault();
      const newUser = {
        id: this.id_add,
        email: this.email_add,
        first_name: this.first_name_add,
        last_name: this.last_name_add,
        avatar: this.avatar_add
      };
      console.log("newUser : " + newUser.id);
      this.addUser(newUser);
    }
  },
  computed: mapGetters(["allUsers"]),
  created() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

div {
  margin: 20px;
  text-align: center;
}

ul {
  list-style-type: none;
  width: 500px;
}

li p {
  font: 200 12px/1.5 Georgia, Times New Roman, serif;
}

li {
  padding: 10px;
  overflow: auto;
}
 #add{
  width: 100%;
  margin: auto;
  margin-top: 10px;
  padding: 10px;
}
#edit{
  width: 100%;
  margin: auto;
  margin-top: 10px;
  padding: 10px;
}
input{
  margin: 5px;
  padding: 5px;
}
</style>
