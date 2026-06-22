<?php foreach ($socials as $social): ?>
  <a href="<?= $social['link'] ?>" target="_blank" class="social-button">
    <img src="<?= $social['icon'] ?>" alt="">
    <span><?= $social['title'] ?></span>
    <img src="assets/icons/arrow-up.svg" alt="">
  </a>
<?php endforeach; ?>