import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import ProfileContainer from './components/Profile/ProfileContainer';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import Setting from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
}

  render () {
    if (!this.props.initialized) {
      return <Preloader/>
    }

    return (
        <div className='full-screen'>
          <div className='app-wrapper'>
            <HeaderContainer/>
            <Nav/>
            <div className='content'>
              <div className='content-wrapper'>
                <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                <Route path='/dialogs' render={() => <DialogsContainer />} />
                <Route path='/users' render={() => <UsersContainer />} />
                <Route path='/news' render={() => <News />} />
                <Route path='/music' render={() => <Music />} />
                <Route path='/settings' render={() => <Setting />} />
                <Route path='/login' render={() => <Login/>} />
              </div>
            </div>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);