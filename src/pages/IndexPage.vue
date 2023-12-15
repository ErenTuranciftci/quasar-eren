<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md q-gutter-sm">
      <q-btn
        color="white"
        text-color="black"
        label="FAQ"
        @click="$router.replace('/FAQ')"
      />
      <q-btn
        color="primary"
        label="Sign In"
        @click="$router.replace('/signIn')"
      />
      <q-btn
        color="accent"
        label="Sign Up"
        @click="$router.replace('/signUp')"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
