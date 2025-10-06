import React, { useState } from 'react';

interface CostCalculatorProps {
  priceOfSingleVMPerHour: number;
}

const CostCalculator: React.FC<CostCalculatorProps> = ({ priceOfSingleVMPerHour }) => {
  const [vmCount, setVmCount] = useState<number>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const parsed = parseInt(input, 10);
    if (!isNaN(parsed)) {
      setVmCount(parsed);
    } else {
      setVmCount(0);
    }
  };

  const costPerHour = vmCount * priceOfSingleVMPerHour;
  const costPerDay = costPerHour * 24;
  const costPerMonth = costPerDay * 30;
  const costPerYear = costPerHour * 8760;

  return (
    <>
      <h1>VM Cost Calculator</h1>
      <label htmlFor="vmNumber">Number of VMs</label>
      <input
        type="text"
        id="vmNumber"
        placeholder="Number of VMs"
        value={vmCount}
        onChange={handleInputChange}
      />
      <div>
        <p>Cost per hour: {costPerHour}</p>
        <p>Cost per day: {costPerDay}</p>
        <p>Cost per month: {costPerMonth}</p>
        <p>Cost per year: {costPerYear}</p>
      </div>
    </>
  );
};

export default CostCalculator;
