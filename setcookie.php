<?php
    setcookie('my_cookie', 'cookie_value', [
        'expires' => time() + 3600,
        'path' => '/',
        'domain' => 'Catchworld.com',
        'secure' => true,
        'httponly' => true,
        'samesite' => 'None'
    ]);
?>