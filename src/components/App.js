import React from 'react';

class App extends React.Component {
    render() {
        return (
            <Router>
                <AppShell>
                    <div>
                        <Route exact path="/" component={Home} />
                    </div>
                </AppShell>
            </Router>
        );

    }
}

export default App;