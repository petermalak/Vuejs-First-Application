<template>
  <div>
    <pages/>
    <h1 class="page-header">All Users</h1>
    <br />
    <h2>Enter ID of the resource</h2>
    <input class="form-control" placeholder="Enter The ID" v-model="id" />
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Year</th>
          <th>Color</th>
          <th>Pantone Value</th>
        </tr>
      </thead>
      <tbody>
        <tr  v-for=" resource in resources" :key="resource">
          <td>{{ resource.id }}</td>
          <td>{{ resource.name }}</td>
          <td>{{ resource.year }}</td>
          <td>{{ resource.color }}</td>
          <td>{{ resource.pantone_value }}</td>
        </tr> 
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import pages from "./pages.vue";
export default {
  name: "Register",
  data() {
    return {
      resources: [],
      id: "",
    }
  },
  components:{
    pages
  },
  methods: {
    fetchCustomers() {
      var self = this;
        axios.get("https://reqres.in/api/unknown/" + self.id)
        .then(function(response) {
        self.resources = response.data;
        console.log("Data", response.data);
      });
    },
    filterBy(list, value){
        value = value.charAt(0).toUpperCase() + value.slice(1);
        return list.filter(function(customer){
          return customer.last_name.indexOf(value) > -1;
        });
  },
  },
  created: function() {
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert;
    }
    this.fetchCustomers();
  },
  updated: function() {
    this.fetchCustomers();
  },
  
}
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
</style>
