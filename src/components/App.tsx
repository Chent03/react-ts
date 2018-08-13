import * as React from "react";
import { SearchBar } from "./Searchbar";

export class App extends React.Component<IProps, IState> {
    render() {
        return (
            <div>
            <SearchBar />
            <h1>Hello There, {this.props.name}</h1>
            </div>
        )
    }
}

interface IProps {
    name: string;
}

interface IState {}