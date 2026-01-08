  <!DOCTYPE html>
  <html lang="en">
  <?php include 'components/Head.php'; ?>

  <body class="bg-brand-gray-300">
    <?php include 'components/Header.php'; ?>
    <div class="bg-brand-gray-100 max-w-7xl mx-auto">
      <div class="flex justify-center w-full relative z-0">
        <div id="background-gradient" style="min-width: 100%;">
          <a href="#jobs">
            <i class="ph ph-caret-double-down text-3xl text-brand-gray-400 hover:text-brand-red transition-colors"></i>
          </a>
        </div>
      </div>

      <section id="jobs" class="py-16 bg-brand-gray-100">
        <div class="max-w-5xl mx-auto">
          <header>
            <span class="text-brand-red font-inconsolata text-xl text-center mb-4 block">Meus trabalhos</span>
            <h2 class="font-maven font-bold text-2xl text-brand-gray-600 text-center mb-16">Veja os projetos em destaque</h2>
          </header>
        </div>
        <?php include 'components/Projects.php'; ?>
      </section>
      <?php include 'components/Services.php'; ?>
      <?php include 'components/Footer.php'; ?>
    </div>
  </body>

  </html>