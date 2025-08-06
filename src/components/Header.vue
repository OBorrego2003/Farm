<template>
  <header class="header">
    <div class="logo">
      <h1>Farmacia Márquez</h1>
    </div>

    <button class="menu-toggle" @click="abrirMenu">☰</button>

    <div v-if="menuAbierto" class="overlay" @click.self="cerrarMenu">
      <nav class="menu-lateral">
        <router-link to="/" @click="cerrarMenu">Inicio</router-link>
        <router-link to="/servicios" @click="cerrarMenu">Servicios</router-link>
        <router-link to="/ubicacion" @click="cerrarMenu">Ubicación</router-link>
        <router-link to="/sobre-nosotros" @click="cerrarMenu">Sobre Nosotros</router-link>
        <router-link to="/contacto" @click="cerrarMenu">Contacto</router-link>
        <router-link to="/medicamentos" @click="cerrarMenu">Medicamentos</router-link>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const menuAbierto = ref(false);

function abrirMenu() {
  menuAbierto.value = true;
}

function cerrarMenu() {
  menuAbierto.value = false;
}
</script>

<style scoped>
.header {
  background: linear-gradient(to right, #005187, #4d82bc);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 81, 135, 0.3);
  position: relative;
  z-index: 1002;
}

.logo h1 {
  color: #fcffff;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}

.menu-toggle {
  background: none;
  border: none;
  color: #fcffff;
  font-size: 1.8rem;
  cursor: pointer;
}

.overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 81, 135, 0.3);
  z-index: 1000;
}

.menu-lateral {
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;
  background-color: #fcffff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 1001;
}

.menu-lateral a {
  color: #005187;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.menu-lateral a:hover {
  color: #4d82bc;
}
</style>
