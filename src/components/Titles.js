import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Titles extends Component {
    render() {
        return (
            <div>
                <div>Titles component</div>
                <div><Link to="/titles/title1">title 1</Link></div>
                <div><Link to="/titles/title2">title 2</Link></div>
                <Switch>
                    <Route exact to='/titles/title1' component={Title1}/>
                    <Route exact to='/titles/title2' component={Title2}/>
                </Switch>
            </div>
        )
    }
}

export default Titles;

const Title1 = () => {
    return (
        <div>Title #1</div>
    )
}
const Title2 = () => {
    return (
        <div>Title #2</div>
    )
}