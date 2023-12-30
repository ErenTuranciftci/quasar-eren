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
import { api } from 'boot/axios'
import { useUsersStore } from "src/stores/users";
import { onMounted } from 'vue';

export default {
  data() {
    return {

      email: "",
      username: "",
      password: "",
    };
  },
  methods: {

    async saveChanges() {
      const usersStore = useUsersStore();
      const userid = usersStore.getI;

      try {
        const response = await api.put(`http://localhost:3000/api/user/${userid}`, {
          email: this.email,
          username: this.username,
          password: this.password,
        });

        const data = response.data;

        if (data.success) {
          this.$router.push("/profile");
          console.log('User profile updated successfully');
        } else {
          console.error('Failed to update user profile:', data.message);
        }
      } catch (error) {
        console.error('Error updating user profile:', error);
      }
    },

  },

};
</script>
