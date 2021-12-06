<template>
  <v-container>
    <br />
    <v-row>
      <v-col class="text-center">
        <v-btn href="#" text>
          <h4 class="mr-2">Archive</h4>
        </v-btn>

        <v-btn href="#" text>
          <h4 class="mr-2">Delete</h4>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center"></v-col>
      <!-- {{ simpledb }} -->
      <v-col><TaskList :tasks="simpledb" /></v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>
// import TitleBar from "../components/TitleBar.vue";
import TaskList from "../components/TaskList.vue";
import axios from "axios";
// import { delete } from 'vue/types/umd';
var webcall = axios.create({
  baseURL: "https://api.thecatapi.com/v1/images",
  timeout: 20000,
  withCredentials: false,
  headers: { "Content-Type": "application/json" },
});

export default {
  name: "App",

  components: {
    // TitleBar,
    TaskList,
  },

  data: () => ({
    // t: [],
    simpledb: [
      {
        projectName: "Project1",
        creator: "A",
        tasks: ["task1", "task2"],
      },
      {
        projectName: "Project2",
        creator: "B",
        tasks: ["task3", "task4"],
      },
      {
        projectName: "Project3",
        creator: "C",
        tasks: ["task5", "task6"],
      },
      {
        projectName: "Project4",
        creator: "D",
        tasks: ["task7", "task8", "task9", "task10"],
      },
      {
        projectName: "Project5",
        creator: "E",
        tasks: ["task11", "task12", "task13"],
      },
    ],
  }),
  methods: {
    catchCat() {
      var vm = this;
      var url = "/search";
      for (let i = 0; i < 5; i++) {
        try {
          webcall.get(url).then(async function (response) {
            var temp = await JSON.parse(JSON.stringify(response.data))[0];
            vm.simpledb[i]["img"] = temp["url"];
          });
        } catch (err) {
          console.log("error");
          alert(err);
        }
      }
       console.log(vm.simpledb);
    },
  },
  mounted() {
    //when the page is loading, do following
    this.catchCat();
  },
};
</script>
