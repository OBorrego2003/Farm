<template>
  <section class="ubicacion">
    <div class="info">
      <h2 class="titulo">Ubicación</h2>
      <p><strong>Dirección:</strong> Nogal Americano 193, Rincón de los Nogales</p>
      <p><strong>Horario:</strong></p>
      <ul>
        <li>Lunes a Sabado: 9:00 am - 22:00 pm</li>
        <li>Domingo: 10:00 am - 17:00 pm</li>

      </ul>
      <p>27054 Torreón, Coah.</p>
    </div>
    <div class="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28798.27332589763!2d-103.40594876523436!3d25.54556543088311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fdb0ccdf20243%3A0x6e7caab5aad713cb!2sFarmacia%20Marquez!5e0!3m2!1ses!2smx!4v1754444743372!5m2!1ses!2smx" 
      width="600" 
      height="450" 
      style="border:0;" 
      allowfullscreen
       loading="lazy" 
       referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'Ubicacion',
};
</script>

<style scoped>
.ubicacion {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  background: linear-gradient(to bottom, #fcffff, #c4dafa);
  padding: 2rem 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 81, 135, 0.2);
  font-family: 'Segoe UI', sans-serif;
}

.info {
  flex: 1;
  min-width: 280px;
}

.map {
  flex: 1;
  min-width: 280px;
  height: 400px;
}

.titulo {
  color: #005187;
  font-size: 2rem;
  margin-bottom: 1rem;
}

p,
ul {
  color: #4d82bc;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  line-height: 1.6;
}

ul {
  padding-left: 1rem;
}

.btn {
  display: inline-block;
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

/* Responsivo para celulares */
@media (max-width: 768px) {
  .ubicacion {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem 1rem;
  }

  .info {
    width: 100%;
  }

  .map {
    width: 100%;
    height: 250px;
  }

  .map iframe {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }

  .titulo {
    font-size: 1.5rem;
  }

  p,
  ul {
    font-size: 1rem;
  }

  ul {
    padding-left: 0;
    list-style-position: inside;
  }

  .btn {
    margin-top: 1rem;
    font-size: 0.95rem;
    padding: 0.6rem 1.2rem;
  }
}
</style>
