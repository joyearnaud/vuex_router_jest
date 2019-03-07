<template>
  <div>
    <div v-for="user in users">
      <UserComponent v-bind:user="user"></UserComponent>
    </div>
  </div>
</template>

<script>
  import UserComponent from './UserComponent';

  export default {
    name: "UsersComponent",
    components: {UserComponent},
    data: function () {
      return {
        users: [],
      };
    },
    mounted() {
      this.$socket.emit('setUser', this.getUser);
    },
    sockets: {
      setConnectedUsers: function (users) {
        this.users = [...users];
      }
    },
    computed: {
      getUser: function () {
        return this.$store.getters.getUser;
      },
    },
  }
</script>

<style scoped>

</style>
