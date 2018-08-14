import * as React from "react";
import * as YTSearch from "youtube-api-search";

import { SearchBar } from "./Searchbar";
import { VideoList } from "./Video_list";

const API_KEY = "";
const initialState = { videos: [] }
type State = Readonly<typeof initialState>

export class App extends React.Component<object, State> {
    readonly state: State = initialState
    constructor(props) {
        super(props);
        
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos })
            console.log(this.state)
        })
    }

    render() {
        return (
            <div>
            <SearchBar />
            <VideoList videos={this.state.videos} />
            </div>
        )
    }
}