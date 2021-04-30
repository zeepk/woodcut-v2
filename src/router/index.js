import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import PlayerLandingPage from '../components/PlayerLandingPage.vue';

Vue.use(VueRouter);

export const usernameRoute = { path: '/user/:username', name: 'Player', component: PlayerLandingPage };

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  usernameRoute

];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
