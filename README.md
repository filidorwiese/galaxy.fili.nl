# galaxy.fili.nl
The source for my personal website on https://galaxy.fili.nl for whoever is interested. All artwork has been created by Arthur van 't Hoog (http://www.avth.nl) and is not free for use (see license information below).

## Building minified CSS/JS ##

The site ships pre-minified bundles. Source files live in `HTML/css/` and `HTML/javascript/`; the build script concatenates and minifies them into:

* `HTML/css/core.min.css` — referenced from `HTML/index.html`
* `HTML/javascript/core.min.js` — referenced from `HTML/index.html`
* `HTML/javascript/theme-*.min.js` — loaded at runtime by `universe.js` when a theme is selected

Bundle membership for `core.min.css` and `core.min.js` is defined in `HTML/min/groupsConfig.php`. Theme files are picked up automatically via `theme-*.js` glob.

### Prerequisites

* PHP 8.x
* [Composer](https://getcomposer.org/)

### Workflow

```
composer install        # one-time, installs matthiasmullie/minify
php build.php           # rebuilds all .min.css / .min.js
```

After editing any source CSS or JS, run `php build.php` and commit the regenerated `*.min.*` files. Bump the cache-buster query string in `HTML/index.html` (`?20160908-006` etc.) when changing `core.min.css` / `core.min.js`.

The legacy runtime minifier in `HTML/min/` (mrclay/minify 2.1.5) is no longer used; it was incompatible with PHP 8.x.

## Publications ##

In July of 2011 it was awarded the Site of the Day by Awwwards.com

http://www.awwwards.com/web-design-awards/filidor-wiese-frontbackend-webdeveloper

In December of 2012 it was mentioned in the gallery section of .Net magazine  

![Multeor](https://galaxy.fili.nl/images/net-magazine.jpg)

## License ##

The code and artwork in this repository is licensed under a [Creative Commons Attribution-NonCommercial 4.0 International License](http://creativecommons.org/licenses/by-nc/4.0/).

Meaning you are free to:

* Share — copy and redistribute the material in any medium or format
* Adapt — remix, transform, and build upon the material

Under the following terms:

* Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
* NonCommercial — You may not use the material for commercial purposes.
