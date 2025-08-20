<script setup>
import { onMounted } from "vue";
import { RouterLink } from 'vue-router'
onMounted(() => {
  document.title = "Kontakt z przedstawicielami frakcji warsztatowych - Śląski Maker Space (www.sms.ngo)"
})

</script>

<template>
  <div class="contact">
    <div>
      <h1>Dane Kontaktowe</h1>

      <ul>
        <ol>
          Numer telefonu:
          <a href="tel:+48502495980">
            (+48) 502 495 980
          </a>
        </ol>
        <ol>
          E-mail:
          <a href="mailto:slaskimakerspace@gmail.com">
            slaskimakerspace@gmail.com
          </a>
        </ol>
        <br>
        <h2>Adres pocztowy</h2>
        <ol>
          ul. Plebiscytowa 15
        </ol>
        <ol>
          (40-036) Katowice, POLAND
        </ol>
        <ol>
          <a href="geo:50.254895,19.020622?z=18">
            geo:50.254895,19.020622?z=18
          </a>
        </ol>
        <ol>
          PlusCode == 723C+W4 Katowice
        </ol>
        <ol>
          
          <RouterLink to="/about">
            - Pinezka na mapce
          </RouterLink>
        </ol>
        <br>
        <h2>znajdziesz nas w socialmediach</h2>
        <ol>
          <a target="_blank" href="https://www.facebook.com/profile.php?id=61569883589310">
            - na facebooku
          </a>
        </ol>
        <ol>
          <a target="_blank" href="https://www.instagram.com/slaski_maker_space">
            - na instagramie
          </a>
        </ol>

      </ul>
    </div>

  </div>
</template>

<style>
@media (min-width: 1024px) {
  .contact {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
