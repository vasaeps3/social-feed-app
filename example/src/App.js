import React, { Component } from 'react';

import SocialPosts from 'social-feed';

export default class App extends Component {
  render() {
    return (
      <div>
        <SocialPosts limit={2} network="twitter" interval={1000} />
      </div>
    )
  }
}
