import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import HomePage from './components/homepage/HomePage';
import SignInPage from "./components/sigin-page/SignInPage";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>

                    <Route exact path={'/'}>
                        <HomePage/>
                    </Route>

                    <Route exact path={'/signin'}>
                        <SignInPage/>
                    </Route>

                </Switch>
            </Router>
        </div>
    );
}

export default App;
