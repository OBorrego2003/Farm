<template>
  <section class="medicamentos">
    <h2 class="titulo">Medicamentos</h2>

    <div class="filtros">
      <button
        v-for="categoria in categorias"
        :key="categoria"
        :class="['btn', { activo: categoria === seleccionada }]"
        @click="seleccionada = categoria"
      >
        {{ categoria }}
      </button>
    </div>

    <transition-group name="fade" tag="div" class="lista">
      <div class="card" v-for="(med, index) in filtrados" :key="index">
        <h3>{{ med.nombre }}</h3>
        <p>{{ med.descripcion }}</p>
      </div>
    </transition-group>
  </section>
  <button v-if="mostrarBoton" class="scroll-top" @click="scrollArriba">
  ↑
</button>

</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

interface Medicamento {
  nombre: string;
  descripcion: string;
  categoria: string;
}
import { onMounted, onUnmounted } from 'vue';

const mostrarBoton = ref(false);

function scrollArriba() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function manejarScroll() {
  mostrarBoton.value = window.scrollY > 200;
}

onMounted(() => {
  window.addEventListener('scroll', manejarScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', manejarScroll);
});


const seleccionada = ref('Vitaminas');

const categorias = ['Vitaminas', 'Analgésicos', 'Antibióticos'];

const medicamentos: Medicamento[] = [
//Vitaminas
  { nombre: 'Vitamina C', descripcion: 'Refuerza el sistema inmunológico.', categoria: 'Vitaminas' },
  { nombre: 'Multivitamínico', descripcion: 'Complemento nutricional diario.', categoria: 'Vitaminas' },
  { nombre: 'Vitamina D', descripcion: 'Importante para la salud ósea.', categoria: 'Vitaminas' },
  { nombre: 'Vitamina B 12', descripcion: 'Esencial para la formación de glóbulos rojos.', categoria: 'Vitaminas' },
  { nombre: 'Ácido Fólico', descripcion: 'Importante para mujeres embarazadas.', categoria: 'Vitaminas' },
  { nombre: 'Vitamina E', descripcion: 'Antioxidante que protege las células.', categoria: 'Vitaminas' },
  { nombre: 'Omega 3', descripcion: 'Ácidos grasos esenciales para la salud cardiovascular.', categoria: 'Vitaminas' },
  { nombre: 'Calcio', descripcion: 'Mineral esencial para huesos y dientes.', categoria: 'Vitaminas' },
  { nombre: 'Magnesio', descripcion: 'Importante para la función muscular y nerviosa.', categoria: 'Vitaminas' },
  { nombre: 'Zinc', descripcion: 'Mineral esencial para el sistema inmunológico.', categoria: 'Vitaminas' },
  { nombre: 'Vitamina B6', descripcion: 'Importante para el metabolismo de proteínas.', categoria: 'Vitaminas' },
  { nombre: 'Vitamina B1', descripcion: 'Esencial para la función nerviosa y muscular.', categoria: 'Vitaminas' },
  { nombre: 'Vitamina B2', descripcion: 'Importante para la producción de energía.', categoria: 'Vitaminas' },
  { nombre: 'Vitamina B3', descripcion: 'Esencial para la salud de la piel y el sistema nervioso.', categoria: 'Vitaminas' },
  { nombre: 'Coenzima Q10', descripcion: 'Antioxidante que ayuda a la producción de energía celular.', categoria: 'Vitaminas' },


//Analgesicos
  { nombre: 'Paracetamol', descripcion: 'Alivia el dolor y reduce la fiebre.', categoria: 'Analgésicos' },
  { nombre: 'Ibuprofeno', descripcion: 'Antiinflamatorio y analgésico.', categoria: 'Analgésicos' },
  { nombre: 'Aspirina', descripcion: 'Alivia el dolor y reduce la inflamación.', categoria: 'Analgésicos' },
  { nombre: 'Naproxeno', descripcion: 'Alivia el dolor y la inflamación.', categoria: 'Analgésicos' },
  { nombre: 'Diclofenaco', descripcion: 'Antiinflamatorio para dolores musculares y articulares.', categoria: 'Analgésicos' },
  { nombre: 'Ketorolaco', descripcion: 'Analgésico potente para dolores agudos.', categoria: 'Analgésicos' },
  { nombre: 'Metamizol', descripcion: 'Alivia el dolor intenso y la fiebre alta.', categoria: 'Analgésicos' },
  { nombre: 'Tramadol', descripcion: 'Analgésico opioide para dolores moderados a severos.', categoria: 'Analgésicos' },
  { nombre: 'Celecoxib', descripcion: 'Antiinflamatorio no esteroideo para artritis y dolor crónico.', categoria: 'Analgésicos' },
  { nombre: 'Piroxicam', descripcion: 'Antiinflamatorio para el tratamiento de la artritis.', categoria: 'Analgésicos' },
  { nombre: 'Metocarbamol', descripcion: 'Relajante muscular para espasmos musculares.', categoria: 'Analgésicos' },
  { nombre: 'Carisoprodol', descripcion: 'Relajante muscular para aliviar el dolor muscular.', categoria: 'Analgésicos' },
  { nombre: 'Gabapentina', descripcion: 'Utilizado para el dolor neuropático y convulsiones.', categoria: 'Analgésicos' },
  { nombre: 'Pregabalina', descripcion: 'Analgésico para dolor neuropático y trastornos de ansiedad.', categoria: 'Analgésicos' },
  { nombre: 'Oximetazolina', descripcion: 'Descongestionante nasal que alivia la congestión.', categoria: 'Analgésicos' },
  
//Antibióticos
  { nombre: 'Amoxicilina', descripcion: 'Antibiótico para infecciones bacterianas.', categoria: 'Antibióticos' },
  { nombre: 'Azitromicina', descripcion: 'Tratamiento de infecciones respiratorias.', categoria: 'Antibióticos' },
  { nombre: 'Ciprofloxacino', descripcion: 'Antibiótico de amplio espectro.', categoria: 'Antibióticos' },
  { nombre: 'Clindamicina', descripcion: 'Tratamiento de infecciones de la piel y tejidos blandos.', categoria: 'Antibióticos' },
  { nombre: 'Doxiciclina', descripcion: 'Antibiótico para infecciones respiratorias y de la piel.', categoria: 'Antibióticos' },
  { nombre: 'Metronidazol', descripcion: 'Tratamiento de infecciones bacterianas y parasitarias.', categoria: 'Antibióticos' },
  { nombre: 'Cefalexina', descripcion: 'Antibiótico para infecciones del tracto respiratorio.', categoria: 'Antibióticos' },
  { nombre: 'Levofloxacino', descripcion: 'Antibiótico para infecciones del tracto urinario.', categoria: 'Antibióticos' },
  { nombre: 'Gentamicina', descripcion: 'Antibiótico para infecciones graves.', categoria: 'Antibióticos' },
  { nombre: 'Cloranfenicol', descripcion: 'Antibiótico de amplio espectro para infecciones graves.', categoria: 'Antibióticos' },
  { nombre: 'Nitrofurantoína', descripcion: 'Tratamiento de infecciones del tracto urinario.', categoria: 'Antibióticos' },
  { nombre: 'Sulfametoxazol/Trimetoprim', descripcion: 'Combinación antibacteriana para diversas infecciones.', categoria: 'Antibióticos' },
  { nombre: 'Moxifloxacino', descripcion: 'Antibiótico para infecciones respiratorias y oculares.', categoria: 'Antibióticos' },
  { nombre: 'Ceftriaxona', descripcion: 'Antibiótico de amplio espectro para infecciones graves.', categoria: 'Antibióticos' },
  { nombre: 'Claritromicina', descripcion: 'Antibiótico para infecciones respiratorias y cutáneas.', categoria: 'Antibióticos' },
  { nombre: 'Cefuroxima', descripcion: 'Antibiótico para infecciones del tracto respiratorio y urinario.', categoria: 'Antibióticos' },

];

const filtrados = computed(() =>
  medicamentos.filter((med) => med.categoria === seleccionada.value)
);
</script>

<style scoped>
.medicamentos {
  padding: 2rem 1rem;
  background: linear-gradient(to bottom, #fcffff, #c4dafa);
  font-family: 'Segoe UI', sans-serif;
  animation: fadeInUp 0.8s ease;
  border-radius: 12px;
}

.titulo {
  font-size: 2rem;
  color: #005187;
  margin-bottom: 1.5rem;
  text-align: center;
  animation: fadeInDown 0.8s ease;
}

.filtros {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.btn {
  background-color: #005187;
  color: #fcffff;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #4d82bc;
}

.btn.activo {
  background-color: #4d82bc;
}

.lista {
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

.card h3 {
  color: #005187;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.card p {
  color: #4d82bc;
  font-size: 1rem;
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

  .btn {
    font-size: 0.95rem;
    padding: 0.5rem 1rem;
  }

  .card h3 {
    font-size: 1rem;
  }

  .card p {
    font-size: 0.95rem;
  }
}

.scroll-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #005187;
  color: #fcffff;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 1.8rem;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 81, 135, 0.3);
  transition: background-color 0.3s ease, transform 0.3s ease;
  z-index: 1000;
}

.scroll-top:hover {
  background-color: #4d82bc;
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .scroll-top {
    width: 45px;
    height: 45px;
    font-size: 1.5rem;
    bottom: 15px;
    right: 15px;
  }
}


</style>
