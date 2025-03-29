/*
This file is the entry point for the Vue application. It imports the createApp function from Vue and the root component (App.vue), then mounts the app to the DOM element with id "app". It also imports the Tailwind CSS file to apply consistent styling across the application.
*/

import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';

createApp(App).mount('#app');
