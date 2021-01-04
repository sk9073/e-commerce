import React from 'react';
import {Switch,Route} from 'react-router-dom';

import './App.css';
import HomePage from '../../book/src/pages/homepage/hompage'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import {auth} from './firebase/firebase';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      currentUser : null
    }
  }
  unsusbcribeFromAuth = null;

  componentDidMount(){
    this.unsusbcribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({currentUser:user});
    })
  }

  componentWillUnmount(){
    this.unsusbcribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header currentUser = {this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
        
      </div>
    );
  }

}

export default App;
