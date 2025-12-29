# scalingo oauth2-deploy-demo

sample NodeJS application behind [oauth2-proxy](https://oauth2-proxy.github.io/oauth2-proxy/) for scalingo.

use [oauth2-proxy-buildpack](https://github.com/betagouv/oauth2-proxy-buildpack)

## Setup

Choose your OAUTH provider wisely

Add environment variables to your scalingo app:

```sh
# example for github
OAUTH2_PROXY_PROVIDER=github
OAUTH2_PROXY_GITHUB_ORG=betagouv
OAUTH2_PROXY_EMAIL_DOMAINS=*
OAUTH2_PROXY_SCOPE=read:org user:email
# config
OAUTH2_PROXY_BANNER=private access
OAUTH2_PROXY_COOKIE_DOMAINS=$HOSTNAME
OAUTH2_PROXY_COOKIE_SECURE=true
OAUTH2_PROXY_CUSTOM_SIGN_IN_LOGO=https://avatars.githubusercontent.com/u/7874148?s=200&v=4
OAUTH2_PROXY_FOOTER=powered by oauth2-proxy
OAUTH2_PROXY_REDIRECT_URL=$HOSTNAME/oauth2/callback
OAUTH2_PROXY_REVERSE_PROXY=false
OAUTH2_PROXY_SET_AUTHORIZATION_HEADER=true
OAUTH2_PROXY_SET_XAUTHREQUEST=true
OAUTH2_PROXY_SKIP_PROVIDER_BUTTON=false
# secrets
OAUTH2_PROXY_CLIENT_ID=[oauth provider client ID]
OAUTH2_PROXY_CLIENT_SECRET=[oauth provider client secret]
OAUTH2_PROXY_COOKIE_SECRET=[instance specific cookie secret]
```

and any other [oauth2-proxy](https://oauth2-proxy.github.io/oauth2-proxy/configuration/overview?_highlight=variables#environment-variables) configuration.

tips: see [this page](https://oauth2-proxy.github.io/oauth2-proxy/configuration/overview?_highlight=cookie#generating-a-cookie-secret) to generate the cookie secret.
