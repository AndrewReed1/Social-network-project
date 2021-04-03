import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import ProfileContainer from './components/Profile/ProfileContainer';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import Setting from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Nav/>
        <div className='content'>
          <Route path='/profile/:userId?' render={ () => <ProfileContainer/> }/>
          <Route path='/dialogs' render={ () => <DialogsContainer/> }/>
          <Route path='/users' render={ () => <UsersContainer/> }/>
          <Route path='/news' render={ () => <News/> }/>
          <Route path='/music' render={ () => <Music/> }/>
          <Route path='/settings' render={ () => <Setting/> }/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
