import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function TransactionEditForm() {
  let { index } = useParams();

  const [editForm, setEditForm] = useState({
    transactionId: 0,
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  let navigate = useNavigate();

  const handleTextChange = (event) => {
    setEditForm({ ...editForm, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/transactions/${index}`)
      .then((response) => {
        setEditForm(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${process.env.REACT_APP_API_URL}/transactions/${index}`, editForm)
      .then((response) => {
        setEditForm(response.data);
        navigate(`/transactions`);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="item_name">Item Name:</label>
        <input
          id="item_name"
          value={editForm.item_name}
          type="text"
          onChange={handleTextChange}
          required
        />
        
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          value={editForm.amount}
          type="number"
          onChange={handleTextChange}
          required
        />
        
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          value={editForm.date}
          type="text"
          onChange={handleTextChange}
          required
        />

        <label htmlFor="from">From:</label>
        <input
          id="from"
          value={editForm.from}
          type="text"
          onChange={handleTextChange}
          required
        />
       
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          value={editForm.category}
          type="text"
          onChange={handleTextChange}
          required
        />
        <br />

        <input type="submit" />
      </form>

      <Link to={`/transactions`}>
        <button>Cancel</button>
      </Link>
    </div>
  );
}














