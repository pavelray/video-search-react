import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from './Youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

export class App extends Component {

    state = {
        videos: [],
        selectedVideo : null
    }

   onSubmit = async term =>{
       const response = await youtube.get('/search',{
           params:{
               q : term
           }
       });
       this.setState({videos:response.data.items});
   }

    onVideoSelect = (video) =>{
        this.setState({selectedVideo:video});
    }
    
  render() {
    return (
      <div className="ui container">
         <div className="ui grid">
            <div className="sixteen wide column">
                <div className="ui clearing segment" style={{marginTop:40}}>
                    <SearchBar onSubmit={this.onSubmit}/>
                </div>
            </div>
            <div className="eight wide column">
                <VideoDetails video={this.state.selectedVideo}/>
            </div>
            <div className="eight wide column">
                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
            </div>
        </div>
      </div>
    )
  }
}

export default App
