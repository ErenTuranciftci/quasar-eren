<template>
  <div>
    <h3>FAQ</h3>
    <div class="q-pa-md q-gutter-sm">
      <q-btn
        color="primary"
        text-color="white"
        label="Home"
        @click="$router.replace('/')"
      />

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
