import React, { Component } from 'react'

export class VideoDetails extends Component {
  render() {
    const {video} = this.props;
    if(video !== null){
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
        return (
        <>
            <div className="ui embed">
                <iframe src={videoSrc} title="video player"></iframe>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <div className="ui description">
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        </>
        );
    }
    return <></>;
  }
}

export default VideoDetails
