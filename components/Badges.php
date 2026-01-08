<?php include 'data/badges.php'; ?>
<nav id="badges">
  <ul class="flex flex-wrap justify-center gap-4 mb-16">
    <?php foreach ($badges as $badge): ?>
      <li class="group flex items-center gap-2 px-4 py-2 <?= $badge['bg_color'] ?> rounded-full hover:border hover:border-<?= $badge['hover_color'] ?>  transition-all">
        <i class="<?= $badge['fa_icon'] ?> text-2xl <?= $badge['color'] ?> "></i>
        <span class="flex items-center justify-center text-gray-100 opacity-80 group-hover:text-<?= $badge['hover_color'] ?>">
          <?= $badge['title'] ?>
        </span>

      </li>
    <?php endforeach; ?>

  </ul>

</nav>