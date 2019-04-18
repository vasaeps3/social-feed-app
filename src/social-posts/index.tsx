import * as React from 'react';

import '../styles/social-posts.scss';
import { IPost } from '../common/interfaces';
import { getPosts } from '../common/service';


const Post: React.FunctionComponent<IPost> = React.memo((props) => (
  <div className="test">
    <div className="post-card-header">
      <div className="post-card-user-name">{props.userName}</div>
      <div className="post-card-date">{props.createdAt ? props.createdAt.toLocaleString() : null}</div>
    </div>
    <div className="post-card-content">{props.message}</div>
  </div>
));

interface ISocialPostsProps {
  limit: number;
  network: 'twitter' | 'facebook' | 'instagram' | 'google_plus' | ' rss';
  interval: number;
}

interface ISocialPostsState {
  posts: IPost[];
}

export default class SocialPosts extends React.Component<ISocialPostsProps, ISocialPostsState> {
  state = { posts: [] };

  private intervalId!: NodeJS.Timeout;

  private async updateSocialPosts(): Promise<void> {
    const posts = await getPosts(this.props.limit, this.props.network);
    this.setState({ posts });
  }

  public componentDidMount() {
    this.updateSocialPosts();

    this.intervalId = setInterval(() => {
      this.updateSocialPosts();
    }, this.props.interval || 10000);
  }

  public componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  private get posts(): Array<JSX.Element> | JSX.Element {
    if (!this.state.posts.length) {
      return (<div className="empty-data"></div>);
    }

    return this.state.posts.map((post: IPost) => <Post key={post.id} {...post} />);
  }

  public render() {
    return (
      <div className="social-posts">
        {this.posts}
      </div>
    );
  }
}