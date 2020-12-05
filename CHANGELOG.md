# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [[ 1.6.0 ]] - 2020-12-05
### Changed
- Migrate to dart sass from node-sass (see [LibSass is Deprecated](https://sass-lang.com/blog/libsass-is-deprecated))
- Use new [figure shortcode](https://cpbotha.net/2020/05/02/drop-in-replacement-for-hugo-figure-shortcode-with-responsive-img-srcset/a) that automatically processes images in a post's page bundle to multiple resolutions and outputs an appropriate img srcset (falls back to getting images from static dir)

## [[1.5.1]] - 2020-11-15
### Updated
- Minor version bump for bootstrap, node-sass, and fontawesome
- Update to webpack 5 (brings better tree shaking, reduces fontawesome JS by 8K)

### Fixed
- JSON-LD keyword formatting @jeremyrcampb #140

### Added
- Ability to omit date in front matter @jeremyrcampb #141

## [[1.5.0]] - 2020-05-17
### Updated
- i18n language keys for German (#dermellor, #131)
- Boostrap v4.5.0
- Minor version bump for webpack, node-sass, and fontawesome

### Changed
- Use Haven for GDPR-compliant popup instead of cookieconsent, which is now
configured as *opt-in* and does not load Google Analytics or send a hit until
the user agrees.
  - Note to translators that some strings have changed, please check:
    - `cookieAccept`: the string for the "Agree" button
    - `cookieDecline`: the string for the "Disagree" button

## [[1.4.2]] - 2020-03-22
### Fixed
- Encoding of dates in HTML (@alanorth)

## [[1.4.1]] - 2020-03-19
### Updated
- npm dependencies: rtlcss 2.5.0, webpack 4.42.0, fontawesome solid icons 5.12.1

### Fixed
- Fix "Unparsable structured data" error in JSON-LD (@alanorth)

## [[1.4.0]] - 2020-01-28
### Added
- Farsi strings for user interface

### Updated
- bootstrap 4.4.1
- Fix typo in README.md (@xekon, #118)
- Font Awesome 5 (make sure you [update](https://fontawesome.com/how-to-use/on-the-web/setup/upgrading-from-version-4) any custom icons you might be using in your content, site layouts, partials, etc).

### Changed
- Use Hugo's built-in subresource integrity support instead of the generatesri
tooling that I wrote by hand a few years ago (#120, @alanorth)
- Use Font Awesome SVGs via JavaScript instead of web fonts (@alanorth)
- Category and tag links now have a trailing slash (#128, @alanorth)

### Removed
- Several references to Google Plus (@xekon, #122)

## [[1.3.3]] - 2019-12-02
### Fixed
- "Home" link for blogs that are not at the root of the domain (@phofman #115)

### Changed
- Use "posts" instead of "post" in exampleSite to align closer with Hugo quick start docs (@sboots #117)

### Updated
- node-sass 4.13.0 and rtlcss 2.4.1

## [[1.3.2]] - 2019-06-20
### Changed
- Only list "Regular" pages in recent posts in sidebar (@alanorth)
- Use absURL instead of baseURL to be more robust with different site configurations (@TommySprat)
- Quote date in post metadata so it does not get escaped (@TommySprat #111)

## [1.3.1] - 2019-05-05
### Added
- SourceHut CI configuration (@alanorth)

### Updated
- Twitter sharing button (@alanorth)
- Dependencies in package.json (@alanorth)

## [1.3.0] - 2019-04-22
### Added
- Arabic translation (@alanorth)
- Support for RTL CSS (@alanorth)

### Updated
- clean-css-cli 4.3.0

## [1.2.1] - 2019-04-14
### Added
- Dutch translation #107 (@bit33)

### Removed
- Google+ icons #108 (@bit33)

### Updated
- Template functions for Hugo 0.55.0 (@alanorth)

## [1.2.0] - 2019-02-13
### Updated
- Bootstrap v4.3.1
