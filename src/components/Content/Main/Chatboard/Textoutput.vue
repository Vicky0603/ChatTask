<template>
  <div class="textoutput">
    <MessageFactory :messages="chatMessages" />
  </div>
</template>

<script>
import {mapState} from 'vuex';
import MessageFactory from "./MessageFactory";
export default {
  components: {
    MessageFactory,
  },
  computed:{
    ...mapState(["chatMessages"])
  },
  data: () => ({
    // messagesTest :[
    //   {
    //     content: "Внедрение современных методик прекрасно подходит для реализации соответствующих условий активизации.",
    //     date: 1603269192000,
    //     id: 1,
    //     read: true,
    //     you: true,
    //   },
    //         {
    //     content: "Внедрение современных методик прекрасно подходит для реализации соответствующих условий активизации.",
    //     date: 1603269192,
    //     id: 2,
    //     read: true,
    //     you: true,
    //   },
    //         {
    //     content: "Внедрение современных методик прекрасно подходит для реализации соответствующих условий активизации.",
    //     date: 1603269192,
    //     id: 3,
    //     read: true,
    //     you: true,
    //   },
    //         {
    //     content: "Внедрение современных методик прекрасно подходит для реализации соответствующих условий активизации.",
    //     date: 1603269192,
    //     id: 4,
    //     read: true,
    //     you: true,
    //   },
    //         {
    //     content: "Внедрение современных методик прекрасно подходит для реализации соответствующих условий активизации.",
    //     date: 1603269192000,
    //     id: 5,
    //     read: true,
    //     you: true,
    //   },
    // ]
  }),
};
</script>
