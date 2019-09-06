import React, { Component } from 'react'
import VideoItem from './VideoItem'

export class VideoList extends Component {
   
    render() {
        const {videos, onVideoSelect} = this.props;
        if(videos.length>0){
           const renderList = videos.map((video) =>{
                return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}/>
            });

        return (<>{renderList}</>);
        }
        else{
            return (<></>);
        }
    }
}

export default VideoList
