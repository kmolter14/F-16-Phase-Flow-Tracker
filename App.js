import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import InspectionForm from './components/InspectionForm';
import InspectionTable from './components/InspectionTable';
import InspectionList from './components/InspectionList';
import F16Silhouette from './F16Silhouette';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> 
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/inspection-form" element={<InspectionForm />} />
            <Route path="/inspection-table" element={<InspectionTable />} />
            <Route path="/inspection-list" element={<InspectionList />} />
            <Route path="/F16-Silhouette" element={<F16Silhouette />} />
          </Routes>
        </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
