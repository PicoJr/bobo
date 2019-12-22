import React, { useState } from 'react';
import './App.css';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Questions from "./Questions";
import Diagnostic from "./Diagnostic";
import Summary from "./Summary";

const App: React.FC = () => {

  const [bobo, setBobo] = useState(false);

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Bobo?
          </Typography>
        </Toolbar>
      </AppBar>
      <Questions setBobo={setBobo}/>
      <Summary bobo={bobo}/>
      <Diagnostic bobo={bobo}/>
    </div>
  );
}

export default App;
