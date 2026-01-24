<?php
require_once __DIR__ . '/../app/bootstrap.php';

$path = $_GET['path'] ?? '';
$path = parse_url($path, PHP_URL_PATH); // クエリ除去
$path = '/' . trim($path, '/');         // 正規化

$router = new Router();
$router->dispatch($_SERVER['REQUEST_METHOD'], $path);
