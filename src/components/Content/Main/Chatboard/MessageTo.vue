<template>
  <div class="message-to">
    <div class="message-to__content">
      <div class="message__to">
        <p class="message-to__text">
          {{ message.content }}
        </p>
        <p class="message-to__time">{{getHoursMinutes(message.date)}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["message"],
  methods: {
    getHoursMinutes(timestamp) {
      let date = new Date(timestamp);
      let hours = date.getHours();
      let minutes = date.getUTCMinutes();
      return `${hours}:${minutes}`;
    },
  },
};
</script>