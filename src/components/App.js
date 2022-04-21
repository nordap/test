import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AppShell from './AppShell';
import Home from './Home';

class App extends React.Component {
    render() {
        return (
            <Router>
                <AppShell>
                    <div>
                        <Routes>
                            <Route exact path="/" element={<Home />}></Route>
                        </Routes>
                    </div>
                </AppShell>
            </Router>
        );

    }
}

export default App;