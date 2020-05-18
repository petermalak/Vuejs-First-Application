import axios from 'axios';

const state = {
  users: [],
  new_users: [],
  token:"",
  reg: []
};

const getters = {
  allUsers: state => state.users,
  newUsers: state => state.new_users,
  token: state => state.token,
  reg: state=> state.reg
};

const actions = {
  async fetchUsers({ commit }) {
    const response = await axios.get(
      'https://reqres.in/api/users?page=2'
    );
      console.log(response.data.data);
    commit('setUsers', response.data.data);
  },
  async addUser({ commit },new_user) {
    const response = await axios.post(
      `https://reqres.in/api/users`,new_user
    );
      console.log( " Respone : "+ response.data);
    commit('newUser', response.data);
  },
  async deleteUser({ commit }, id) {
    await axios.delete(`https://reqres.in/api/users/${id}`);
    commit('removeUser', id);
  },
  async updateUser({ commit }, updUser) {
    const response = await axios.put(
      `https://reqres.in/api/users/${updUser.id}`,
      updUser
    );
    console.log(response.data);
    commit('updateUser', response.data);
  },
  async login({ commit }, admin) {
    console.log("Email: " + admin.email + " "+ admin.password);
    const response = await axios.post(
      `https://reqres.in/api/login`,admin
    );
    console.log("Token: " + response.data.token);
    commit('setToken', response.data.token);
  },
  async register({ commit }, admin) {
    console.log("Email: " + admin.email + " "+ admin.password);
    const response = await axios.post(
      `https://reqres.in/api/register`,admin
    );
    if(response.status == 400){
     // alert("Wrong Email or password");
     commit('setReg', 0);

    }
    else{
    console.log("Token: " + response.data);
    commit('setReg', response.data);
  }
  },
};

const mutations = {
  setUsers: (state, users) => (state.users = users),
  newUser: (state, user) => {
    state.users.push(user)
  },
  removeUser: (state, id) =>(state.users = state.users.filter(user => user.id !== id)),
  updateUser: (state, updUser) => {
    const index = state.users.findIndex(user => user.id == updUser.id);
    state.users[index].email = updUser.email;
      state.users[index].first_name = updUser.first_name;
      state.users[index].last_name = updUser.last_name;
      state.users[index].avatar = updUser.avatar;
  },
  setToken: (state , token) => (state.token = token),
  setReg : (state , reg) => (state.reg = reg)
};

export default {
  state,
  getters,
  actions,
  mutations
};