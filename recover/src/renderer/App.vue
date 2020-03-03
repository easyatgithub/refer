<template>
  <div id="app">
    <Head />
  </div>
</template>

<script>
import Head from "@/components/Head";

export default {
  name: "session-capture",
  mounted() {
    // We use cookie to reconize if login success
    localStorage.removeItem("cookie");
  },
  components: {
    Head
  },
  data: () => ({
    isLoggedIn: true
  }),
  methods: {
    handleLoginSuccessed() {
      this.isLoggedIn = true;
    }
  }
};
</script>

<style>
/* CSS */
</style>
