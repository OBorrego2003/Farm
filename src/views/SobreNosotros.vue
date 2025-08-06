<template>
  <section class="sobre-nosotros">
    <div class="imagen">
      <img src="/public/foto.jpg" alt="Farmacia Márquez" />
    </div>
    <div class="texto">
      <h2 class="titulo">Sobre Nosotros</h2>
      <p>
        Farmacia Márquez ha servido a la comunidad por más de 4 años, comprometidos con la salud y el bienestar de nuestros clientes.
      </p>
      <p>
        Nuestro equipo de farmacéuticos altamente calificados está siempre dispuesto a ofrecerte el mejor consejo y atención personalizada.
      </p>
      <p>
        Creemos en un enfoque integral de la salud, combinando la dispensación de medicamentos con servicios de prevención y educación para una vida más sana.
      </p>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'SobreNosotros',
};
</script>

<style scoped>
.sobre-nosotros {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  background: linear-gradient(to bottom, #fcffff, #c4dafa);
  padding: 2rem 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 81, 135, 0.2);
  align-items: center;
  font-family: 'Segoe UI', sans-serif;
  animation: fadeInUp 0.8s ease;
}

.imagen {
  flex: 1;
  min-width: 280px;
  display: flex;
  justify-content: center;
  animation: fadeInLeft 1s ease;
}

.imagen img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 81, 135, 0.3);
}

.texto {
  flex: 1;
  min-width: 280px;
  animation: fadeInRight 1s ease;
}

.titulo {
  color: #005187;
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  color: #4d82bc;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  line-height: 1.6;
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

/* Responsivo */
@media (max-width: 768px) {
  .sobre-nosotros {
    flex-direction: column;
    text-align: center;
  }

  .imagen img {
    max-width: 90%;
  }

  .titulo {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }
}
</style>
