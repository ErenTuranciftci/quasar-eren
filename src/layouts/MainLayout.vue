<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>


        <q-toolbar-title>
          Quasar Eren
        </q-toolbar-title>

        <div>{{ 'Welcome' }}</div>
      </q-toolbar>
    </q-header>



    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'





export default defineComponent({
  name: 'MainLayout',

  components: {

  },


})
</script>
