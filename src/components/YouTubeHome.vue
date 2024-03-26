<template>
  <div class="q-pa-mdf">
    <q-layout
      view="hHh Lpr lff"
      container
      style="height: 100vh"
      class="shadow-2 rounded-borders"
    >
      <q-header :class="$q.dark.isActive ? 'bg-primary' : 'bg-white'">
        <q-toolbar>
          <q-btn
            flat
            @click="drawer = !drawer"
            round
            dense
            icon="fa-solid fa-bars"
            :style="{ color: '#333' }"
          />
          <q-toolbar-title :style="{ color: '#333', fontWeight: 'bolder' }">
            <q-icon
              name="fa-brands fa-youtube"
              color="red"
              :style="{ fontSize: '30px' }"
            />
            YouTube
          </q-toolbar-title>
          <q-input
            v-model="search"
            debounce="500"
            rounded
            filled
            placeholder="Search"
            hint="Debouncing 500ms"
          >
            <template v-slot:append>
              <q-icon name="fa fa-search" />
            </template>
          </q-input>
        </q-toolbar>
      </q-header>

      <Drawer></Drawer>

      <q-page-container>
        <div class="q-pa-md">
          <div class="row">
            <div v-for="video in videos" :key="video?.id">
              <div class="col-6">
                <q-item>
                  <q-item-section>
                    <q-img
                      :src="video?.img"
                      :style="{
                        height: '200px',
                        width: '250px',
                        'border-radius': '10px',
                      }"
                    />
                  </q-item-section>
                </q-item>
              </div>
            </div>
          </div>
        </div>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from "vue";
import Drawer from "./Drawer.vue";

export default {
  components: {
    Drawer,
  },
  setup() {
    return {
      drawer: ref(false),
      videos: ref([
        {
          id: 1,
          img: "https://cdn.quasar.dev/img/parallax1.jpg",
          title: "Gene Vid 1",
          descrition: "Video Des",
          created_at: "2 min ago",
        },
        {
          id: 2,
          img: "https://cdn.quasar.dev/img/parallax2.jpg",
          title: "Gene Vid 1",
          descrition: "Video Des",
          created_at: "2 min ago",
        },
        {
          id: 3,
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          title: "Gene Vid 1",
          descrition: "Video Des",
          created_at: "2 min ago",
        },
        {
          id: 4,
          img: "https://cdn.quasar.dev/img/quasar.jpg",
          title: "Gene Vid 1",
          descrition: "Video Des",
          created_at: "2 min ago",
        },
        {
          id: 5,
          img: "https://cdn.quasar.dev/img/parallax1.jpg",
          title: "Gene Vid 1",
          descrition: "Video Des",
          created_at: "2 min ago",
        },
        {
          id: 6,
          img: "https://cdn.quasar.dev/img/parallax2.jpg",
          title: "Gene Vid 1",
          descrition: "Video Des",
          created_at: "2 min ago",
        },
        {
          id: 7,
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          title: "Gene Vid 1",
          descrition: "Video Des",
          created_at: "2 min ago",
        },
        {
          id: 8,
          img: "https://cdn.quasar.dev/img/quasar.jpg",
          title: "Gene Vid 1",
          descrition: "Video Des",
          created_at: "2 min ago",
        },
      ]),
    };
  },
};
</script>

<style lang="sass" scoped>
.menu-list .q-item
  border-radius: 0 32px 32px 0
</style>
