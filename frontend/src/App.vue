<!--
This root Vue component defines the overall layout and structure of the application. It sets up the user interface, includes child components (such as NoteList.vue), and can incorporate global logic or styles that apply to the entire app. This file acts as the central hub for the Vue app.
-->
<template>
  <div class="container mx-auto">
    <h1 class="text-3xl font-bold mb-4">Student Task & Notes Hub</h1>
    <NoteList />
  </div>
</template>

<script>
import NoteList from './components/NoteList.vue';

export default {
  name: 'App',
  components: {
    NoteList,
  },
};
</script>

<style>
/* Global styles can be added here if necessary */
</style>
