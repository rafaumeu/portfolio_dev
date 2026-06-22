<?php include 'data/badges.php'; ?>
<nav id="badges">
  <ul class="container">
    <?php foreach ($badges as $badge): ?>
      <li>
        <img src="<?= $badge['icon'] ?>" alt="<?= $badge['title'] ?>" class="<?= $badge['class'] ?>">
        <span class="badge">
          <?= $badge['title'] ?>
        </span>

      </li>
    <?php endforeach; ?>

  </ul>

</nav>