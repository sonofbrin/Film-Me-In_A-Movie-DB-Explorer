# Film Me In! - A Movie DB Explorer

A React front-end for exploring the movie titles hosted on The Movie Database, utilizing the [TMDB API](https://developer.themoviedb.org/docs).

View the current deployment [here](https://sonofbrin.github.io/Film-Me-In_A-Movie-DB-Explorer/)!

![](https://github.com/sonofbrin/Film-Me-In_A-Movie-DB-Explorer/blob/52fb3ec852006fb87f2294383b04a15bc1133b21/public/fmi_screencap1.png)

## Usage

Simply type the name of a movie you're interested in into the `Title` search bar and results will populate automatically! Foreign films whose original names match your search may also appear in the results.

Use the `Prev` and `Next` buttons to navigate through multi-page results.

## How to test the software

The included tests can be run locally by running `npm test` from the project directory, provided that npm is already installed.

## Known issues

* Some images do not upload. A new API call must be introduced to ensure that an available image size is being requested.
* Results card formatting requires further cleaning to ensure robust, consistent display properties for all possible results.
* As a first foray into Jest testing for React components, tests will need to be fleshed out and refined.

## Further development
In the future I would like to expand on this project with the following additions:
* Improved interface layout, perhaps further styling breakpoints for varying viewport sizes.
* Adding a description snippet to the result cards, and allowing them to expand to display further details.
* Enhanced utility through additional filter and sort options, and page jumping.
