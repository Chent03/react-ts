import * as React from 'react';

const initialState = { term: "" }
type State = Readonly<typeof initialState>
type Props = {
    onSearchTermChange: any
}

export class SearchBar extends React.Component<Props, State> {
    readonly state: State = initialState;
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term} 
                    onChange={(event) => this.onInputChange(event.target.value) } 
                />
            </div>
        )
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}