<script setup>
import TheWelcome from '../components/TheWelcome.vue'

import { onMounted } from "vue";

const subtitleSentences = [
  "",
  ""
]

onMounted(() => {
  document.title = "Śląski Maker Space - "
  document.title += subtitleSentences[
    Math.floor(
      Math.random() * subtitleSentences.length
    )
  ]
})

</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
