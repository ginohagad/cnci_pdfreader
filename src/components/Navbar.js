import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './Home'
import Books from './Books'


const Navbar = () => {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <Link to={'/'} className="navbar-brand"><img id="logo" src="logo.png" />CNCI Wellington</Link>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/books'} className="nav-link">Books </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path="/books" component={Books} />
                <Route render={() => <h1>404: Page Not Found</h1>} />
            </Switch>
        </Router>
    )
}



export default Navbar