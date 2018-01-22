# Running Static-Site locally

We are using [harp](http://harpjs.com/) to develop the site. This will automatically precompile our assets for us. This allows us to use .scss and .jade files without having any additional configuration.

To run in your computer we need to use the terminal! We assume that you have *node* installed:

## First time Step
* Install harp ```npm install -g harp```
* Clone this repo ```git clone git@github.com:nfigliozzi/static-site.git```

## To run the site
* Go to your project folder ```cd website```
* Run a local server ```harp server site```

Thats it. Any changes will automatically be updated. No need to restart the server. Go to ```localhost:9000``` in your web browser.

## Compile

* ```harp compile site```
