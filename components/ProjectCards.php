<?php include 'data/projects.php'; ?>
<?php
$colors = [
  'PHP' => 'bg-tech-php/10 text-tech-php',
  'HTML' => 'bg-tech-html/10 text-tech-html',
  'Javascript' => 'bg-tech-js/10 text-tech-js',
  'React' => 'bg-tech-react/10 text-tech-react',
  'Node' => 'bg-tech-node/10 text-tech-node',
  "CSS" => 'bg-tech-css/10 text-tech-css',
  'Default' => 'bg-brand-gray-300 text-brand-gray-400',
]
?>
<?php foreach ($projects as $project): ?>
  <div class="group bg-brand-gray-300 rounded-xl p-6 flex flex-col items-start gap-4 hover:bg-brand-gray-200 transition-colors ">
    <a href="<?= $project['link'] ?>" target="_blank" class="flex w-full gap-4 bg-brand-gray-300 rounded-xl p-3 group-hover:bg-brand-gray-200 transition-colors">
      <div class="w-[240px] h-[160px] shrink-0">
        <img src="<?= $project['image'] ?>" class="h-full object-cover rounded-lg mb-4" alt="">
      </div>
      <div class="flex flex-col justify-between w-full">
        <div>
          <h3 class="font-asap font-bold text-lg text-brand-gray-600 mb-2"><?= $project['title'] ?></h3>
          <p class="text-xs text-brand-gray-400 mb-4"><?= $project['description'] ?></p>
        </div>
        <div class="flex flex-wrap gap-2">
          <?php foreach ($project['tags'] as $tag): ?>
            <?php $tagClass = $colors[$tag] ?? $colors['Default']; ?>
            <span class="px-2 py-1 rounded-full  font-maven font-medium text-brand-gray-400 <?= $tagClass ?>"><?= $tag ?></span>
          <?php endforeach; ?>
        </div>
      </div>
    </a>

  </div>
<?php endforeach; ?>