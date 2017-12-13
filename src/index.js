// Create a component. This component should produce some HTML

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyD2JD-HH2L1muyuk3l9pwuv4dp2YtwfzwY";



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        YTSearch({
            key: API_KEY,
            term: 'surfboards'
        }, (videos) => {
            this.setState({ videos, selectedVideo: videos[0] });
        });
    }
    render() {
        return <div>
            <SearchBar />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
        </div>;
    }
}


// Take this component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));