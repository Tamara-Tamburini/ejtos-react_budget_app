import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch, currency } = useContext(AppContext);
  const [selectedCurrency, setSelectedCurrency] = useState(currency);

  const changeCurrency = (val) => {
    setSelectedCurrency(val);
    dispatch({
      type: "CHG_CURRENCY",
      payload: val,
    });
  };

  return (
    <div>
      {
        <select
          name="Currency"
          id="Currency"
          onChange={(event) => changeCurrency(event.target.value)}
          class="form-select form-select-lg mb-3"
        >
          <option selected>{`Currency (${selectedCurrency})`}</option>
          <option value="$">$ Dollar</option>
          <option value="£">£ Pound</option>
          <option value="€">€ Euro</option>
          <option value="₹">₹ Ruppe</option>
        </select>
      }
    </div>
  );
};
export default Currency;
