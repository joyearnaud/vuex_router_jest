<template>
  <div class="ui container">

    <div class="ui grid">
      <div class="thirteen wide column">
        <ChatboxComponent ref="chatboxcomponent"></ChatboxComponent>
        <TypeMessageComponent></TypeMessageComponent>
      </div>
      <div class="three wide column">
        <UsersComponent></UsersComponent>
      </div>
    </div>


  </div>
</template>

//------------------------------ //------------------------------

<script>
  import ChatboxComponent from './ChatboxComponent';
  import TypeMessageComponent from './TypeMessageComponent';
  import UsersComponent from './UsersComponent';

  export default {
    name: 'Message',
    components: {ChatboxComponent, TypeMessageComponent, UsersComponent},
    data: function () {
      return {};
    },
    mounted() {
    },
    sockets: {
      connect: function () {
        console.log('socket connected');
      },
      disconnect: function () {
        console.log('socket disconnected');
      },
    },
    methods: {},
    computed: {},
  };
</script>

//------------------------------ //------------------------------

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    height: 100%;
  }

  #users {
    height: 400px;
    overflow-y: auto;
    white-space: nowrap;
  }

  /*.dimmer:hover {*/
  /*  active: true*/
  /*}*/
</style>
