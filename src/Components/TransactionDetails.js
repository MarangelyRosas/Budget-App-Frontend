import { useState, useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function TransactionDetails() {
  const [trans, setTrans] = useState({});
  let { index } = useParams;
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/transactions/${index}`)
      .then((response) => {       
        setTrans(response.data);
        console.log(response.data);
      })
      .catch(() => {
         navigate("/not-found");
      });
  }, [index, navigate]);
  
  const handleDelete = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/transactions/${index}`)
      .then(() => {
        navigate("/transactions");
      });
  };

  return (
    <article>
      <h3>
        {trans.date ? <span>⭐️</span> : null} {trans.date}
      </h3>

      <h5>
        <span> {trans.item_name} </span>{" "} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
      </h5>
      
        <div className="showNavigation">
            <div>
                {" "}
                    <Link to={`/transactions`}>
                        <button>Back</button>
                    </Link>
            </div>
            <div>
                {" "}
                    <Link to={`/transactions/${index}/edit`}>
                        <button>Edit</button>
                    </Link>
            </div>
            <div>
                {" "}
                    <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    </article>
  );
}

export default TransactionDetails;































// import { useState, useEffect } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";
// // import "./TransactionDetails.css"
// import axios from "axios";

// function TransactionDetails() {
//   const [transactions, setTransactions] = useState([]);
//     let { index } = useParams();
//   let navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get(`${process.env.REACT_APP_API_URL}/transactions/${index}`)
//       .then((response) => {
//         console.log(response);
//         setTransactions(response.data);
//       })
//       .catch(() => {
//         navigate("/not-found");
//       });
//   }, [index, navigate]);

//   const handleDelete = () => {
//     axios
//       .delete(`${process.env.REACT_APP_API_URL}/transactions/${index}`)
//       .then(() => {
//         navigate("/transactions");
//       });
//   };

//   return (
//     <div className="TransactionDetails">
//       <article>
//         <h2> {transactions.from} {transactions.transactionId}</h2>
//         <p><strong>Item Name:</strong> {transactions.item_name}</p>
//         <p><strong>Name</strong> {transactions.name ? "True" : "False"}</p>
//         <p><strong>Date:</strong> {transactions.date}</p>
//       </article>
//     <div className="showNavigation">
//     <div>
//       <Link to={`/transactions`}>
//         <button>Back</button>
//       </Link>
//     </div>
//     <div>
//       <Link to={`/transactions/${index}/edit`}>
//         <button>Edit</button>
//       </Link>
//     </div>
//     <div>
//       <button onClick={handleDelete}>Delete</button>
//     </div>
//     </div>
//     </div>
//   );
// }

// export default TransactionDetails;