# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased
### Fixed
- "Home" link for blogs that are not at the root of the domain (@phofman #115)

### Changed
- Use "posts" instead of "post" in exampleSite to align closer with Hugo quick start docs (@sboots #117)

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
