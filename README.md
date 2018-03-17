# Hugo Bootstrap v4 Blog [![Build Status](https://travis-ci.org/alanorth/hugo-theme-bootstrap4-blog.svg?branch=master)](https://travis-ci.org/alanorth/hugo-theme-bootstrap4-blog)
A simple but opinionated [Hugo](https://gohugo.io) theme geared towards blog-style content. Based on the older two-column [Bootstrap blog example](https://v4-alpha.getbootstrap.com/examples/blog/) that was used for several Bootstrap versions, but has now been retired in favor of a "snarky" (their words) new example as of version [4.0.0's final release](https://blog.getbootstrap.com/2018/01/18/bootstrap-4/).

![Screenshot](https://raw.githubusercontent.com/alanorth/hugo-theme-bootstrap4-blog/master/screenshot.png "Screenshot")

See [picturingjordan.com](https://picturingjordan.com) for an example of this theme in use.

## Features

- Responsive design
- Uses Bootstrap v4's [native system font stack](https://getbootstrap.com/docs/4.0/content/reboot/#native-font-stack) to load quickly and look good on all platforms
- Excellent [structured data](https://developers.google.com/search/docs/guides/intro-structured-data) (JSON-LD), [OpenGraph](http://ogp.me), and [Twitter Card](https://dev.twitter.com/cards/types) metadata support
- robots.txt linking to XML sitemap (disabled by default, see [Hugo docs](https://gohugo.io/extras/robots-txt/))
- Basic support for [multi-lingual content](https://gohugo.io/content-management/multilingual/) (added in Hugo 0.17) and user interface translation (i18n)
- Supports Google, Bing, and Yandex site verification via meta tags
- Supports Google Analytics (async version), see [Hugo docs](https://gohugo.io/extras/analytics/)
- Supports Disqus comments, see [Hugo docs](https://gohugo.io/extras/comments/)
- Can show a message about cookie usage to the user, see [`exampleSite/config.toml`](https://github.com/alanorth/hugo-theme-bootstrap4-blog/blob/master/exampleSite/config.toml)
- Allow addition of custom `<head>` code in site's `layouts/partial/head-custom.html` (see [#17](https://github.com/alanorth/hugo-theme-bootstrap4-blog/pull/17))
- Configurable display of summaries of content in list templates.
- configurable keywords for every post

## Usage
Clone the repository to your site's `themes` directory. Refer to [`exampleSite/config.toml`](https://github.com/alanorth/hugo-theme-bootstrap4-blog/blob/master/exampleSite/config.toml) for recommended configuration values.

## Content Suggestions
A few suggestions to help you get a good looking site quickly:

- Keep blog posts in the `content/posts` directory, for example: `content/posts/my-first-post.md`
- Keep static pages in the `content` directory, for example: `content/about.md`
- Keep media like images in the `static` directory, for example: `static/2016/10/screenshot.png`
- If you want an image to be shown when you share a post on social media, specify at least one image in the post's front matter, for example: `images: ["/2016/10/screenshot.png"]`
- Use the `<!--more-->` tag in posts to control how much of a post is shown on summary pages
- Disable comments on a post by setting `comments = false` in its frontmatter
- Disable social sharing icons site wide (or on individual pages/posts) by setting `sharingicons = false`
- If your content is stored in git, add `enableGitInfo = true` to your site config and Hugo will use git history to set a more accurate modification date in page metadata

See the source code and structure of [picturingjordan.com](https://github.com/alanorth/picturingjordan.com) to get more ideas.

## Building (For Developers)
This theme uses the [Bootstrap](https://getbootstrap.com/) framework. A static version of this is already included, but if you want to bump the version, tweak the style, etc, you'll need to rebuild the assets. Make sure you have NodeJS >= v6 installed, and then run the following from inside the theme's directory:

```console
$ npm install
$ npm run build
```

## Contributing
There are several ways to help with the development of the theme:

- [Open an issue](https://github.com/alanorth/hugo-theme-bootstrap4-blog/issues/new) on GitHub if you have problems or feature requests
- Alternatively, tackle one of the [existing issues](https://github.com/alanorth/hugo-theme-bootstrap4-blog/issues) on the issue tracker
- Fork [the repository](https://github.com/alanorth/hugo-theme-bootstrap4-blog) on GitHub, add features on a "feature" branch like `update-bootstrap`, and then send a [pull request](https://github.com/alanorth/hugo-theme-bootstrap4-blog/compare) with your changes

## License
This repository contains the code of [Bootstrap](http://getbootstrap.com), which is licensed under the [MIT license](https://tldrlegal.com/license/mit-license), and [Font Awesome](http://fontawesome.io/), which uses [various licenses](http://fontawesome.io/license/).

Otherwise, the contents are [GPLv3](https://www.gnu.org/licenses/gpl-3.0.txt).
