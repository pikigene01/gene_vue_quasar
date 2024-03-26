<template>
  <div class="q-pa-mdf">
    <q-layout
      view="hHh Lpr lff"
      container
      style="height: 100vh"
      class="shadow-2 rounded-borders"
    >
      <Header />
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
                    <div
                      class="flex"
                      :style="{
                        display: 'flex',
                        'flex-direction': 'row',
                        'margin-top': '10px',
                      }"
                    >
                      <div class="avater">
                        <div>
                          <q-item>
                            <q-item-section top avatar>
                              <q-avatar>
                                <img src="/public/assets/icons/avatar.png" />
                              </q-avatar>
                            </q-item-section>

                            <q-item-section>
                              <q-item-label>{{ video?.title }}</q-item-label>
                              <q-item-label caption>{{
                                video?.descrition
                              }}</q-item-label>
                              <q-item-label caption>{{
                                video?.created_at
                              }}</q-item-label>
                            </q-item-section>

                            <q-item-section side top>
                              <q-badge label="10k" />
                            </q-item-section>
                          </q-item>

                          <q-separator spaced inset="item" />
                        </div>
                      </div>
                    </div>
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
import Header from "./Header.vue";

export default {
  components: {
    Drawer,
    Header,
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
<style>
.search-input {
  border: 1px solid #333;
  padding: 3px;
  border-radius: 40px;
  margin-top: 5px;
  width: 100%;
}
.gene-input {
  margin-left: 10px;
  outline: 0px !important;
  background: transparent !important;
  border: 0px !important;
  text-decoration: none !important;
}
.gene-icon {
  margin: 0px 4px;
}
.gene-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  border: 1px solid blue;
  color: blue;
  border-radius: 40px;
  width: 130px;
  margin-left: 13px;
}
@media screen and (max-width: 575px) {
  .search-input {
    display: none;
  }
  .gene-input {
    display: none;
  }
  .mobile {
    display: none;
  }
}
</style>
