<template>
  <div id="chat" class="ui segment">
    <div class="ui segment" v-for="message in messages">
      <img class="ui avatar image" :src="message.author.picture">
      <span><b>{{ message.author.lastName }}</b></span>
      {{ message.content }}
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
    },
    computed: {
      getMessages: function () {
        return this.$store.getters.getMessages;
      },
    },
  }
</script>

<style scoped>

</style>
