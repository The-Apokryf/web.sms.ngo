<script setup>
const iconChar = [
	"&#x1F9D1;&#x200D;&#x1F527;", // mechanik
	"&#x1FAB5;", //
];
</script>

<template>
  <span v-html="iconChar[Math.floor(Math.random() * iconChar.length)]"></span>
</template>
