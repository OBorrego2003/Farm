<template>
  <section class="servicios">
    <h2 class="titulo">Nuestros Servicios</h2>
    <transition-group name="fade" tag="div" class="cards">
      <div class="card" v-for="(servicio, index) in servicios" :key="index">
        <i :class="servicio.icono"></i>
        <h3>{{ servicio.titulo }}</h3>
        <p>{{ servicio.descripcion }}</p>
      </div>
    </transition-group>
  </section>
</template>

<script lang="ts" setup>
interface Servicio {
  icono: string;
  titulo: string;
  descripcion: string;
}

const servicios: Servicio[] = [
  {
    icono: 'fas fa-pills',
    titulo: 'Dispensación de Medicamentos',
    descripcion: 'Medicamentos con receta y de venta libre.',
  },
  {
    icono: 'fas fa-user-md',
    titulo: 'Atención Personalizada',
    descripcion: 'Atencón y servicio al cliente de primera calidad con amplio catálogo de productos dispensación del surtido de recetas medicas.',
  },
  {
    icono: 'fas fa-heartbeat',
    titulo: 'Toma de Signos Vitales',
    descripcion: 'Presión arterial, glucosa, temperatura y frecuencia cardiaca.',
  },
  {
    icono: 'fas fa-syringe',
    titulo: 'Aplicación de Inyecciones',
    descripcion: 'Aplicación de medicamentos inyectables.',
  },
  {
    icono: 'fas fa-weight',
    titulo: 'Control de Peso y Talla',
    descripcion: 'Evaluación nutricional básica.',
  },
  {
    icono: 'fas fa-spa',
    titulo: 'Productos de Bienestar',
    descripcion: 'Vitaminas, suplementos, dermatología, higiene y cuidado del bebé.',
  },
];
</script>

<style scoped>
.servicios {
  padding: 2rem 1rem;
  background: linear-gradient(to bottom, #fcffff, #c4dafa);
  font-family: 'Segoe UI', sans-serif;
  animation: fadeInUp 0.8s ease;
  border-radius: 12px;
}
.titulo {
  font-size: 2rem;
  color: #005187;
  margin-bottom: 2rem;
  text-align: center;
  animation: fadeInDown 0.8s ease;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.card {
  background-color: #ffffff;
  border-left: 6px solid #4d82bc;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 81, 135, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: fadeInCard 0.6s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 81, 135, 0.3);
}

.card i {
  font-size: 2rem;
  color: #005187;
  margin-bottom: 1rem;
}

.card h3 {
  color: #4d82bc;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.card p {
  color: #005187;
  font-size: 1rem;
}

/* Transiciones */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Animaciones */
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

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInCard {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Responsivo */
@media (max-width: 768px) {
  .titulo {
    font-size: 1.5rem;
  }

  .card h3 {
    font-size: 1rem;
  }

  .card p {
    font-size: 0.95rem;
  }
}
</style>
