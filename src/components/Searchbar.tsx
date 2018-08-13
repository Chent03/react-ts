import * as React from 'react';

const initialState = { term: "" }
type State = Readonly<typeof initialState>

export class SearchBar extends React.Component<object, State> {
    readonly state: State = initialState
    render() {
        return (
            <div>
                <input
                    value={this.state.term} 
                    onChange={(event) => this.setState({term: event.target.value})} 
                />
            </div>
        )
    }
}