<script setup>
const iconChar = [
	"&#x1F5E1;", //
];
</script>

<template>
  <span v-html="iconChar[Math.floor(Math.random() * iconChar.length)]"></span>
</template>