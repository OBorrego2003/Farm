<template>
  <div class="contacto-container">
    <h1 class="titulo">Contacto</h1>
    <transition-group name="fade" tag="div">
      <div
        class="contacto-card"
        v-for="(item, index) in contactos"
        :key="index"
      >
        <h2>{{ item.titulo }}</h2>
        <p>{{ item.detalle }}</p>
        <a
          v-if="item.link"
          :href="item.link"
          target="_blank"
          class="contacto-link"
        >
          {{ item.linkTexto }}
        </a>
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts" setup>
interface Contacto {
  titulo: string;
  detalle: string;
  link?: string;
  linkTexto?: string;
}

const contactos: Contacto[] = [
  {
    titulo: 'Teléfono',
    detalle: '+52 871 937 7782',
  },
  {
    titulo: 'Correo Electrónico',
    detalle: 'fmfarmaciasmarquez@gmail.com',
    link: 'mailto:fmfarmaciasmarquez@gmail.com',
    linkTexto: 'Enviar Correo',
  },
  {
    titulo: 'WhatsApp Directo',
    detalle: 'Enviar Mensaje',
    link: 'https://wa.me/8719377782',
    linkTexto: 'Abrir WhatsApp',
  },
];
</script>

<style scoped>
.contacto-container {
  padding: 2rem 1rem;
  background: linear-gradient(to bottom, #fcffff, #c4dafa);
  font-family: 'Segoe UI', sans-serif;
  animation: fadeInUp 0.8s ease;
  border-radius: 12px;
}

.titulo {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #005187;
  animation: fadeInDown 0.8s ease;
}

.contacto-card {
  background-color: #ffffff;
  border-left: 6px solid #4d82bc;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 81, 135, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contacto-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 81, 135, 0.3);
}

.contacto-card h2 {
  color: #4d82bc;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.contacto-link {
  display: inline-block;
  margin-top: 0.5rem;
  color: #005187;
  text-decoration: underline;
  font-weight: bold;
  transition: color 0.3s ease;
}

.contacto-link:hover {
  color: #4d82bc;
}

/* Animaciones */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsivo */
@media (max-width: 768px) {
  .contacto-card {
    padding: 1rem;
  }

  .titulo {
    font-size: 1.5rem;
  }

  .contacto-card h2 {
    font-size: 1rem;
  }

  .contacto-link {
    font-size: 0.95rem;
  }
}
</style>
