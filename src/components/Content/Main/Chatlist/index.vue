<template>
  <section class="chatlist">
    <div class="title">
      <h3 class="title__text">Чаты</h3>
      <List :items="items" />
    </div>
  </section>
</template>

<script>
import List from "../../../global/list.vue";
import axios from "axios";
export default {
  components: {
    List,
  },
  data: () => ({
    items: [],
  }),
  mounted() {
    this.getChatsList();
  },
  methods: {
    getChatsList() {
      axios
        .get("https://api.mailchat.net/test/chat.get")
        .then((response) => {
          this.items = response.data.response.subjects;
        })
        .catch((error) => console.error(error))
        .finally(console.log("FInally"));
    },
  },
};
</script>