<?php include __DIR__ . '/../layout/header.php'; ?>

<main class="container auth-container">
  <h2>ログイン</h2>

  <?php if (!empty($error)): ?>
    <p class="error-message"><?= h($error) ?></p>
  <?php endif; ?>

  <form method="POST" action="/login" class="auth-form">
    <input type="hidden" name="csrf_token" value="<?= h(Csrf::token()) ?>">

    <div class="form-group">
      <label for="username">ユーザー名</label>
      <input type="text" id="username" name="username" required>
    </div>

    <div class="form-group">
      <label for="password">パスワード</label>
      <input type="password" id="password" name="password" required>
    </div>

    <button type="submit" class="btn">ログイン</button>
  </form>
</main>

<?php include __DIR__ . '/../layout/footer.php'; ?>
