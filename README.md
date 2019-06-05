# RDC FinTech blogs

RDC static website hosting technical articles, tools and opinions.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

In order to develop / test, you need the following tools installed:

* [Node](https://www.dyclassroom.com/howto-mac/how-to-install-nodejs-and-npm-on-mac-using-homebrew) >= 8.12
* [Docker](https://docs.docker.com/docker-for-mac/install/) (optional)
* [Cloud Foundry CLI](https://docs.cloudfoundry.org/cf-cli/install-go-cli.html#pkg-mac) (optional)
* [Kubernetes CLI](https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-on-macos) (optional)
* [GNU Make](http://osxdaily.com/2014/02/12/install-command-line-tools-mac-os-x/) 3.8 or higher

### Installing

You need to setup Vuepress (globally) on your machine:

* Vuepress

~~~bash
# Verify Node version
$ node --version
v8.12.0

# Install vuepress
$ yarn global add vuepress
~~~

Once installed, you can start the development server using:

~~~bash
# Start the development server locally
$ yarn docs:dev
~~~

...and navigate with your browser to the link presented after the build completes - each time you update / add content (Markdown files), the site will be rebuild and your browser will be refreshed automatically.

### And coding style tests

All documents should respect the Markdown language (install a linter in your studio), the following [Vuepress Markdown extensions](https://vuepress.vuejs.org/guide/markdown.html) and [Vuepress enhanced Examples](http://vuepress-enhanced-examples.surge.sh/#overview) can be used.

## Built With

* Static HTML
* Docker

### Generate static HTML

~~~bash
# Generate the static HTML under dist/
$ yarn docs:build
~~~

### Build Docker with NGinx bundled

~~~bash
# Build the Docker locally
#  -- see output how to run this Docker on your machine
$ make image

# Push Docker to the Docker Registry
$ make push
~~~

## Deployment

You have 3 choices:

1. Copy static HTML to your webserver
1. Push static HTML to Cloud Foundry
1. Deploy static HTML with bundled NGinx to Kubernetes

### Webserver

Just copy the HTML under the `dist/` directory to your webserver and you should be good to go.

### Cloud Foundry

Login to your Cloud Foundry account via the CLI and run the following commands:

~~~bash
# Set some variables, change to your deployment
$ APP_NAME=rdc-fintech-blogs
$ CF_DOMAIN=cfapps.io

# Push the web static content to Cloud Foundry
$ cf push $APP_NAME -d $CF_DOMAIN -n $APP_NAME -s cflinuxfs3 -p ./dist
~~~

### Kubernetes

Login to your Kubernetes account via the CLI and run the following commands:

~~~bash
# Set some variables, change to your deployment
$ APP_NAME=rdc-fintech-blogs

# Push the web static content to Kubernetes
$ kubectl create deployment $APP_NAME --image=rdclda/fintech-blogs-webserver

# Expose the webserver with a service
$ kubectl create service nodeport $APP_NAME --tcp=80:80
~~~

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/rdc-lda/fintech-blogs/tags).

## Authors

* **Robin Huiser** - *Initial work* - [robinhuiser](https://github.com/robinhuiser)

See also the list of [contributors](CONTRIBUTORS.md) who participated in this project.

## License

This project is licensed under the Apache License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Thanks to Balamurali from Intellect Design pointing out the Vuepress framework!