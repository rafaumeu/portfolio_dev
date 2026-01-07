<!DOCTYPE html>
<html lang="en">
<?php include 'components/Head.php'; ?>

<body>
  <?php include 'components/Header.php'; ?>
  <div class="container">
    <div id="background-gradient">
      <a href="#jobs">
        <img src="assets/icons/CaretDoubleDown.svg" alt="">
      </a>
    </div>
  </div>

  <section id="jobs">
    <div class="container">
      <header>
        <span class="header-span">Meus trabalhos</span>
        <h2 class="header-title">Veja os projetos em destaque</h2>
      </header>
    </div>
    <?php include 'components/Projects.php'; ?>
  </section>
  <?php include 'components/Services.php'; ?>
  <?php include 'components/Footer.php'; ?>
</body>

</html>