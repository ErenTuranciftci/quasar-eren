
const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/FAQ", component: () => import("pages/FAQ.vue") },
      { path: "/signIn", component: () => import("src/pages/signIn.vue") },
      { path: "/signUp", component: () => import("src/pages/signUp.vue") },
      {
        path: "/profile",
        component: () => import("src/pages/profilePage.vue"),
      },
      {
        path: "/editProfile",
        component: () => import("src/pages/editProfilePage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

