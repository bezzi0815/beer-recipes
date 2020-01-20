import React from 'react';

import Header from './Header/Header';
import Menu from './Header/Menu/Menu';
import RecipeList from './Recipes/RecipeList/RecipeList';
import Stock from './Stock/Stock';

import './App.scss';
import '../../node_modules/bootstrap/scss/bootstrap.scss';
//<Menu></Menu>
function App() {
  return (
    <div>
      <Header>
        <Menu></Menu>
      </Header>

      <div className="container-fluid">
        <div className="container">
          <main className="row">
            <div className="col"><RecipeList></RecipeList></div>
            <div className="col"><Stock></Stock></div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
