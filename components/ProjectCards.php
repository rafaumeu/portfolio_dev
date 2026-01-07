<?php include 'data/projects.php'; ?>
<?php foreach ($projects as $project): ?>
  <div class="grid-item">

    <a href="<?= $project['link'] ?>" target="_blank">
      <img src="<?= $project['image'] ?>" alt="">
      <h3><?= $project['title'] ?></h3>
      <p><?= $project['description'] ?></p>
    </a>
  </div>
<?php endforeach; ?>