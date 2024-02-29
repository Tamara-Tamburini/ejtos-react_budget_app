import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { TiDelete } from "react-icons/ti";
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: parseInt(10),

    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };
  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: parseInt(10),
    };

    dispatch({
      type: "RED_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>{currency + props.cost}</td>
      <td>
        <IoMdAddCircle
          size="1.5em"
          style={{ color: "green" }}
          onClick={(event) => increaseAllocation(props.name)}
        />
      </td>
      <td>
        <IoMdRemoveCircle
          size="1.5em"
          style={{ color: "red" }}
          onClick={(event) => decreaseAllocation(props.name)}
        />
      </td>
      <td>
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
      </td>
    </tr>
  );
};

export default ExpenseItem;
