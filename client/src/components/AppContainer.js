import React, { Component } from 'react';
import { getItems } from '../services/items';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
import Routes from '../routes'
import SignUp from '../screens/SignUp';
// import Navbar from '../layouts/Navbar';
import Header from '../screens/Header';
import SignIn from '../screens/SignIn';
<<<<<<< HEAD
// import { Route } from 'react-router-dom';

export class AppContainer extends Component {
=======
import { verifyToken } from '../services/auth'
import { verifyUser } from '../services/auth'

class AppContainer extends Component {
>>>>>>> afe18ac3f871fb5e50d03234a062054c66694b5f
  constructor() {
    super();
    this.state = {
      user: null,
      items: []
    }
  }

<<<<<<< HEAD
  async componentDidMount() {
    try {
      const items = await getItems()
      this.setState({ items })
    } catch (err) {
      console.error(err)
=======
  async componentDidMount() { 
    const user = await verifyToken();
    if (user) {
      this.setState({ user })
      const items = await getItems()
      this.setState({ items })
>>>>>>> afe18ac3f871fb5e50d03234a062054c66694b5f
    }
  }

  addItem = item => this.setState({ items: [...this.state.items, item] })

<<<<<<< HEAD
  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })
=======
  deleteItemFromList = itemId => this.setState(prevState => ({
    items: prevState.items.filter(item =>
      item._id !== itemId
    )
  }))

  setUser = async user => {
    const items = await getItems()
    this.setState({ user, items })
  }

  clearUser = () => this.setState({ user: null, items: [] })
>>>>>>> afe18ac3f871fb5e50d03234a062054c66694b5f

  render() {
    const { user, items } = this.state
    return (
      <div>
        <Header user={user} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Routes
            items={items}
            user={user}
            setUser={this.setUser}
            addItem={this.addItem}
            clearUser={this.clearUser}
<<<<<<< HEAD
=======
            deleteItemFromList={this.deleteItemFromList}
>>>>>>> afe18ac3f871fb5e50d03234a062054c66694b5f
          />
        </Switch>
      </div>
    )
  }
}

export default AppContainer;
