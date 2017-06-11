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
