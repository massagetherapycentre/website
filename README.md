# Getting started

```bash
# Install all the dependencies
yarn

# Fix a permissions error in `next@3.0.0-beta12`
# https://github.com/zeit/next.js/issues/2228
chmod -R u+x node_modules/next/dist/bin

# Run the dev server
yarn dev
```

# Deploying

```bash
# 1. Build the static site
yarn build

# 2. Serve built site locally to test everything works
yarn serve

# 3. Commit the new built files in the ./out directory
git add out && git commit -m 'New build'

# 4. Deploy to gh-pages
yarn deploy

# 5. View deployed site: https://massagetherapycentre.github.io/website/
```

# Issues

CNAME file was added to origin gh-pages but not into master so I was getting the following error:
`Updates were rejected because a pushed branch tip is behind its remote counterpart.`

```bash
# Split out directory into its own branch so it can be force pushed
git push origin `git subtree split --prefix out gh`:gh-pages --force
```
