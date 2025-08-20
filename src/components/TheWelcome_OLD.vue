<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Twórcy ostrzy</template>
    W ramach naszej przestrzeni twórczej jest możliwość spróbowania swoich sił w sztuce
    <a href="https://www.facebook.com/events/1407969733842206/?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22user_timeline%22%7D%2C%7B%22mechanism%22%3A%22attachment%22%2C%22surface%22%3A%22newsfeed%22%7D]%2C%22ref_notif_type%22%3Anull%7D"
      target="_blank" rel="noopener">ostrzenia noży</a>.
    W przygotowaniu jest również
    <a>kuźnia</a>
    oraz
    <a>stanowisko metalurgiczne</a>,
    które w niedalekiej przyszłości również będą dostępne dla odwiedzających.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Pracownia rowerowa</template>

    Jedną z frakcji jest aktywnie współpracujący z nami serwis rowerowy
    <a href="https://www.facebook.com/profile.php?id=100057073104945" target="_blank" rel="noopener">Warsztat 77</a>.
    Pod okiem doświadczonych fachowców w ramach
    <a href="https://www.facebook.com/photo/?fbid=1121492026677247&set=a.462685802557876" target="_blank">
      wydarzeń pracowni rowerowej
    </a>
    będziecie mogli sami nabrać wprawy jak zadbać o dobry stan swoich dwukołowców.
    Jednym z rególarnie odbywających się wydarzeń jest <a href="https://www.facebook.com/events/726833179689299"
      target="_blank">giełda rowerowa</a>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Hala stolarska</template>

    Wśród naszej załogi mamy 
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
    you need more resources, we suggest paying
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    a visit.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Drukarnia 3D</template>

    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>
    (our official Discord server), or
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener">StackOverflow</a>. You
    should also follow the official
    <a href="https://bsky.app/profile/vuejs.org" target="_blank" rel="noopener">@vuejs.org</a>
    Bluesky account or the
    <a href="https://x.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    X account for latest news in the Vue world.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Stanowisko elektroniczne</template>

    We współpracy z
    <a>Instytutem Apokryf</a> oraz <a>RedScope Technologies</a>,
    zajmującymi się opracowaniami technologicznymi opensource
    oraz prowadzącym wdrożenia nowoczesnych technologi

    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </WelcomeItem>
</template>
<style scoped>
.unicode-fraction-icon {
  font-family: monospace;
}
</style>