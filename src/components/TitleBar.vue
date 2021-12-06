<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-btn @click="goto()" text>
        <h5 class="mt-2 mr-2">Task Master</h5>
      </v-btn>
    </div>

    <v-spacer></v-spacer>

    <v-btn @click="dialog = !dialog" text>
      <h5 class="mt-2 mr-2">+</h5>
    </v-btn>

    <v-dialog v-model="dialog" width="600px">
      <v-card>
        <v-card-title class="text-h5"> Create Project </v-card-title>
        <v-card-text>Please enter your project here.</v-card-text>

        <v-form>
          <v-container>
            <v-container>
              <v-row>
                <v-col></v-col>
                <v-col>
                  <v-text-field
                    v-model="first"
                    label="Project name"
                  ></v-text-field></v-col
                ><v-col></v-col
              ></v-row>
            </v-container>
          </v-container>
        </v-form>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    first: null,
  }),
  methods:{
    goto: function () {
      this.$router.push({ name: "Home" });
    },
  }
};
</script>
