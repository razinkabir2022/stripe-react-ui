import React from "react";
import Stripe from "react-stripe-checkout";
import axios from "axios";
function App() {
async function handleToken(token) {
console.log(token);
await axios.post("http://localhost:8080/api/payment/charge", "", {         headers: {
  token: token.id,
  amount: 500,
},}).then(() => {
   alert("Payment Success");
   }).catch((error) => {
   alert(error);
   });
}
return (
<div className="App">
<Stripe
stripeKey="pk_test_51P1yv3HAYSgpUy4mjpoYvnjysY2o9np3BIDw1BC1XFNYcWgLQ7ryuQb5KWLBGf3WRVpfmIhq8NG7msJ37dfXs7Ev00qRCOBtTf"
token={handleToken}
/>
</div>
);
}
export default App;