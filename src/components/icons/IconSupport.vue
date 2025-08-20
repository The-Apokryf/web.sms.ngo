<script setup>
const iconChar = [
	"&#x1F333;", //
	"&#9035;", //
];
</script>

<template>
  <span v-html="iconChar[Math.floor(Math.random() * iconChar.length)]"></span>
</template>