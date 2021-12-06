<template>
  <div>
    <!-- <ul id="example-1">
      <v-checkbox
        v-for="(item, index) in tasks"
        :key="index"
        :label="item"
      ></v-checkbox>
    </ul> -->
    <projectcard v-for="(item, index) in tasks" :key="index" :task="item" />
  </div>
</template>

<script lang="ts">
import projectcard from "./ProjectCard.vue";
export default {
  components: { projectcard },
  props: ["tasks"],
  data: () => ({
    //tasks: ["Assignment1", "Assignment2"],
  }),
};
</script>