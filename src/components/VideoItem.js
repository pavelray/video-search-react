import React, { Component } from 'react'

export class VideoItem extends Component {
  
  render() {
    const video = this.props.video;

    return (
        <div className="ui items">
            <div className="item">
                <div className="image">
                <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                </div>
                <div className="content">
                <a className="header" href="http://googole.com/">{video.snippet.title}</a>
                <div className="meta">
                    <span>{video.snippet.channelTitle}</span>
                </div>
                <div className="description">
                    <p>{video.snippet.description}</p>
                </div>
                <div className="extra">
                    
                </div>
                </div>
            </div>
        </div>
    )
  }
}

export default VideoItem
