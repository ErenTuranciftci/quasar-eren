<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
  <q-page-container>
    <q-page class="flex flex-center bg-grey-2">
      <q-card class="q-pa-md shadow-2 my_card" bordered>
        <q-card-section class="text-center">
          <div class="text-grey-9 text-h5 text-weight-bold">Sign in</div>
          <div class="text-grey-8">Sign in below to access your account</div>
        </q-card-section>
        <q-card-section>
          <q-form>
            <q-input
              dense
              outlined
              v-model="email"
              label="Email Address"
            ></q-input>
            <q-input
              dense
              outlined
              class="q-mt-md"
              v-model="password"
              type="password"
              label="Password"
            ></q-input>
            <q-card-section>
              <q-btn
                style="border-radius: 8px"
                color="dark"
                rounded
                size="md"
                label="Sign in"
                no-caps
                class="full-width"
                @click="signIn"
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
        <q-card-section class="text-center q-pt-none">
          <div class="text-grey-8">
            Don't have an account yet?
            <a
              href="#"
              class="text-dark text-weight-bold"
              style="text-decoration: none"
              >Sign up.</a
            >
          </div>
        </q-card-section>
      </q-card>
    </q-page>
  </q-page-container>
</template>

<script>
import { useUsersStore } from "src/stores/users";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    alertPassword() {
      alert(this.password);
    },
    signIn() {
      const usersStore = useUsersStore();
      const usersArray = usersStore.getUsers;

      usersArray.forEach((user, index) => {
        if (user.email == this.email && user.password == this.password) {
          usersStore.setIsLogin(true);
          usersStore.setI(index);
          this.$router.push("/profile");
        }
      });

      if (usersStore.getIsLogin == false)
        alert("Invalid email or password. Please try again. ");

      alert(usersStore.getI);
    },
  },
};
</script>

<style lang="scss" scoped></style>
