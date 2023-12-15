<template>
  <q-page-container>
    <q-page class="flex flex-center bg-grey-2">
      <q-card class="q-pa-md shadow-2 my_card" bordered>
        <div class="text-grey-9 text-h5 text-weight-bold">Edit Profile</div>

        <q-field outlined label="E-mail" stack-label>
          <q-input
            v-model="email"
            outlined
            dense
            debounce="300"
            label="Email Address"
          />
        </q-field>
        <q-field outlined label="Username" stack-label>
          <q-input
            v-model="username"
            outlined
            dense
            debounce="300"
            label="Username"
          />
        </q-field>
        <q-field outlined label="Password" stack-label>
          <q-input
            v-model="password"
            outlined
            dense
            debounce="300"
            label="Password"
          />
        </q-field>
        <q-btn
          style="border-radius: 8px"
          color="dark"
          rounded
          size="md"
          label="Save Changes"
          no-caps
          class="full-width"
          type="submit"
          @click="saveChanges()"
        ></q-btn>
        <q-btn
          style="border-radius: 8px"
          color="dark"
          rounded
          size="md"
          label="Go Back"
          no-caps
          class="full-width"
          type="submit"
          @click="$router.replace('/profile')"
        ></q-btn>
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
      username: "",
      password: "",
    };
  },
  methods: {
    saveChanges() {
      const usersStore = useUsersStore();

      const user = {
        email: this.email,
        username: this.username,
        password: this.password,
      };
      usersStore.editUser(this.email, this.username, this.password);

      this.$router.push("/profile");
    },
  },
};
</script>
