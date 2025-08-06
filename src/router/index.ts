import { createRouter, createWebHistory} from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: () => import('../views/Home.vue') },
  { path: '/servicios', name: 'Servicios', component: () => import('../views/Servicios.vue') },
  { path: '/ubicacion', name: 'Ubicacion', component: () => import('../views/Ubicacion.vue') },
  { path: '/contacto', name: 'Contacto', component: () => import('../views/Contacto.vue') },
  { path: '/sobre-nosotros', name: 'SobreNosotros', component: () => import('../views/SobreNosotros.vue') },
  { path: '/medicamentos', name: 'Medicamentos', component: () => import('../views/Medicamentos.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
