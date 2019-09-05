import React, { Component } from 'react'

export class VideoItem extends Component {
  
  render() {
    const {video,onVideoSelect} = this.props;

    return (
        <div className="ui items">
            <div className="item">
                <div className="image">
                <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                </div>
                <div className="content">
                    <label className="header" style={{cursor:'pointer'}} onClick={()=>{onVideoSelect(video)}}>
                        {video.snippet.title}
                    </label>
                    <div className="meta">
                        <span>{video.snippet.channelTitle}</span>
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
