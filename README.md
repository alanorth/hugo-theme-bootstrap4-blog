# Hugo Bootstrap v4
A simple [Hugo](https://gohugo.io) theme based on the [Bootstrap v4 blog example](http://v4-alpha.getbootstrap.com/examples/blog). Still a work in progress.

![Screenshot](/screenshot@2x.png?raw=true "Screenshot")

## Usage
Clone the repository to your site's `themes` directory.

## Building (For Developers)
This theme uses the [Bootstrap](https://getbootstrap.com/) framework. A static version of this is already included, but if you want to bump the version, tweak the style, etc, you'll need to rebuild the assets. Make sure you have NodeJS v4 or v6 installed, and then run the following from inside the theme's directory:

```
$ npm install
$ npm run build
```

## TODO

- tags + categories!
- add an exampleSite showing optional and mandatory configuration options
- allow configuration of header nav links
- add metadata for open graph
- add optional social links to sidebar
- add configurable license notice for footer
- add favicon
- add meta description / summary from front matter
- add author page (for when you click author name in a post/summary)

## License
This repository contains the code of [Bootstrap](http://getbootstrap.com), which is licensed under the [MIT license](https://tldrlegal.com/license/mit-license).

Otherwise, the contents are [GPLv3](https://www.gnu.org/licenses/gpl-3.0.txt).
