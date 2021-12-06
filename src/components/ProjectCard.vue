<template>
  <v-row>
    <v-col>
      <v-card class="mx-auto mb-3" max-width="344" outlined>
        <!-- <v-col cols="4">{{task["img"]}}/v-col> -->

        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4"></div>
            <v-list-item-title class="text-h5 mb-1">
              {{ task["projectName"] }}
            </v-list-item-title>
            <v-list-item-subtitle
              >Creator: {{ task["creator"] }}</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>

        <v-card-actions>
          <v-btn outlined rounded text @click="showTasks = !showTasks">
            >expand
          </v-btn>
        </v-card-actions>
        <ul id="example-1" v-if="showTasks">
          <v-checkbox
            v-for="(item, index) in task['tasks']"
            :key="index"
            :label="item"
          ></v-checkbox>
        </ul>
      </v-card>
      <!-- <v-col v-model="showTasks"> tasssts </v-col> -->
    </v-col>
    <!-- <v-col cols="2"></v-col> -->
  </v-row>
  <!-- <div>
      {{task["projectName"]}}
  </div> -->
</template>

<script>
export default {
  props: ["task"],
  data: () => ({
    // t: [],
    showTasks: false,
  }),
  mounted() {
    console.log(this.task);
  },
};
</script>
