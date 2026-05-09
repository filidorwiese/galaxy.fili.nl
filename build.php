#!/usr/bin/env php
<?php
/**
 * Static build for galaxy.fili.nl.
 * Replaces the runtime mrclay/minify (PHP 7.4 only) with pre-built bundles.
 *
 * Outputs:
 *   HTML/css/core.min.css            (was /min/g=core-css)
 *   HTML/javascript/core.min.js      (was /min/g=core-js)
 *   HTML/javascript/theme-*.min.js   (was /min/?f=javascript/theme-*.js)
 */

declare(strict_types=1);

require __DIR__ . '/vendor/autoload.php';

use MatthiasMullie\Minify;

$root = __DIR__ . '/HTML';
$groups = require $root . '/min/groupsConfig.php';

function resolve(string $root, string $path): string {
    // groupsConfig uses "//" prefix to mean DOCUMENT_ROOT
    return $root . '/' . ltrim(preg_replace('#^//#', '', $path), '/');
}

function build(string $label, string $output, array $sources, string $type): void {
    $minifier = $type === 'css' ? new Minify\CSS() : new Minify\JS();
    foreach ($sources as $src) {
        if (!is_file($src)) {
            fwrite(STDERR, "missing: $src\n");
            exit(1);
        }
        $minifier->add($src);
    }
    $minifier->minify($output);
    printf("  %-40s %s bytes\n", $label, number_format(filesize($output)));
}

echo "Bundles:\n";
foreach ($groups as $name => $files) {
    $sources = array_map(fn($f) => resolve($root, $f), $files);
    if (str_ends_with($name, '-css')) {
        build("$name -> css/" . substr($name, 0, -4) . ".min.css",
              "$root/css/" . substr($name, 0, -4) . ".min.css",
              $sources, 'css');
    } elseif (str_ends_with($name, '-js')) {
        build("$name -> javascript/" . substr($name, 0, -3) . ".min.js",
              "$root/javascript/" . substr($name, 0, -3) . ".min.js",
              $sources, 'js');
    } else {
        fwrite(STDERR, "skip group with unknown type: $name\n");
    }
}

echo "Themes (loaded at runtime by universe.js):\n";
foreach (glob("$root/javascript/theme-*.js") as $file) {
    if (str_ends_with($file, '.min.js')) continue;
    $out = preg_replace('/\.js$/', '.min.js', $file);
    build(basename($file), $out, [$file], 'js');
}

echo "Done.\n";
