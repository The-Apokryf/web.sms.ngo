<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";

const openReadmeInEditor = () => fetch("/__open-in-editor?file=README.md");
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>W duchu ruchu opensource</template>
    Chcemy skupić się na budowaniu współpracującej i otwartej społeczności twórców i innowatorów. Makerspace’y, w tym
    hackerspace’y, rozwijają się dzięki aktywnemu uczestnictwu, dzieleniu się wiedzą oraz współpracy użytkowników
    poprzez konstruktywne
    otwarte eksperymentowanie i kreatywne wykorzystanie narzędzi i technologii.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Koniec gry sumy zerowej</template>
    Planujemy zapewniać łatwy dostęp do zasobów, w tym szerokiego wachlarza narzędzi i technologii, oraz oferować
    możliwości nauki
    i
    rozwijania umiejętności. Jest to zgodne z definicją makerspace’ów i FabLabów jako przestrzeni do spotkań, wymiany
    pomysłów oraz współpracy w zakresie projektowania i cyfrowej produkcji.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Z wizją węglowej doliny</template>
    Mamy zamiar wykorzystać potencjał, by odegrać istotną rolę we wspieraniu lokalnej przedsiębiorczości i innowacji w
    Katowicach. Strategia
    rozwoju miasta Katowice 2030 kładzie nacisk na wzmacnianie ekosystemu przedsiębiorczości oraz wspieranie rozwoju
    gospodarki cyfrowej, ekologicznej i kreatywnej. Makerspace może się do tego przyczynić, oferując przestrzeń do
    prototypowania, eksperymentowania i rozwijania nowych pomysłów oraz ułatwiając budowanie zespołów do wspólnych
    projektów.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Rozwój wymiaru informacyjnego</template>
    Spora część naszych wysiłków skupi się na rozwoju miejskiej produkcji cyfrowej, która jest wskazywana jako
    obiecujący
    kierunek dla małych i średnich
    miast
    w kontekście makerspace’ów i FabLabów. Jest to zgodne z szerszym trendem transformacji cyfrowej Śląska.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Kosmopolityczny bastion pokoju</template>
    Naszym celem jest pełnić funkcję „trzeciego miejsca”, sprzyjającego budowaniu więzi społecznych i wspierającego
    innowacje społeczne.
    Tworząc nieformalną przestrzeń spotkań, może zachęcać do networking’u i rozwoju projektów skoncentrowanych na
    społeczności.
  </WelcomeItem>
</template>
<style scoped>
.unicode-fraction-icon {
  font-family: monospace;
}
</style>