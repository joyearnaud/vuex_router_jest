<template>
  <div class="ui segment" @click="isHovering = !isHovering">
    <div class="ui grid">
      <div class="eleven wide column">
          <img class="ui avatar image" :src="user.picture">
          <span><b>{{user.firstName}}</b> {{user.lastName}}</span>
      </div>
      <div class="five wide column">
        <transition name="fade">
          <div v-if="isHovering">
            <i class="big icons">
              <i class="red heart icon"></i>
              <i class="inverted corner add icon"></i>
            </i>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UserComponent",
    props: ['user'],
    data: function () {
      return {
        users: this.$parent.users,
        isHovering: false,
      };
    },
  }
</script>

<style scoped>
  .hovered {
    color: darkcyan;
  }

  .fade-enter-active {
    position: absolute;
    transition: all .5s ease;
  }

  .fade-leave-active {
    position: absolute;
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .fade-enter {
    transform: translateX(50px);
    opacity: 0;
  }

  .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    transform: translateX(50px);
    opacity: 0;
  }
</style>
