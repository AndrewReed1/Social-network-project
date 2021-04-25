import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import ProfileHookContainer from './components/Profile/ProfileHookContainer';

// Lazy-loaded components
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Setting = React.lazy(() => import('./components/Settings/Settings'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
        <div className='full-screen'>
          <div className='app-wrapper'>
            <HeaderContainer/>
            <Nav/>
            <div className='content'>
              <div className='content-wrapper'>
                <Route path='/profile/:userId?' render={() => <ProfileHookContainer />} />
                <Route path='/dialogs' render={() => { return <React.Suspense fallback={<div>Loading dialogs...</div>}><DialogsContainer/></React.Suspense>}} />
                <Route path='/users' render={() => <UsersContainer />} />
                <Route path='/news' render={() => { return <React.Suspense fallback={<div>Loading news...</div>}><News/></React.Suspense>}}/>
                <Route path='/music' render={() => { return <React.Suspense fallback={<div>Loading music...</div>}><Music/></React.Suspense>}}/>
                <Route path='/settings' render={() => { return <React.Suspense fallback={<div>Loading settings...</div>}><Setting/></React.Suspense>}}/>
                <Route path='/login' render={() => <Login/>} />
              </div>
            </div>
          </div>
        </div>
    )
  }
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

export default compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);