<?php include 'data/services.php'; ?>
<section id="services">
  <div class="container">
    <header>
      <span class="header-span">Meus serviços</span>
      <h2 class="header-title">Como posso ajudar o seu negócio</h2>
    </header>
  </div>
  <div class="cards">
    <div class="grid-container">
      <?php foreach ($services as $service): ?>
        <div class="grid-item">
          <img src="<?= $service['icon'] ?>" alt="">
          <h3><?= $service['title'] ?></h3>
          <p><?= $service['description'] ?></p>
        </div>
      <?php endforeach; ?>
    </div>
</section>