import React, { Component } from 'react'
import VideoItem from './VideoItem'

export class VideoList extends Component {
   
    render() {
        const {videos} = this.props;
        if(videos.length>0){
           const renderList = videos.map((video) =>{
                return <><VideoItem video={video}/></>
            });

        return (
            <div>
                {renderList}
            </div>
            );
        }
        else{
            return (
                <div>
                </div>
                );
        }
    }
}

export default VideoList
