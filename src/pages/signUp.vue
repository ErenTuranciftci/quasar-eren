<template>
  <q-page-container>
    <q-page class="flex flex-center bg-grey-2">
      <q-card class="q-pa-md shadow-2 my_card" bordered>
        <q-card-section class="text-center">
          <div class="text-grey-9 text-h5 text-weight-bold">Sign up</div>
          <div class="text-grey-8">Sign up below to access your account</div>
        </q-card-section>
        <q-card-section>
          <q-form>
            <q-input dense outlined v-model="email" label="Email Address"></q-input>
            <q-input dense outlined class="q-mt-md" v-model="username" type="username" label="Username"></q-input>
            <q-input dense outlined class="q-mt-md" v-model="password" type="password" label="Password"></q-input>
            <q-card-section>
              <q-btn
                style="border-radius: 8px"
                color="dark"
                rounded
                size="md"
                label="Sign Up"
                no-caps
                class="full-width"
                @click="signUp"
              ></q-btn>
              <q-btn
                style="border-radius: 8px"
                color="dark"
                rounded
                size="md"
                label="Home"
                no-caps
                class="full-width"
                @click="$router.replace('/')"
              ></q-btn>
            </q-card-section>
          </q-form>
        </q-card-section>
        <q-card-section class="text-center q-pt-none"> </q-card-section>
      </q-card>
    </q-page>
  </q-page-container>
</template>

<script>

import { api } from "src/boot/axios";

export default {
  data() {
    return {
      email: "",
      username: "",
      password: "",
    };
  },
  methods: {
    signUp() {

      api.post('http://localhost:3000/api/signup', {
        username: this.username,
        email: this.email,
        password: this.password,
      })
        .then(response => {
          console.log(response.data);

          this.$router.push('/signIn');
        })
        .catch(error => {
          console.error('Error signing up:', error);

          this.$q.notify({
            color: 'negative',
            message: 'Error signing up. Please try again.',
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
