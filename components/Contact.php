<?php foreach ($socials as $social): ?>
  <a href="<?= $social['link'] ?>" target="_blank"
    class="group flex items-center justify-between transition-all"
    style="--hover-color: <?= $social['hover_color'] ?>;">

    <div class="flex items-center gap-3">
      <i class="transition-colors <?= $social['fa_icon'] ?>"></i>
      <span><?= $social['title'] ?></span>
    </div>

    <i class="ph ph-arrow-up-right hover:bg-<?= $social['hover_color'] ?> transition-colors"></i>
  </a>
<?php endforeach; ?>