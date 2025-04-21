<template>
  <Stories class="absolute top-0 h-100vh w-100vw md:(h-730px w-420px relative)" :stories="items" />
</template>

<script>
import { Stories } from "vue-insta-stories";
export default {
  components: { Stories },
  data: () => ({
    items: [
      "images/elvis-bekmanis-WJc87MVcDaA-unsplash.jpg",
      "images/evelina-friman-hw_sKmjb0ns-unsplash.jpg",
      "images/jeremy-wong-weddings-K8KiCHh4WU4-unsplash.jpg",
      "images/ksav-pun-EHAn0csi6-E-unsplash.jpg",
      "images/leonardo-miranda-dvF6s1H1x68-unsplash.jpg",
      "images/nathan-dumlao-H_cZqryUuok-unsplash.jpg",
      "images/nathan-dumlao-rGHO4XSF0Qk-unsplash.jpg",
    ]
  })
};
</script>