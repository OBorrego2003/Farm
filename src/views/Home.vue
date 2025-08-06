<template>
  <section class="home">
    <div class="content">
      <h2 class="titulo">Tu Salud, Nuestra Prioridad</h2>
      <p class="descripcion">
        En Farmacia Márquez, nos dedicamos a brindarte atención farmacéutica de calidad y productos confiables para tu bienestar.
      </p>
      <router-link to="/servicios" class="btn">Conoce Nuestros Servicios</router-link>
    </div>
    <div class="image">
      <img src="/public/istockphoto-637982140-612x612.jpg" alt="Farmacia interior" />
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'Home',
};
</script>

<style scoped>
.home {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to bottom, #fcffff, #c4dafa);
  padding: 3rem 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 81, 135, 0.2);
  gap: 2rem;
  font-family: 'Segoe UI', sans-serif;
  animation: fadeInUp 0.8s ease;
}

.content {
  flex: 1;
  max-width: 500px;
  animation: fadeInLeft 1s ease;
}

.image {
  flex: 1;
  display: flex;
  justify-content: center;
  animation: fadeInRight 1s ease;
}

.image img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 81, 135, 0.3);
}

.titulo {
  color: #005187;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.descripcion {
  color: #4d82bc;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.btn {
  background-color: #005187;
  color: #fcffff;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #4d82bc;
}

/* Animaciones */
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

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsivo para celulares */
@media (max-width: 768px) {
  .home {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1rem;
  }

  .content {
    max-width: 100%;
  }

  .titulo {
    font-size: 1.5rem;
  }

  .descripcion {
    font-size: 1rem;
  }

  .btn {
    font-size: 0.95rem;
    padding: 0.6rem 1.2rem;
  }

  .image img {
    max-width: 90%;
  }
}
</style>
