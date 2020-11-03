<template>
  <div class="messages">
    <div class="message" v-for="message in messages" :key="message.id">
      <MessageDate :datetime="message.date" v-if="isVisible(message.date)" />
      <MessageTo v-if="message.you" :message="message" />
      <MessageFrom v-else :message="message" />
    </div>
  </div>
</template>

<script>
import MessageFrom from "./MessageFrom";
import MessageTo from "./MessageTo";
import MessageDate from "./MessageDate";
var oldDate = 0;
export default {
  components: {
    MessageFrom,
    MessageTo,
    MessageDate,
  },
  props: ["messages"],
  data: () => ({}),
  getters: {},
  watch: {
    messages(){
      oldDate =0;
    }
  },
  methods: {
    isVisible(msgDate) {
      let d = new Date(msgDate * 1000).getDate();
      if (!oldDate) {
        oldDate = d;
        return true;
      } else {
        if (oldDate - d) {
          oldDate = d;
          return true;
        }
      }
    },
  },
};
</script>