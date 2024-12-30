import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import CreateAccount from '@/components/registerPage.vue';
import AuthentificationPage from '@/components/loginPage.vue';
import adminRegister from '@/components/Admin/registerPage.vue';
import adminLogin from '@/components/Admin/connectPage.vue';
import adminDash from '@/components/Admin/studentList.vue';
import mesCours from '@/components/mesCours.vue';
import Home from '@/components/HelloWorld.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/CreateAccount', component: CreateAccount },
  { path: '/mesCours', component: mesCours },
  { path: '/adminPage', component: adminRegister },
  { path: '/adminDash', component: adminDash },
  { path: '/adminConnect', component: adminLogin },
  { path: '/auth', component: AuthentificationPage },
 
];

const router = createRouter({
  history: createWebHistory(), 
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');

