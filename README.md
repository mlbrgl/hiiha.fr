## hiiha.fr

Static archive of https://hiiha.fr, created with the following process.

### 1- Preparation (Wordpress)

- removed XML-RPC header links 

  - wp-content/themes/esplanade/functions.php

  ```php
  function removeHeadLinks() {
      remove_action('wp_head', 'rsd_link');
      remove_action('wp_head', 'wlwmanifest_link');
  }
  add_action('init', 'removeHeadLinks');
  
  ```

  - wp-content/themes/esplanade/header.php

    Removed ```<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />```

- plugins
  
  - updated Google XML Sitemaps
  - replaced Simple Lightbox by https://wordpress.org/plugins/responsive-lightbox/
  - removed maps Widget for Google Maps
  - removed Akismet
  - removed Jetpack
  - removed nrelate Related Content
  - removed Google-Maps-GPX-Viewer
  - installed Disable Feeds plugin (kept main global and comments feed)
  - installed Attachment pages redirect + config wp-config.php
```php
// https://wordpress.org/plugins/attachment-pages-redirect/#description
define( 'ATTACHMENT_REDIRECT_CODE', '301' );
define( 'ORPHAN_ATTACHMENT_REDIRECT_CODE', '301' );
```
- updated site content
  - right sidebar
    - replaced google maps widget by static version

    ```html
    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d22203.054944783646!2d6.8700947086540145!3d45.92366706370978!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sde!4v1575223122786!5m2!1sen!2sde" width="250" height="250" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
    ```

    - removed newsletter subscription
    
    - removed RSS feed
  - menu
    - removed "Contact" and /nous-contacter page
    - removed search form
  - posts and pages
    
    - removed comment form (existing comments preserved)
```mysql
UPDATE `wp_posts` SET `comment_status` = 'closed';
```
- footer
  
    - deleted year in copyright on http://hiiha.fr/wp-admin/themes.php?page=esplanade_options

### 2- Site download (SiteSucker)

- Error log (errors fixed)

```

---------------------

14/12/2019 18:50:15 - ERROR: Download of "https://hiiha.fr/2013/05/01/montage-du-surly-long-haul-trucker-lht/www.wiggle.fr",
	referenced from "https://hiiha.fr/2013/05/01/montage-du-surly-long-haul-trucker-lht/",
	failed with error code -1100 (File does not exist.)
14/12/2019 18:52:00 - ERROR: Download of "https://hiiha.fr/2013/07/30/recit-canada-en-stop-de-calgary-a-prince-rupert/",
	referenced from "https://hiiha.fr/2013/07/10/shit-happens-asi-es-la-vida-cest-la-vie/",
	failed with error code -1100 (File does not exist.)

---------------------

```
### 3- Post download

- generated Firebase rewrites (cf. src/generate_rewrites.js)
- removed `index.html` references
  - replaced `/index.html` by `/` in `**/index.html`  
  - replaced `index.html` by `.` in `**/index.html`  
- removed infinitescroll lib loading
- converted GPX tracks rendering using Leaflet (https://github.com/mpetazzoni/leaflet-gpx)
```php+HTML
<html>
  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.6.0/leaflet.css" />
    <!-- ... -->
  </head>
  <body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.6.0/leaflet.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet-gpx/1.4.0/gpx.min.js"></script>
  </body>
</html>

```

- switched to https

  - replaced `http://hiiha.fr` by `https://hiiha.fr` in `**/index.html`  
  - switched `font.googleapis.com` to https

- removed `,"ajaxurl":"http:\/\/hiiha.fr\/wp-admin\/admin-ajax.php","nonce":"521e6d989e"` from slideshow init configuration

- removed comment-reply script

- removed google plus share links

- fixed mixed content issues

- formatted source (prettier)

  

  

  
