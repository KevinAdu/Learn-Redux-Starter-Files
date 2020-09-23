import React from 'react';
import Photo from './Photo';

const Single = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => <Photo {...this.props} post={post} key={i} i={i}/>)}
      </div>
    )
  }
});

export default Single;