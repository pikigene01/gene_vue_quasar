<template>
  <div class="q-pa-mdf">
    <q-layout
      view="hHh Lpr lff"
      container
      style="height: 100vh"
      class="shadow-2 rounded-borders"
    >
      <q-header elevated :class="$q.dark.isActive ? 'bg-primary' : 'bg-white'">
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
            YouTube</q-toolbar-title
          >
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

          <q-input
            rounded
            filled
            v-model="text"
            label="Rounded filled"
            :style="{ height: '20px' }"
          />
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
                <q-icon name="fas fa-home" />
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
                <q-icon name="fas fa-home" />
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
                <q-icon name="fas fa-home" />
                <q-item-section>Videos </q-item-section>
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <p v-for="n in 15" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil
            praesentium molestias a adipisci, dolore vitae odit, quidem
            consequatur optio voluptates asperiores pariatur eos numquam rerum
            delectus commodi perferendis voluptate?
          </p>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
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

<style lang="sass" scoped>
.menu-list .q-item
  border-radius: 0 32px 32px 0
</style>
