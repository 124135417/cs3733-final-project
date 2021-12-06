<template>
  <v-row>
    <v-main>
      <br />
      <br />
      <br />
      <br />
      <br />

      <h3 class="text-center">Welcome to Task Manager! <br />Please Log in.</h3>
      <br />
      <br />
      <br />

      <v-row>
        <v-col class="text-center">
          <v-btn @click="part()" text>
            <h4 class="mr-2">Login</h4>
          </v-btn>

          <!-- <v-btn @click="goto('Administrator')" text>
            <h4 class="mr-2">Administrator</h4>
          </v-btn> -->
        </v-col>
      </v-row>

      <v-dialog v-model="login" width="600px">
        <v-card>
          <v-card-title class="text-h5"
            >Please enter your username:</v-card-title
          >

          <v-form>
            <v-container>
              <v-container>
                <v-row>
                  <v-col></v-col>
                  <v-col>
                    <v-text-field
                      v-model="username"
                      label="Username"
                    ></v-text-field></v-col
                  ><v-col></v-col
                ></v-row>
              </v-container>
            </v-container>
          </v-form>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="loginFunc()">
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-main>
    <v-row style="height: 230px"></v-row>
    <v-card class="mt-10">
      <v-card-actions >
        <div></div>
        <v-btn color="primary">add teammate</v-btn>
      </v-card-actions>
    </v-card>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    login: false,
    simpledb: {
      A: "Administrator",
      B: "Participant",
    },
    username: null,
  }),
  methods: {
    goto: function (page) {
      this.$router.push({ name: page });
    },
    part: function () {
      this.login = true;
      //   this.$router.push({ name: "Participant" });
    },
    loginFunc: function () {
      // Send username to backend for verification on access
      // console.log(this.username);

      // Go to the page.
      this.$router.push({ name: this.simpledb[this.username] });
    },
  },
};
</script>
