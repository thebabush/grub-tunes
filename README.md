# GRUB Tunes

> GRUB init tune repository.

## Demo

[GRUB Tunes](https://kenoph.github.io/grub-tunes/)

You can preview the tunes and hear what they sound like without having to reboot every time.

## Add a tune

Tunes are stored inside `src/components/tunes.json`. In order to add a tune
you can edit the file and make a pull request. (Note: please keep the file
ordered by song title).

## Tune format

The format of GRUB init tunes is pretty simple:

`<bpm> <note frequency> <duration> <note frequency> <duration> ...`

where all the values are integers.

## Build Setup

This app uses `vue.js` with the webpack template.

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

