<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Access denied!</title>

    <?=$this->assets([
        'app:assets/css/app.css',
        'app:assets/vendor/noty/noty.min.js',
        ['src' => 'app:assets/js/app.js', 'type' => 'module']
    ], APP_VERSION)?>

</head>
<body class="kiss-flex kiss-flex-middle">

    <kiss-container class="kiss-align-center">

        <div class="kiss-margin-bottom">
            <img class="app-logo kiss-margin-auto" src="<?=$this->base('/logo.svg')?>" width="60" alt="Logo">
        </div>

        <h1>500</h1>

        <p class="kiss-margin kiss-size-large kiss-color-muted"><?=_t('Internal Server Error')?></p>

    </kiss-container>
    
</body>
</html>