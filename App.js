import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import InspectionForm from './InspectionForm';
import InspectionTable from './InspectionTable';
import InspectionList from './InspectionList';
import F16Silhouette from './F16Silhouette';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const inspections = [
    { id: 1, jetId: 'FJ-123', inspector: 'John Doe', date: '2023-04-14' },
    { id: 2, jetId: 'FJ-234', inspector: 'Jane Smith', date: '2023-04-13' },
  ];

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> 
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/inspection-form" element={<InspectionForm />} />
            <Route
              path="/inspection-table"
              element={<InspectionTable inspections={inspections} />}
            />
            <Route
              path="/inspection-list"
              element={<InspectionList inspections={inspections} />}
            />
            <Route path="/F16-Silhouette" element={<F16Silhouette />} />
          </Routes>
        </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
