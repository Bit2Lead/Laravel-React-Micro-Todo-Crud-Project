import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import Insert from '../crud/Insert';
import Show from '../crud/Show';
import Edit from '../crud/Edit';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';


class Index extends React.Component {
    render(){
        return (
            <Router>
                <>
                <Header />
                <div className="text-center">
                    <h4> Micro CRUD Operation.</h4><hr/>
                </div>
                <Switch>
                    <Route exact path="/insert" component={Insert} />
                    <Route exact path="/list" component={Show} />
                    <Route exact path="/edit/:id" component={Edit} />
                </Switch>
                <Footer />
                </>
            </Router>
        );
    }
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
