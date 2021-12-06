<template>
  <v-container>
    <br />
    <h5 class="text-center">These are your projects</h5>
    <v-row>
      <v-col cols="5">{{t}}</v-col>
      <v-col><TaskList :tasks="t" /></v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>
// import TitleBar from "../components/TitleBar.vue";
import TaskList from "../components/TaskList.vue";

export default {
  name: "App",

  components: {
    // TitleBar,
    TaskList,
  },

  data: () => ({
    //t: ["1", "2"],
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
    processResponse(arg1, arg2, result) {
      // Can grab any DIV or SPAN HTML element and can then manipulate its
      // contents dynamically via javascript
      console.log("result:" + result);
      var js = JSON.parse(result);

      this.t = [js["result"]];

      // Update computation result
      // document.addForm.result.value = computation;
    },
    catchCat() {
      var add_url =
        "https://r25idfdwmc.execute-api.us-east-1.amazonaws.com/alpha/taskmaster/CreateProjectRequest";
      var vm = this;
      console.log(vm.t);

      var data = {};
      var arg1 = 1;
      var arg2 = 2;
      data["arg1"] = arg1;
      data["arg2"] = arg2;

      var js = JSON.stringify(data);
      console.log("JS:" + js);
      var xhr = new XMLHttpRequest();
      xhr.open("POST", add_url, true);

      // send the collected data as JSON
      xhr.send(js);

      // This will process results and update HTML as appropriate.
      xhr.onloadend = async function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
          if (xhr.status == 200) {
            console.log("XHR:" + xhr.responseText);
            var tmp = JSON.parse(xhr.responseText);
            vm.t = [tmp["result"]];
            vm.processResponse(arg1, arg2, xhr.responseText);
          } else{
            alert("unable to process request");
          }
        }
      };
    },
  },
  mounted() {
    //when the page is loading, do following
    this.catchCat();
  },
};
</script>
