<template>
  <v-app>
    <v-main>
      <TitleBar />
      <router-view />
      <!-- <v-row>
        <v-col cols="5"></v-col>
        <v-col>
          <TaskList />
        </v-col>
        <v-col cols="5"></v-col>
      </v-row> -->
    </v-main>
  </v-app>
</template>

<script>
import TitleBar from "./components/TitleBar.vue";
// import TaskList from "./components/TaskList.vue";

export default {
  name: "App",

  components: {
    TitleBar,
    // TaskList,
  },

  data: () => ({
    //
  }),
};
</script>
