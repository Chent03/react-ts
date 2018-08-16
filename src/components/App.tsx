import * as React from "react";
import * as YTSearch from "youtube-api-search";
import * as _ from "lodash";

import { SearchBar } from "./Searchbar";
import { VideoList } from "./Video_list";
import { VideoDetail } from "./Video_details";

const API_KEY = "";
const initialState = { 
    videos: [],
    selectedVideo: null
 }
type State = Readonly<typeof initialState>

export class App extends React.Component<object, State> {
    readonly state: State = initialState
    constructor(props) {
        super(props);

        this.videoSearch('surfboards');
        
    }

    videoSearch(term: string) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
             });
        })
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)
        return (
            <div>
            <SearchBar 
                onSearchTermChange={videoSearch}
            />
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} />
            </div>
        )
    }
}