<template>
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
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      drawer: ref(false),
    };
  },
};
</script>
