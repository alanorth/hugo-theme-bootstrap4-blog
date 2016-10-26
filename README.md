# Hugo Bootstrap v4 Blog
A simple [Hugo](https://gohugo.io) theme based on the [Bootstrap v4 blog example](http://v4-alpha.getbootstrap.com/examples/blog).

![Screenshot](https://raw.githubusercontent.com/alanorth/hugo-theme-bootstrap4-blog/master/screenshot@2x.png "Screenshot")

See [picturingjordan.com](https://picturingjordan.com) for an example of this theme in use.

## Features

- Responsive design
- Uses Bootstrap v4's [native system fonts](http://v4-alpha.getbootstrap.com/content/reboot/#native-font-stack) to load quickly and look good on all platforms
- Basic [OpenGraph](http://ogp.me) and [Twitter Card](https://dev.twitter.com/cards/types) metadata support
- robots.txt linking to XML sitemap (disabled by default, see [Hugo docs](https://gohugo.io/extras/robots-txt/))
- Basic support for [multi-lingual content](https://github.com/spf13/hugo/blob/master/docs/content/content/multilingual.md) (added in Hugo 0.17)
- Supports Google, Bing, and Yandex site verification via meta tags
- Supports Google Analytics (async version), see [Hugo docs](https://gohugo.io/extras/analytics/)

## Usage
Clone the repository to your site's `themes` directory. Refer to [`exampleSite/config.toml`](https://github.com/alanorth/hugo-theme-bootstrap4-blog/blob/master/exampleSite/config.toml) for optional configuration values.

## Content Suggestions
A few suggestions to help you get a good looking site quickly:

- Keep blog posts in the `content/post` directory, for example: `content/post/my-first-post.md`
- Keep static pages in the `content` directory, for example: `content/about.md`
- Keep media like images in the `static` directory, for example: `static/2016/10/screenshot.png`
- If you want an image to be shown when you share a post on social media, specify at least one image in the post's front matter, for example: `images: ["/2016/10/screenshot.png"]`
- Use the `<!--more-->` tag in posts to control how much of a post is shown on summary pages

See the source code and structure of [picturingjordan.com](https://github.com/alanorth/picturingjordan.com) to get more ideas.

## Building (For Developers)
This theme uses the [Bootstrap](https://getbootstrap.com/) framework. A static version of this is already included, but if you want to bump the version, tweak the style, etc, you'll need to rebuild the assets. Make sure you have NodeJS v4 or v6 installed, and then run the following from inside the theme's directory:

```
$ npm install
$ npm run build
```

## TODO

- add optional social links to sidebar
- add favicon (user can place one in static dir, but theme could handle this better for modern devices)
- add author page (for when you click author name in a post/summary) [#2](https://github.com/alanorth/hugo-theme-bootstrap4-blog/issues/2)
- add images to sitemap? https://gohugo.io/templates/sitemap/
- add support for Disqus (I don't use it!)
- test multilingual stuff like menus, probably need more absURL/relURL fixes (see [Hugo docs](https://github.com/spf13/hugo/blob/master/docs/content/content/multilingual.md))
- make sidebar optional (works, but need to adjust CSS to make main content responsive)

## License
This repository contains the code of [Bootstrap](http://getbootstrap.com), which is licensed under the [MIT license](https://tldrlegal.com/license/mit-license), and [Font Awesome](http://fontawesome.io/), which uses [various licenses](http://fontawesome.io/license/).

Otherwise, the contents are [GPLv3](https://www.gnu.org/licenses/gpl-3.0.txt).
