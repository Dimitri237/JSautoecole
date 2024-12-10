import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import CreateAccount from '@/components/registerPage.vue';
import AuthentificationPage from '@/components/loginPage.vue';
import Home from '@/components/HelloWorld.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/CreateAccount', component: CreateAccount },
  { path: '/auth', component: AuthentificationPage },
 
];

const router = createRouter({
  history: createWebHistory(), 
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');

