<template>
  <div class="ui container">

    <div class="ui grid">
      <div class="fourteen wide column">
        <ChatboxComponent ref="chatboxcomponent"></ChatboxComponent>
        <TypeMessageComponent></TypeMessageComponent>
      </div>
      <div class="two wide column">
        <div class="ui top attached demo menu">
          <a class="item">
            <i class="sidebar icon"></i>
            Menu
          </a>
        </div>
        <ul>
          <li v-for="user in users">{{user.firstName}} {{user.lastName}}</li>
        </ul>
      </div>
    </div>


  </div>
</template>

//------------------------------ //------------------------------

<script>
  import ChatboxComponent from './ChatboxComponent';
  import TypeMessageComponent from './TypeMessageComponent';

  export default {
    name: 'Message',
    components: {ChatboxComponent, TypeMessageComponent},
    data: function () {
      return {
        users: [],
      };
    },
    created() {
      this.$socket.emit('getConnectedUsers');
    },
    sockets: {
      connect: function () {
        console.log('socket connected');
      },
      disconnect: function () {
        console.log('socket disconnected');
      },
      getUser: function (userId) {
        console.log('Welcome to the chat, your ID is : ' + userId);
        this.$socket.emit('setUser', this.getUser);
      },
      setConnectedUsers: function (users) {
          this.users = [...users];
      }
    },
    methods: {
      getConnectedUsers: function () {
        return this.users
      }
    },
    computed: {
      getUser: function () {
        return this.$store.getters.getUser;
      },
    },
  };
</script>

//------------------------------ //------------------------------

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    height: 100%;
  }

  #chat {
    height: 400px;
    overflow-y: auto;
    white-space: nowrap;
  / / display: flex;
  / / flex-direction: column-reverse;
  }
</style>
