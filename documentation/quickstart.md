---
layout: page
title: Quickstart
description: A quickstart guide to getting started with rainboot.css
---

## Step 1. Download CSS and JS files

Create or choose a folder to be your workspace.

Go to the [rainboot.css releases
page](https://github.com/rainboot/rainboot.css/releases) and download
`rainboot.css` (or `rainboot.min.css`) from the latest release and put it in
your workspace.

Go to the [Bootstrap releases page](https://github.com/twbs/bootstrap/releases)
and download `bootstrap-<VERSION>-dist.zip` where `<VERSION>` corresponds to the
Bootstrap version from the `rainboot.css` file. You can find the appropriate
Bootstrap version by opening the `rainboot.css` file and searching for the legal
comment.

Unzip the Bootstrap dist and copy the
`bootstrap-<VERSION>-dist/js/bootstrap.bundle.min.js` file into your workspace.

## Step 2. Create `index.html` and include CSS and JS files

Inside your workspace, create `index.html` and add the following code. This will
create a basic page using Bootstrap with the rainboot.css theme.

```html
<!DOCTYPE html>
<html>
  <head>
    <link href="rainboot.css" rel="stylesheet" />
    <script src="bootstrap.bundle.min.js"></script>
    <title>Quickstart</title>
  </head>
  <body>
    <div class="btn btn-primary">Hello, world!</div>
  </body>
</html>
```

## Step 3. Open in the browser

Open your `index.html` in a web browser of your choice. You should now see a
rainboot.css styled button.