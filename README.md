# scalingo oauth2-deploy-demo

sample NodeJS application behind [oauth2-proxy](https://oauth2-proxy.github.io/oauth2-proxy/) for scalingo.

## Setup

Adapt [scalingo.json](./scalingo.json) to your needs.

Add environment variables to your scalingo app:

| name                       | value                                   |
| -------------------------- | --------------------------------------- |
| OAUTH2_PROXY_CLIENT_ID     | oauth provider                          |
| OAUTH2_PROXY_CLIENT_SECRET | oauth provider client secret            |
| OAUTH2_PROXY_COOKIE_SECRET | instance specific 44chars cookie secret |

and any other [oauth2-proxy](https://oauth2-proxy.github.io/oauth2-proxy/configuration/overview?_highlight=variables#environment-variables) configuration.

the [scalingo.json](./scalingo.json) file provide default variables for our organisation.
