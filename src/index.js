// Create a component. This component should produce some HTML

import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyD2JD-HH2L1muyuk3l9pwuv4dp2YtwfzwY";

const App =  () => {
    return <div>
        <SearchBar />
    </div>;
}


// Take this component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));