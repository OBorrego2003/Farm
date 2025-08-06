<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-brand">
        <h2>Farmacia Márquez</h2>
        <p>Tu bienestar es nuestra misión.</p>
      </div>

      <div class="footer-contact">
        <p>
          <strong>Tel:</strong>
          <a href="tel:+528719377782" class="footer-link">+52 871 937 7782</a>
        </p>
        <p>
          <strong>Email:</strong>
          <a href="mailto:fmfarmaciasmarquez@gmail.com" class="footer-link">
            fmfarmaciasmarquez@gmail.com
          </a>
        </p>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2025 Farmacia Márquez. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'Footer',
};
</script>

<style scoped>
.footer {
  background-color: #005187;
  color: #fcffff;
  padding: 2rem 1rem 1rem;
  font-family: 'Segoe UI', sans-serif;
  border-top: 5px solid #84b6f4;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 1rem;
}

.footer-brand h2 {
  margin: 0;
  font-size: 1.5rem;
  color: #fcffff;
}

.footer-brand p {
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #c4dafa;
}

.footer-contact p {
  margin: 0.3rem 0;
  font-size: 0.95rem;
}

.footer-link {
  color: inherit;
  text-decoration: none;
  font-weight: inherit;
  cursor: pointer;
}

.footer-bottom {
  text-align: center;
  font-size: 0.85rem;
  color: #c4dafa;
  border-top: 1px solid #4d82bc;
  padding-top: 0.5rem;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-links {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
}
</style>
