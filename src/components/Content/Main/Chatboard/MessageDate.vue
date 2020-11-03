<template>
  <div class="message-date">
    <p class="message-date__text">{{ date }}</p>
  </div>
</template>

<script>
export default {
  props: ["datetime"],
  data: () => ({}),
  computed: {
    date() {
      return new Date(this.datetime * 1000).toLocaleString("ru", {
        month: "long",
        day: "numeric",
      });
    },
  },

};
</script>