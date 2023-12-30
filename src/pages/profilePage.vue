<template>
  <q-page-container>
    <q-page class="flex flex-center bg-grey-2">
      <q-card class="q-pa-md shadow-2 my_card" bordered>
        <q-card-section class="text-center">
          <div class="text-grey-9 text-h5 text-weight-bold">Profile Page</div>
          <div class="text-grey-8">Welcome to your profile!</div>
        </q-card-section>
        <q-card-section>
          <q-field outlined label="E-mail" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                {{ this.user.email }}
              </div>
            </template>
          </q-field>
          <q-field outlined label="Username" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                {{ this.user.username }}
              </div>
            </template>
          </q-field>
          <q-field outlined label="Password" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                {{ this.user.password }}
              </div>
            </template>
          </q-field>
        </q-card-section>
        <q-card-section class="text-center q-pt-none">
          <q-btn
            style="border-radius: 8px"
            color="dark"
            rounded
            size="md"
            label="Edit Profile"
            no-caps
            class="full-width"
            @click="$router.replace('/editProfile')"
          ></q-btn>
          <q-btn
            style="border-radius: 8px"
            color="dark"
            rounded
            size="md"
            label="Sign Out"
            no-caps
            class="full-width"
            @click="signOut()"
          ></q-btn>
        </q-card-section>
      </q-card>
    </q-page>
  </q-page-container>
</template>

<script>
import { useUsersStore } from "src/stores/users";
import { onMounted } from 'vue';

export default {
  data() {
    return{
      user:{},
    };
  },
  methods: {
    async fetchData() {
      const usersStore = useUsersStore();
      const userid = usersStore.getI;

      try {
        const response = await fetch(`http://localhost:3000/api/user/${userid}`);
        const data = await response.json();

        if (data.success) {

          this.user = data.user;
        } else {
          console.error('Failed to fetch user profile:', data.message);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    },
  signOut() {
      const usersStore = useUsersStore();
      alert("Signing out...");
      usersStore.setIsLogin(false);
      this.$router.push("/");
    },

},
  mounted() {
    this.fetchData();
  },
};
</script>
