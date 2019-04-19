# Social Feed React App

> 

[![NPM](https://img.shields.io/npm/v/social-feed-app.svg)](https://www.npmjs.com/package/social-feed-app) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Description 

Widget renders N last social posts from JSON feed. The widget pull updates from the feed with the given interval and update the display list by removing old items and displaying the new ones.

## Install

```bash
npm install --save social-feed-app
```

## Usage

```tsx
import * as React from 'react';

import SocialPosts from 'social-feed-app';


class Example extends React.Component {
  render () {
    return (
      <SocialPosts limit={5} network="twitter" interval={1000} />
    )
  }
}
```

## Properties

* `limit` Number of posts to display
* `network` Includes entities from a specified social network only
* `interval` Update interval

## License

MIT © [vasaeps3](https://github.com/vasaeps3)
