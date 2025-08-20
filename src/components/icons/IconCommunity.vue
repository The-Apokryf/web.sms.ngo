
<script setup>

const iconChar = [
  "&#x1F47E;",//
  "&#x1F916;",//
  "&#x1F9BE;"//
];

</script>

<template>
  <span v-html="iconChar[Math.floor(Math.random() * iconChar.length)]"></span>
</template>