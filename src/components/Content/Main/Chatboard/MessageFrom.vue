<template>
    <div class="message-from">
      <p class="message-from__author">Сафронов А.</p>
      <div class="message-from__content">
        <p class="message-from__text">
          {{ message.content }}
        </p>
        <p class="message-from__time">{{getHoursMinutes(message.date)}}</p>
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
}
</script>