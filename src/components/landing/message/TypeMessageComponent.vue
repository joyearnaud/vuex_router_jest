<template>
  <form class="ui reply form">
    <div class="field">
      <textarea rows="1" v-model="messageText"></textarea>
    </div>
    <div @click="sendMessage()" class="ui blue labeled icon button">
      <i class="icon edit"></i> Add Reply
    </div>
  </form>
</template>

<script>
  const MESSAGE = {
    type: 'message',
    content: '',
    author: null,
  };
  export default {
    name: "TypeMessageComponent",
    data: function () {
      return {
        messageText: '',
        message: {
          ...MESSAGE,
        },
      };
    },
    created() {
    },
    sockets: {},
    methods: {
      sendMessage() {
        this.$socket.emit('message', this.getMessage);
        [this.message, this.messageText] = [{...MESSAGE}, ''];
        // this.$refs.chatboxcomponent.animateScroll();
        this.$root.$emit('eventing');
      },
    },
    computed: {
      getUser: function () {
        return this.$store.getters.getUser;
      },
      getMessage: function () {
        return {
          type: 'message',
          content: this.messageText,
          author: this.getUser,
        };
      },
    },
  }
</script>

<style scoped>

</style>
