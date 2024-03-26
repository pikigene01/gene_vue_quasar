<template>
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
      <q-toolbar-title
        class="mobile"
        :style="{ color: '#333', fontWeight: 'bolder' }"
      >
        <div
          class="search"
          :style="{
            display: 'flex',
            'flex-direction': 'row',
            'align-items': 'center',
          }"
        >
          <div class="search-input">
            <input class="gene-input" type="text" placeholder="search" />
            <q-icon
              class="gene-icon"
              name="fa-solid fa-keyboard"
              color="black"
              :style="{ fontSize: '30px' }"
            />
            <q-icon
              class="gene-icon gene-search"
              name="fa-solid fa-search"
              color="black"
              :style="{ fontSize: '30px' }"
            />
          </div>
          <q-icon
            class="gene-icon"
            name="fa-solid fa-microphone"
            color="black"
            :style="{ fontSize: '30px' }"
          />
        </div>
      </q-toolbar-title>
      <q-toolbar-title
        class="mobile"
        :style="{ color: '#333', fontWeight: 'bolder' }"
      >
        <div
          class="flex"
          :style="{
            display: 'flex',
            'flex-direction': 'row',
            'justify-content': 'end',
            'margin-left': '20px',
          }"
        >
          <div
            :style="{
              display: 'flex',
              'flex-direction': 'row',
              alignItems: 'center',
              'justify-content': 'center',
            }"
          >
            <q-icon
              name="fa-solid fa-ellipsis-vertical"
              color="black"
              :style="{ fontSize: '20px' }"
            />
            <div class="gene-menu">
              <q-icon
                name="fas fa-user"
                color="blue"
                :style="{ fontSize: '20px' }"
              />
              Gene
            </div>
          </div>
        </div>
      </q-toolbar-title>
    </q-toolbar>
  </q-header>

  <q-drawer v-model="drawer" show-if-above :width="100" :breakpoint="500">
    <q-scroll-area class="fit">
      <q-list padding class="menu-list">
        <q-item
          clickable
          v-ripple
          :style="{
            display: 'flex',
            'flex-direction': 'column',
            'align-items': 'center',
            'justify-content': 'center',
          }"
        >
          <q-item-section avatar>
            <q-icon name="fas fa-home" />
            <q-item-section> Home </q-item-section>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          :style="{
            display: 'flex',
            'flex-direction': 'column',
            'align-items': 'center',
            'justify-content': 'center',
          }"
        >
          <q-item-section avatar>
            <q-img src="/public/assets/icons/shorts.png" />
            <q-item-section> Shorts </q-item-section>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          :style="{
            display: 'flex',
            'flex-direction': 'column',
            'align-items': 'center',
            'justify-content': 'center',
          }"
        >
          <q-item-section avatar>
            <q-img src="/public/assets/icons/subscriptions.png" />
            <q-item-section> Subscriptions </q-item-section>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          :style="{
            display: 'flex',
            'flex-direction': 'column',
            'align-items': 'center',
            'justify-content': 'center',
          }"
        >
          <q-item-section avatar>
            <q-img src="/public/assets/icons/videos.png" />

            <q-item-section>Videos </q-item-section>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          :style="{
            display: 'flex',
            'flex-direction': 'column',
            'align-items': 'center',
            'justify-content': 'center',
          }"
        >
          <q-item-section avatar>
            <q-img src="/public/assets/icons/history.jpg" />

            <q-item-section>History </q-item-section>
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
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
    };
  },
};
</script>
