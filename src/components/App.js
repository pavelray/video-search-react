import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from './Youtube';
import VideoList from './VideoList';

export class App extends Component {

    state = {
        videos: []
    }

   onSubmit = async term =>{
       const response = await youtube.get('/search',{
           params:{
               q : term
           }
       });
       console.log(response.data.items);
       this.setState({videos:response.data.items});
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
            <div className="eight wide column"></div>
            <div className="eight wide column">
                <VideoList videos={this.state.videos}/>
            </div>
        </div>
      </div>
    )
  }
}

export default App
