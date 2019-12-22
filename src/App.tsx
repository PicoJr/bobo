import React, { useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Questions from "./Questions";
import Diagnostic from "./Diagnostic";
import DiagnosticProps from "./Diagnostic";

const App: React.FC = () => {

  const [lazy, setLazy] = useState(false);

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Flemme Doc {lazy ? "paresse" : "pas paresse"}
          </Typography>
        </Toolbar>
      </AppBar>
      <Questions setLazy={setLazy}/>
      <Diagnostic lazy={lazy}/>
    </div>
  );
}

export default App;
