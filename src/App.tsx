import "./App.css";
import React from 'react';
import CostCalculator from './CostCalculator';

const App: React.FC = () => {
  return <CostCalculator priceOfSingleVMPerHour={0.5} />;
};

export default App;
