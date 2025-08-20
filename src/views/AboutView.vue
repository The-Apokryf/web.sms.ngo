<script setup>
import { onMounted } from "vue";

onMounted(() => {
  document.title = "Więcej o śląskiej przestrzeni warsztatów twórczych - Śląski Maker Space (www.sms.ngo)"
})

</script>

<template>
  <div class="about">
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Nasze koordynaty na mapie</h1>
      <iframe width="600" height="350"
        src="https://www.openstreetmap.org/export/embed.html?bbox=19.0161269903183%2C50.25312886731388%2C19.025085568428043%2C50.25667534795379&amp;layer=cyclemap&amp;marker=50.254902140632474%2C19.02060627937317"
        style="border: 1px solid black">
      </iframe>
      <br />
      <h2>
        <a target="_blank" href="https://osm.org/go/0LeVaZKAl--?layers=CN&m=">
          OpenStreetMap
        </a>
        |
        <a target="_blank" href="https://maps.app.goo.gl/3cTE7HYcbGmn7VuS6">
          Google Maps
        </a>
        |
        <a target="_blank"
          href="https://maps.apple.com/place?center=50.25495830833277%2C19.020108100000016&span=0.008983152841217645%2C0.015675566969719057">
          Apple Maps
        </a>
      </h2>
      <hr>
      <br />
      <br />
      <h1>Kalendarz wydarzeń</h1>
      <iframe
        src="https://calendar.google.com/calendar/embed?height=400&wkst=2&ctz=Europe%2FWarsaw&title=Kalendarz%20%C5%9Al%C4%85skiego%20Maker%20Space&showTz=0&src=YjQ3OWI5YjBkY2MwYTE5NzE0MGMxOTAxOTAzOTc4ZTE0YWFiZTA5YjVlNmM5MGY0Nzc3OTNlNmFjMjU0ZTY3MEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=cGwucG9saXNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23795548&color=%230b8043"
        style="border:solid 1px #777" width="600" height="400" frameborder="0" scrolling="no"></iframe>
      <br />
      <br />
      <h1>Aktywność w sieci</h1>
      <br />

      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61569883589310&tabs&width=600&height=70&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=2692162544325648"
        width="600" height="70" style="margin: auto;border:none;overflow:hidden; " scrolling="yes" frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      <img class="instaqr" alt="Śląski Maker Space - INSTA PROFILE QR_CODE" width="400px"
        src="/img/SlaskiMakerSpace___insta-profile___QR-code.png" />
    </div>
  </div>
</template>

<style>
.instaqr {
  margin: 50px;
  filter: invert();
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
