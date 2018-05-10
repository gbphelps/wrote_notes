import React from 'react';
import { Provider } from 'react-redux';
import Login from './session_components/login_form_container';
import Signup from './session_components/signup_form_container';
import { AuthRoute } from '../utils/login_route';
import { ProtectedRoute } from '../utils/protected_route';
import NavBar from './main/navbar';
import NotesPane from './main/notes_pane';
import CreateNote from './text_editor/create_note'

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


export const App = () => {

  return (
    <div className='app'>
      <ProtectedRoute
        path='/'
        exact={true}
        component={NavBar}/>
      <ProtectedRoute
        path='/'
        exact={true}
        component={NotesPane}/>
        <ProtectedRoute
          path='/'
          exact={true}
          component={CreateNote}/>
      <AuthRoute
        component = {Signup}
        path = '/signup'
        exact = {true} />
      <AuthRoute
        component = {Login}
        path = '/login'
        exact = {true} />
    </div>
  );
};
