/**
* Libraries
*/

import React,{
   Component
} from 'react';

import {
   Route
} from 'react-router-dom';

/**
* Components
*/

import TheGameOfLife from './components/TheGameOfLife/theGameOfLife';

/**
* Styles
*/

import './app.scss';

/**
* App component definition and export
*/

export class App extends Component {

   /**
   * Markup
   */

   render(){
      return(
            <div className="app">
               <Route 
                  exact 
                  path="/"
                  component={ TheGameOfLife }
               />
            </div>
      );
   }
}

export default App;
