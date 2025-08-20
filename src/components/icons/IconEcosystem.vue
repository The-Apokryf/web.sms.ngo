<script setup>
const iconChar = [
	"&#x1f6de;", //
	"&#9035;", //
];
</script>
<template>
  <span v-html="iconChar[Math.floor(Math.random() * iconChar.length)]"></span>
</template>