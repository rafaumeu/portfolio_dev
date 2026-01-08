<?php include 'data/services.php'; ?>
<section id="services">
  <header>
    <span class="text-brand-red font-inconsolata text-xl text-center mb-4 block">Meus serviços</span>
    <h2 class="font-maven font-bold text-2xl text-brand-gray-600 text-center mb-14">Como posso ajudar o seu negócio</h2>
  </header>

  <div class="cards">
    <?php foreach ($services as $service): ?>
      <div class="grid-item transition-all border-transparent hover:border-brand-gray-600 cursor-default bg-transparent" style="--hover-color: <?= $service['hover_color'] ?>;">
        <div class="mb-4">
          <i class="<?= $service['icon'] ?> text-4xl <?= $service['color'] ?>"></i>
        </div>
        <h3 class="font-asap font-bold text-lg text-brand-gray-600 mb-1"><?= $service['title'] ?></h3>
        <p class="font-maven text-sm text-brand-gray-400 mb-2"><?= $service['description'] ?></p>
      </div>
    <?php endforeach; ?>
  </div>
</section>