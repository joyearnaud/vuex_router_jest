<template>
  <div id="chat" class="ui segment">
    <div :class="{channelMessage: !isUserMessage(message), userMessage: isUserMessage(message)}" class="ui segment"
         v-for="message in messages">
      <img class="ui avatar image" :src="message.author.picture">
      <a><b><u>{{ message.author.firstName }}</u></b></a>
      <p> {{ message.content }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ChatboxComponent",
    data: function () {
      return {
        messages: [],
        chatDomElem: null,
      };
    },
    created() {
      this.messages = this.getMessages;
    },
    mounted() {
      this.chatDomElem = document.querySelector('#chat');
      this.animateScroll();
      this.$root.$on('eventing', () => {
        console.log('eventing animateScroll');
        this.animateScroll();
      });
      window.addEventListener('beforeunload', this.leaving);
    },
    sockets: {
      message: function (data) {
        console.log(data.content);
        this.messages.push(data);
      },
    },
    methods: {
      animateScroll() {
        let duration = 300;
        let element = this.chatDomElem;
        var start = element.scrollTop;
        var end = element.scrollHeight;
        var change = end - start;
        var increment = 20;

        function easeInOut(currentTime, start, change, duration) {
          // by Robert Penner
          currentTime /= duration / 2;
          if (currentTime < 1) {
            return (change / 2) * currentTime * currentTime + start;
          }
          currentTime -= 1;
          return (-change / 2) * (currentTime * (currentTime - 2) - 1) + start;
        }

        function animate(elapsedTime) {
          elapsedTime += increment;
          var position = easeInOut(elapsedTime, start, change, duration);
          element.scrollTop = position;
          if (elapsedTime < duration) {
            setTimeout(function () {
              animate(elapsedTime);
            }, increment);
          }
        }

        animate(0);
      },
      isUserMessage(message) {
        return message.author.id === this.getUser.id;
      }
    },
    computed: {
      getMessages: function () {
        return this.$store.getters.getMessages;
      },
      getUser: function () {
        return this.$store.getters.getUser;
      }
    },
  }
</script>

<style scoped>
  #chat {
    height: 400px;
    overflow-y: auto;
  }

  #chat .segment {
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 8px;
    padding-right: 8px;
  }

  .channelMessage {
    display: table;
    margin-right: 5em;
  }

  .userMessage {
    clear: both;
    word-wrap: break-word;
    /*white-space:nowrap;*/
    display: table;
    margin-left: 5em;
  }
</style>
