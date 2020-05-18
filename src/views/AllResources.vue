<template>
 <div>
    <pages/>
    <h1 class="page-header">All Resources</h1>
    <br />
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
          <tr v-for="resource in resources" :key="resource">
            <td>{{resource.id}}</td>
            <td>{{resource.name}}</td>
            <td>{{resource.year}}</td>
            <td>{{resource.color}}</td>
            <td>{{resource.pantone_value}}</td>
          </tr>
        </tbody>
    </table>
  </div> 
</template>

<script>
import axios from 'axios';
import pages from "./pages.vue";

  export default {
    name: 'Register',
    data () {
      return {
        resources: [],
      }
    },
    components:{
      pages
    },
     methods: {
      fetchCustomers(){
        var self = this;
      axios.get('https://reqres.in/api/unknown')
          .then(function(response){
          self.resources = response.data.data;
          console.log('Data',response.data.data);
          });
      },
    },
    created: function(){
      if(this.$route.query.alert){
        this.alert = this.$route.query.alert;
      }
      this.fetchCustomers();
    },
    updated: function(){
      this.fetchCustomers();
    },
   

  }
</script>

<style scoped>
* {margin: 0; padding: 0;}
 
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
