<template>
  <div>
    <h3>FAQ</h3>
    <div class="q-pa-md q-gutter-sm">
      <q-btn
        color="white"
        text-color="black"
        label="Home"
        @click="$router.replace('/')"
      />
      <q-btn color="primary" label="Primary" />
      <q-btn color="secondary" label="Secondary" />
    </div>
    <div>
      <q-card class="my-card">
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          {{
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }}
          <div class="text-h6">Our Changing Planet</div>
          {{
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }}
          <div class="text-h6">Our Changing Planet</div>
          {{
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }}
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import IndexPage from "./IndexPage.vue";

export default {};
</script>

<style lang="scss" scoped></style>
