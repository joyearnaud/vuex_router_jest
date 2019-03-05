<template>
	<div class="ui container">
		<div id="chat" class="ui segment">
			<div class="ui segment" v-for="message in messages">
				{{ message.content }}
			</div>
		</div>
		<form class="ui reply form">
			<div class="field">
				<textarea rows="1" v-model="messageText"></textarea>
			</div>
			<div class="ui blue labeled icon button" @click="sendMessage();">
				<i class="icon edit"></i> Add Reply
			</div>
		</form>
	</div>
</template>

//------------------------------ //------------------------------

<script>
const MESSAGE = {
	type: 'message',
	content: '',
	author: null,
};
export default {
	name: 'Message',
	data: function() {
		return {
			messages: [],
			messageText: '',
			message: {
				...MESSAGE,
			},
			chatDomElem: null,
		};
	},
	created() {
		this.active = this.$router.currentRoute.name;
		this.messages = this.getMessages;
	},
	mounted() {
		this.chatDomElem = document.querySelector('#chat');
		this.animateScroll();
	},
	sockets: {
		connect: function() {
			console.log('socket connected');
		},
		disconnect: function() {
			console.log('socket disconnected');
		},
		getUser: function(data) {
			console.log('Welcome to the chat, your ID is : ' + data);
			this.$socket.emit('setUser', this.getUser);
		},
		message: function(data) {
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
					setTimeout(function() {
						animate(elapsedTime);
					}, increment);
				}
			}
			animate(0);
		},
		sendMessage() {
			this.$socket.emit('message', this.getMessage);
			[this.message, this.messageText] = [{ ...MESSAGE }, ''];
			this.animateScroll();
		},
	},
	computed: {
		getUser: function() {
			return this.$store.getters.getUser;
		},
		getMessages: function() {
			return this.$store.getters.getMessages;
		},
		getMessage: function() {
			let returnMessage = {
				type: 'message',
				content: this.messageText,
				author: this.getUser,
			};
			return returnMessage;
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
	// display: flex;
	// flex-direction: column-reverse;
}
</style>
