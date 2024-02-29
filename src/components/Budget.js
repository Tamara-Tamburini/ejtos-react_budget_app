import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, remaining, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (event) => {
    
    if (event.target.value > budget) {
      alert("the value cannot exceed limit budget " + budget);
      setNewBudget(budget);
      return;
    }

    if (event.target.value < remaining) {
      alert("You cannot reduce the budget value lower than the spending");
      setNewBudget(budget);
      return;
    }
    
    setNewBudget(event.target.value);
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}/>
    </div>
  );
};

export default Budget;