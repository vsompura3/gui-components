# Modern CSS with Vite

[PostCSS preset-env](https://preset-env.netlify.app/) layer on top of the
vanilla
[@vite/create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite)

## Getting Started

[use this as a Github template](https://github.com/argyleink/shortstack/generate)

OR

#### Clone Shortstack into a new folder

1. `mkdir new-project-name && cd $_`
1. `git clone --depth=1 https://github.com/vsompura3/dev-shortstack.git . && rm -rf ./.git`

OR (essentially the same thing with npx+degit)

1. `npx degit argyleink/shortstack#main`

#### Install tools and spin it up

1. `npm i`
1. `npm start`

<br><br>

## Development

Running `npm start` runs Browsersync, Rollup and Postcss concurrently, watching
changes to your files in `./app` and refreshes connected browsers.

## Production

Running `npm run build` compiles and minifies your code in `app` and outputs the
optimised result to a folder called `dist` that's ready for static hosting.

Running `npm run production` will build your project and start a server at
`dist`.
