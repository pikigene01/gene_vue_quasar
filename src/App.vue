<template>

  <q-layout>
    <YouTubeHome></YouTubeHome>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import YouTubeHome from "./components/YouTubeHome.vue";

export default {
  name: "LayoutDefault",

  components: {
    HelloWorld,
    YouTubeHome,
  },

  setup() {
    return {
      leftDrawerOpen: ref(false),
    };
  },
};
</script>

