// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { toast } from "react-toastify";
// import { getUserCart, emptyUserCart, saveUserAddress } from "../functions/user";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

// const Checkout = () => {
//   const [products, setProducts] = useState([]);
//   const [total, setTotal] = useState(0);
//   const [address, setAddress] = useState("");
//   const [addressSaved, setAddressSaved] = useState(false);
//   const [coupon, setCoupon] = useState("");

//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => ({ ...state }));

//   useEffect(() => {
//     getUserCart(user.token).then((res) => {
//       console.log("user cart res", JSON.stringify(res.data, null, 4));
//       setProducts(res.data.products);
//       setTotal(res.data.cartTotal);
//     });
//   }, []);

//   const emptyCart = () => {
//     // remove from local storage
//     if (typeof window !== "undefined") {
//       localStorage.removeItem("cart");
//     }
//     // remove from redux
//     dispatch({
//       type: "ADD_TO_CART",
//       payload: [],
//     });
//     // remove from backend
//     emptyUserCart(user.token).then((res) => {
//       setProducts([]);
//       setTotal(0);
//       toast.success("Cart is emapty. Contniue shopping.");
//     });
//   };

//   const saveAddressToDb = () => {
//     // console.log(address);
//     saveUserAddress(user.token, address).then((res) => {
//       if (res.data.ok) {
//         setAddressSaved(true);
//         toast.success("Address saved");
//       }
//     });
//   };

//   const applyDiscountCoupon = () => {
//     console.log("send coupon to backend", coupon);
//   };

//   const showAddress = () => (
//     <>
//       <ReactQuill theme="snow" value={address} onChange={setAddress} />
//       <button className="btn btn-primary mt-2" onClick={saveAddressToDb}>
//         Save
//       </button>
//     </>
//   );

//   const showProductSummary = () =>
//     products.map((p, i) => (
//       <div key={i}>
//         <p>
//           {p.product.title} ({p.color}) x {p.count} ={" "}
//           {p.product.price * p.count}
//         </p>
//       </div>
//     ));

//   const showApplyCoupon = () => (
//     <>
//       <input
//         onChange={(e) => setCoupon(e.target.value)}
//         value={coupon}
//         type="text"
//         className="form-control"
//       />
//       <button onClick={applyDiscountCoupon} className="btn btn-primary mt-2">
//         Apply
//       </button>
//     </>
//   );

//   return (
//     <div className="row">
//       <div className="col-md-6">
//         <h4>Delivery Address</h4>
//         <br />
//         <br />
//         {showAddress()}
//         <hr />
//         <h4>Got Coupon?</h4>
//         <br />
//         {showApplyCoupon()}
//       </div>

//       <div className="col-md-6">
//         <h4>Order Summary</h4>
//         <hr />
//         <p>Products {products.length}</p>
//         <hr />
//         {showProductSummary()}
//         <hr />
//         <p>Cart Total: {total}</p>

//         <div className="row">
//           <div className="col-md-6">
//             <button
//               className="btn btn-primary"
//               disabled={!addressSaved || !products.length}
//             >
//               Place Order
//             </button>
//           </div>

//           <div className="col-md-6">
//             <button
//               disabled={!products.length}
//               onClick={emptyCart}
//               className="btn btn-primary"
//             >
//               Empty Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;

// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { toast } from "react-toastify";
// import { getUserCart, emptyUserCart, saveUserAddress } from "../functions/user";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import {
//   MDBBtn,
//   MDBCard,
//   MDBCardBody,
//   MDBCardHeader,
//   MDBCheckbox,
//   MDBCol,
//   MDBInput,
//   MDBListGroup,
//   MDBListGroupItem,
//   MDBRow,
//   MDBTextArea,
//   MDBTypography,
// } from "mdb-react-ui-kit";

// const Checkout = () => {
//   const [products, setProducts] = useState([]);
//   const [total, setTotal] = useState(0);
//   const [address, setAddress] = useState("");
//   const [addressSaved, setAddressSaved] = useState(false);
//   const [coupon, setCoupon] = useState("");

//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => ({ ...state }));

//   useEffect(() => {
//     getUserCart(user.token).then((res) => {
//       setProducts(res.data.products);
//       setTotal(res.data.cartTotal);
//     });
//   }, []);

//   const emptyCart = () => {
//     if (typeof window !== "undefined") {
//       localStorage.removeItem("cart");
//     }
//     dispatch({
//       type: "ADD_TO_CART",
//       payload: [],
//     });
//     emptyUserCart(user.token).then(() => {
//       setProducts([]);
//       setTotal(0);
//       toast.success("Cart is empty. Continue shopping.");
//     });
//   };

//   const saveAddressToDb = () => {
//     saveUserAddress(user.token, address).then((res) => {
//       if (res.data.ok) {
//         setAddressSaved(true);
//         toast.success("Address saved successfully!");
//       }
//     });
//   };

//   const applyDiscountCoupon = () => {
//     console.log("Applying coupon:", coupon);
//   };

//   return (
//     <div className="mx-auto mt-5" style={{ maxWidth: "900px" }}>
//       <MDBRow>
//         {/* Address & Coupon Section */}
//         <MDBCol md="8" className="mb-4">
//           <MDBCard className="mb-4">
//             <MDBCardHeader>
//               <MDBTypography tag="h5" className="mb-0">
//                 Delivery Details
//               </MDBTypography>
//             </MDBCardHeader>
//             <MDBCardBody>
//               <form>
//                 <MDBInput
//                   label="Email"
//                   type="email"
//                   className="mb-4"
//                   value={user?.email || ""}
//                   disabled
//                 />
//                 <MDBInput
//                   label="Phone"
//                   type="text"
//                   className="mb-4"
//                 />
//                 <MDBTextArea
//                   label="Delivery Address"
//                   rows={4}
//                   className="mb-4"
//                   value={address}
//                   onChange={(e) => setAddress(e.target.value)}
//                 />
//                 <MDBBtn
//                   color="primary"
//                   className="mb-3"
//                   onClick={saveAddressToDb}
//                 >
//                   Save Address
//                 </MDBBtn>
//                 <hr />
//                 <MDBTypography tag="h5" className="mb-3">
//                   Got a Coupon?
//                 </MDBTypography>
//                 <MDBInput
//                   label="Enter Coupon"
//                   type="text"
//                   className="mb-3"
//                   value={coupon}
//                   onChange={(e) => setCoupon(e.target.value)}
//                 />
//                 <MDBBtn color="info" onClick={applyDiscountCoupon}>
//                   Apply Coupon
//                 </MDBBtn>
//               </form>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>

//         {/* Order Summary Section */}
//         <MDBCol md="4" className="mb-4">
//           <MDBCard>
//             <MDBCardHeader>
//               <MDBTypography tag="h5" className="mb-0">
//                 Order Summary
//               </MDBTypography>
//             </MDBCardHeader>
//             <MDBCardBody>
//               <MDBListGroup flush>
//                 {products.map((p, i) => (
//                   <MDBListGroupItem
//                     key={i}
//                     className="d-flex justify-content-between"
//                   >
//                     <span>
//                       {p.product.title} ({p.color}) x {p.count}
//                     </span>
//                     <span>${p.product.price * p.count}</span>
//                   </MDBListGroupItem>
//                 ))}
//                 <MDBListGroupItem className="d-flex justify-content-between">
//                   <strong>Total:</strong>
//                   <strong>${total}</strong>
//                 </MDBListGroupItem>
//               </MDBListGroup>
//               <div className="d-flex justify-content-between mt-3">
//                 <MDBBtn
//                   color="success"
//                   disabled={!addressSaved || !products.length}
//                 >
//                   Place Order
//                 </MDBBtn>
//                 <MDBBtn
//                   color="danger"
//                   onClick={emptyCart}
//                   disabled={!products.length}
//                 >
//                   Empty Cart
//                 </MDBBtn>
//               </div>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>
//       </MDBRow>
//     </div>
//   );
// };

// export default Checkout;
// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { toast } from "react-toastify";
// import { getUserCart, emptyUserCart, saveUserAddress } from "../functions/user";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import {
//   MDBBtn,
//   MDBCard,
//   MDBCardBody,
//   MDBCardHeader,
//   MDBCheckbox,
//   MDBCol,
//   MDBInput,
//   MDBListGroup,
//   MDBListGroupItem,
//   MDBRow,
//   MDBTextArea,
//   MDBTypography,
// } from "mdb-react-ui-kit";

// const Checkout = () => {
//   const [products, setProducts] = useState([]);
//   const [total, setTotal] = useState(0);
//   const [address, setAddress] = useState("");
//   const [addressSaved, setAddressSaved] = useState(false);
//   const [coupon, setCoupon] = useState("");

//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => ({ ...state }));

//   useEffect(() => {
//     getUserCart(user.token).then((res) => {
//       setProducts(res.data.products);
//       setTotal(res.data.cartTotal);
//     });
//   }, []);

//   const emptyCart = () => {
//     if (typeof window !== "undefined") {
//       localStorage.removeItem("cart");
//     }
//     dispatch({
//       type: "ADD_TO_CART",
//       payload: [],
//     });
//     emptyUserCart(user.token).then(() => {
//       setProducts([]);
//       setTotal(0);
//       toast.success("Cart is empty. Continue shopping.");
//     });
//   };

//   const saveAddressToDb = () => {
//     saveUserAddress(user.token, address).then((res) => {
//       if (res.data.ok) {
//         setAddressSaved(true);
//         toast.success("Address saved successfully!");
//       }
//     });
//   };

//   const applyDiscountCoupon = () => {
//     console.log("Applying coupon:", coupon);
//   };

//   return (
//     <div className="mx-auto mt-5" style={{ maxWidth: "900px" }}>
//       <MDBRow>
//         {/* Address & Coupon Section */}
//         <MDBCol md="8" className="mb-4">
//           <MDBCard className="mb-4">
//             <MDBCardHeader>
//               <MDBTypography tag="h5" className="mb-0">
//                 Delivery Details
//               </MDBTypography>
//             </MDBCardHeader>
//             <MDBCardBody>
//               <form>
//                 {/* Email Field */}
//                 <MDBInput
//                   placeholder="Enter your email"
//                   type="email"
//                   className="mb-4"
//                   value={user?.email || ""}
//                   disabled
//                 />
//                 {/* Phone Number Field */}
//                 <MDBInput
//                   placeholder="Enter your number"
//                   type="text"
//                   className="mb-4"
//                 />
//                 {/* Address Field */}
//                 <MDBTextArea
//                   placeholder="Enter your address"
//                   rows={4}
//                   className="mb-4"
//                   value={address}
//                   onChange={(e) => setAddress(e.target.value)}
//                 />
//                 {/* Save Address Button */}
//                 <MDBBtn
//                   color="primary"
//                   className="mb-3"
//                   onClick={saveAddressToDb}
//                 >
//                   Save Address
//                 </MDBBtn>
//                 <hr />
//                 {/* Coupon Section */}
//                 <MDBTypography tag="h5" className="mb-3">
//                   Got a Coupon?
//                 </MDBTypography>
//                 <MDBInput
//                   placeholder="Enter coupon code"
//                   type="text"
//                   className="mb-3"
//                   value={coupon}
//                   onChange={(e) => setCoupon(e.target.value)}
//                 />
//                 <MDBBtn color="info" onClick={applyDiscountCoupon}>
//                   Apply Coupon
//                 </MDBBtn>
//               </form>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>

//         {/* Order Summary Section */}
//         <MDBCol md="4" className="mb-4">
//           <MDBCard>
//             <MDBCardHeader>
//               <MDBTypography tag="h5" className="mb-0">
//                 Order Summary
//               </MDBTypography>
//             </MDBCardHeader>
//             <MDBCardBody>
//               <MDBListGroup flush>
//                 {products.map((p, i) => (
//                   <MDBListGroupItem
//                     key={i}
//                     className="d-flex justify-content-between"
//                   >
//                     <span>
//                       {p.product.title} ({p.color}) x {p.count}
//                     </span>
//                     <span>${p.product.price * p.count}</span>
//                   </MDBListGroupItem>
//                 ))}
//                 <MDBListGroupItem className="d-flex justify-content-between">
//                   <strong>Total:</strong>
//                   <strong>${total}</strong>
//                 </MDBListGroupItem>
//               </MDBListGroup>
//               <div className="d-flex justify-content-between mt-3">
//                 <MDBBtn
//                   color="success"
//                   disabled={!addressSaved || !products.length}
//                 >
//                   Place Order
//                 </MDBBtn>
//                 <MDBBtn
//                   color="danger"
//                   onClick={emptyCart}
//                   disabled={!products.length}
//                 >
//                   Empty Cart
//                 </MDBBtn>
//               </div>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>
//       </MDBRow>
//     </div>
//   );
// };

// export default Checkout;
// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { toast } from "react-toastify";
// import { getUserCart, emptyUserCart, saveUserAddress } from "../functions/user";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardHeader,
//   MDBCol,
//   MDBInput,
//   MDBListGroup,
//   MDBListGroupItem,
//   MDBRow,
//   MDBTextArea,
//   MDBTypography,
// } from "mdb-react-ui-kit";

// const Checkout = () => {
//   const [products, setProducts] = useState([]);
//   const [total, setTotal] = useState(0);
//   const [address, setAddress] = useState("");
//   const [phone, setPhone] = useState("");
//   const [errors, setErrors] = useState({}); // Store validation errors
//   const [addressSaved, setAddressSaved] = useState(false);
//   const [coupon, setCoupon] = useState("");

//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => ({ ...state }));

//   useEffect(() => {
//     getUserCart(user.token).then((res) => {
//       setProducts(res.data.products);
//       setTotal(res.data.cartTotal);
//     });
//   }, []);

//   const emptyCart = () => {
//     if (typeof window !== "undefined") {
//       localStorage.removeItem("cart");
//     }
//     dispatch({
//       type: "ADD_TO_CART",
//       payload: [],
//     });
//     emptyUserCart(user.token).then(() => {
//       setProducts([]);
//       setTotal(0);
//       toast.success("Cart is empty. Continue shopping.");
//     });
//   };

//   const validateFields = () => {
//     const newErrors = {};
//     if (!phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!/^\d{10}$/.test(phone)) {
//       newErrors.phone = "Phone number must be exactly 10 digits";
//     }

//     if (!address.trim()) {
//       newErrors.address = "Address is required";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0; // Returns true if no errors
//   };

//   const saveAddressToDb = () => {
//     if (validateFields()) {
//       saveUserAddress(user.token, address).then((res) => {
//         if (res.data.ok) {
//           setAddressSaved(true);
//           toast.success("Address saved successfully!");
//         }
//       });
//     }
//   };

//   const applyDiscountCoupon = () => {
//     console.log("Applying coupon:", coupon);
//   };

//   return (
//     <div className="mx-auto mt-5" style={{ maxWidth: "900px" }}>
//       <MDBRow>
//         {/* Address & Coupon Section */}
//         <MDBCol md="8" className="mb-4">
//           <MDBCard className="mb-4">
//             <MDBCardHeader>
//               <MDBTypography tag="h5" className="mb-0">
//                 Delivery Details
//               </MDBTypography>
//             </MDBCardHeader>
//             <MDBCardBody>
//               <form>
//                 {/* Email Field */}
//                 <MDBInput
//                   placeholder="Enter your email"
//                   type="email"
//                   className="mb-4"
//                   value={user?.email || ""}
//                   disabled
//                 />

//                 {/* Phone Number Field */}
//                 <div className="mb-4">
//            <MDBInput
//                 placeholder="Enter your number"
//                type="text"
//                   value={phone}
//                   onChange={(e) => {
//                  const input = e.target.value;
//                 // Allow only digits and limit to 10 characters
//                if (/^\d*$/.test(input) && input.length <= 10) {
//                    setPhone(input);
//                     }
//                   }}
//                  style={{
//                     borderColor: errors.phone ? "red" : "",
//                 }}
//                  />
//               {errors.phone && (
//                 <small className="text-danger">{errors.phone}</small>
//                  )}
//                   </div>


//                 {/* Address Field */}
//                 <div className="mb-4">
//                   <MDBTextArea
//                     placeholder="Enter your address"
//                     rows={4}
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                     style={{
//                       borderColor: errors.address ? "red" : "",
//                     }}
//                   />
//                   {errors.address && (
//                     <small className="text-danger">{errors.address}</small>
//                   )}
//                 </div>

//                 {/* Save Address Button */}
//                 <button
//                   type="button"
//                   className="btn btn-primary mb-3"
//                   onClick={saveAddressToDb}
//                 >
//                   Save Address
//                 </button>
//                 <hr />

//                 {/* Coupon Section */}
//                 <MDBTypography tag="h5" className="mb-3">
//                   Got a Coupon?
//                 </MDBTypography>
//                 <MDBInput
//                   placeholder="Enter coupon code"
//                   type="text"
//                   className="mb-3"
//                   value={coupon}
//                   onChange={(e) => setCoupon(e.target.value)}
//                 />
//                 <button
//                   type="button"
//                   className="btn btn-info"
//                   onClick={applyDiscountCoupon}
//                 >
//                   Apply Coupon
//                 </button>
//               </form>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>

//         {/* Order Summary Section */}
//         <MDBCol md="4" className="mb-4">
//           <MDBCard>
//             <MDBCardHeader>
//               <MDBTypography tag="h5" className="mb-0">
//                 Order Summary
//               </MDBTypography>
//             </MDBCardHeader>
//             <MDBCardBody>
//               <MDBListGroup flush>
//                 {products.map((p, i) => (
//                   <MDBListGroupItem
//                     key={i}
//                     className="d-flex justify-content-between"
//                   >
//                     <span>
//                       {p.product.title} ({p.color}) x {p.count}
//                     </span>
//                     <span>${p.product.price * p.count}</span>
//                   </MDBListGroupItem>
//                 ))}
//                 <MDBListGroupItem className="d-flex justify-content-between">
//                   <strong>Total:</strong>
//                   <strong>${total}</strong>
//                 </MDBListGroupItem>
//               </MDBListGroup>
//               <div className="d-flex justify-content-between mt-3">
//                 {/* Place Order Button */}
//                 <button
//                   type="button"
//                   className="btn btn-success"
//                   disabled={!addressSaved || !products.length}
//                 >
//                   Place Order
//                 </button>
//                 {/* Empty Cart Button */}
//                 <button
//                   type="button"
//                   className="btn btn-danger"
//                   onClick={emptyCart}
//                   disabled={!products.length}
//                 >
//                   Empty Cart
//                 </button>
//               </div>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>
//       </MDBRow>
//     </div>
//   );
// };

// export default Checkout;


// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { toast } from "react-toastify";
// import { getUserCart, emptyUserCart, saveUserAddress } from "../functions/user";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardHeader,
//   MDBCol,
//   MDBInput,
//   MDBListGroup,
//   MDBListGroupItem,
//   MDBRow,
//   MDBTextArea,
//   MDBTypography,
// } from "mdb-react-ui-kit";

// const Checkout = () => {
//   const [products, setProducts] = useState([]);
//   const [total, setTotal] = useState(0);
//   const [address, setAddress] = useState("");
//   const [phone, setPhone] = useState("");
//   const [errors, setErrors] = useState({}); // Validation errors
//   const [addressSaved, setAddressSaved] = useState(false);
//   const [coupon, setCoupon] = useState("");
//   const errorTimeoutRef = React.useRef(null); // Reference to the timeout

//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => ({ ...state }));

//   useEffect(() => {
//     getUserCart(user.token).then((res) => {
//       setProducts(res.data.products);
//       setTotal(res.data.cartTotal);
//     });
//   }, []);

//   useEffect(() => {
//     // Clear validation errors after 10 seconds
//     if (Object.keys(errors).length > 0) {
//       errorTimeoutRef.current = setTimeout(() => {
//         setErrors({});
//       }, 10000);
//     }

//     return () => {
//       clearTimeout(errorTimeoutRef.current);
//     };
//   }, [errors]);

//   const emptyCart = () => {
//     if (typeof window !== "undefined") {
//       localStorage.removeItem("cart");
//     }
//     dispatch({
//       type: "ADD_TO_CART",
//       payload: [],
//     });
//     emptyUserCart(user.token).then(() => {
//       setProducts([]);
//       setTotal(0);
//       toast.success("Cart is empty. Continue shopping.");
//     });
//   };

//   const validateFields = () => {
//     const newErrors = {};
//     if (!phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!/^\d{10}$/.test(phone)) {
//       newErrors.phone = "Phone number must be exactly 10 digits";
//     }

//     if (!address.trim()) {
//       newErrors.address = "Address is required";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const saveAddressToDb = () => {
//     if (validateFields()) {
//       saveUserAddress(user.token, address).then((res) => {
//         if (res.data.ok) {
//           setAddressSaved(true);
//           toast.success("Address saved successfully!");
//         }
//       });
//     }
//   };

//   const applyDiscountCoupon = () => {
//     console.log("Applying coupon:", coupon);
//   };

//   return (
//     <div className="mx-auto mt-5" style={{ maxWidth: "900px" }}>
//       <MDBRow>
//         {/* Address & Coupon Section */}
//         <MDBCol md="8" className="mb-4">
//           <MDBCard className="mb-4">
//             <MDBCardHeader>
//               <MDBTypography tag="h5" className="mb-0">
//                 Delivery Details
//               </MDBTypography>
//             </MDBCardHeader>
//             <MDBCardBody>
//               <form>
//                 {/* Email Field */}
//                 <MDBInput
//                   placeholder="Enter your email"
//                   type="email"
//                   className="mb-4"
//                   value={user?.email || ""}
//                   disabled
//                 />

//                 {/* Phone Number Field */}
//                 <div className="mb-4">
//                   <MDBInput
//                     placeholder="Enter your number"
//                     type="text"
//                     value={phone}
//                     onChange={(e) => {
//                       const input = e.target.value;
//                       if (/^\d*$/.test(input) && input.length <= 10) {
//                         setPhone(input);
//                       }
//                     }}
//                     style={{
//                       borderColor: errors.phone ? "red" : "",
//                     }}
//                   />
//                   {errors.phone && (
//                     <small className="text-danger">{errors.phone}</small>
//                   )}
//                 </div>

//                 {/* Address Field */}
//                 <div className="mb-4">
//                   <MDBTextArea
//                     placeholder="Enter your address"
//                     rows={4}
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                     style={{
//                       borderColor: errors.address ? "red" : "",
//                     }}
//                   />
//                   {errors.address && (
//                     <small className="text-danger">{errors.address}</small>
//                   )}
//                 </div>

//                 {/* Save Address Button */}
//                 <button
//                   type="button"
//                   className="btn btn-primary mb-3"
//                   onClick={saveAddressToDb}
//                 >
//                   Save Address
//                 </button>
//                 <hr />

//                 {/* Coupon Section */}
//                 <MDBTypography tag="h5" className="mb-3">
//                   Got a Coupon?
//                 </MDBTypography>
//                 <MDBInput
//                   placeholder="Enter coupon code"
//                   type="text"
//                   className="mb-3"
//                   value={coupon}
//                   onChange={(e) => setCoupon(e.target.value)}
//                 />
//                 <button
//                   type="button"
//                   className="btn btn-info"
//                   onClick={applyDiscountCoupon}
//                 >
//                   Apply Coupon
//                 </button>
//               </form>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>

//         {/* Order Summary Section */}
//         <MDBCol md="4" className="mb-4">
//           <MDBCard>
//             <MDBCardHeader>
//               <MDBTypography tag="h5" className="mb-0">
//                 Order Summary
//               </MDBTypography>
//             </MDBCardHeader>
//             <MDBCardBody>
//               <MDBListGroup flush>
//                 {products.map((p, i) => (
//                   <MDBListGroupItem
//                     key={i}
//                     className="d-flex justify-content-between"
//                   >
//                     <span>
//                       {p.product.title} ({p.color}) x {p.count}
//                     </span>
//                     <span>${p.product.price * p.count}</span>
//                   </MDBListGroupItem>
//                 ))}
//                 <MDBListGroupItem className="d-flex justify-content-between">
//                   <strong>Total:</strong>
//                   <strong>${total}</strong>
//                 </MDBListGroupItem>
//               </MDBListGroup>
//               <div className="d-flex justify-content-between mt-3">
//                 <button
//                   type="button"
//                   className="btn btn-success"
//                   disabled={!addressSaved || !products.length}
//                 >
//                   Place Order
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-danger"
//                   onClick={emptyCart}
//                   disabled={!products.length}
//                 >
//                   Empty Cart
//                 </button>
//               </div>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>
//       </MDBRow>
//     </div>
//   );
// };

// export default Checkout;
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { getUserCart, emptyUserCart, saveUserAddress ,applyCoupon } from "../functions/user";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTextArea,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useNavigate  } from 'react-router-dom'; // Import useNavigate
const Checkout = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [addressSaved, setAddressSaved] = useState(false);
  const [coupon, setCoupon] = useState("");
  const navigate = useNavigate(); // Use navigate
  
  //discount price
  // discount price
  const [totalAfterDiscount, setTotalAfterDiscount] = useState("");
  const [discountError, setDiscountError] = useState("");

  const errorTimeoutRef = React.useRef(null);
  const couponErrorTimeoutRef = React.useRef(null);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    getUserCart(user.token).then((res) => {
      setProducts(res.data.products);
      setTotal(res.data.cartTotal);
    });
  }, []);

  

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      errorTimeoutRef.current = setTimeout(() => {
        setErrors({});
      }, 10000);
    }

    return () => {
      clearTimeout(errorTimeoutRef.current);
    };
  }, [errors]);

  useEffect(() => {
    if (discountError) {
      couponErrorTimeoutRef.current = setTimeout(() => {
        setDiscountError("");
      }, 10000);
    }

    return () => {
      clearTimeout(couponErrorTimeoutRef.current);
    };
  }, [discountError]);

  const emptyCart = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
    dispatch({
      type: "ADD_TO_CART",
      payload: [],
    });
    emptyUserCart(user.token).then(() => {
      setProducts([]);
      setTotal(0);
      Swal.fire({
        icon: "success",
        title: "Cart is Empty",
        text: "Continue shopping!",
      });
    });
  };

  const validateFields = () => {
    const newErrors = {};
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    if (!address.trim()) {
      newErrors.address = "Address is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const saveAddressToDb = () => {
    if (validateFields()) {
      saveUserAddress(user.token, address ,phone).then((res) => {
        if (res.data.ok) {
          setAddressSaved(true);
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Address saved successfully!",
          });
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please correct the errors before proceeding.",
      });
    }
  };

  const applyDiscountCoupon = () => {
    console.log("send coupon to backend", coupon);
    applyCoupon(user.token, coupon).then((res) => {
      console.log("RES ON COUPON APPLIED", res.data);
      if (res.data) {
        setTotalAfterDiscount(res.data);
        // update redux coupon applied
        dispatch({
          type: "COUPON_APPLIED",
          payload: true,
        });
      }
      // error
      if (res.data.err) {
        setDiscountError(res.data.err);
        // update redux coupon applied
        dispatch({
          type: "COUPON_APPLIED",
          payload: false,
        });
      }
    });
  };

  return (
    <div className="mx-auto mt-5" style={{ maxWidth: "900px" }}>
      <MDBRow>
        {/* Address & Coupon Section */}
        <MDBCol md="8" className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader>
              <MDBTypography tag="h5" className="mb-0">
                Delivery Details
              </MDBTypography>
            </MDBCardHeader>
            <MDBCardBody>
              <form>
                {/* Email Field */}
                <MDBInput
                  placeholder="Enter your email"
                  type="email"
                  className="mb-4"
                  value={user?.email || ""}
                  disabled
                />

                {/* Phone Number Field */}
                <div className="mb-4">
                  <MDBInput
                    placeholder="Enter your number"
                    type="text"
                    value={phone}
                    onChange={(e) => {
                      const input = e.target.value;
                      if (/^\d*$/.test(input) && input.length <= 10) {
                        setPhone(input);
                      }
                    }}
                    style={{
                      borderColor: errors.phone ? "red" : "",
                    }}
                  />
                  {errors.phone && (
                    <small className="text-danger">{errors.phone}</small>
                  )}
                </div>

                {/* Address Field */}
                <div className="mb-4">
                  <MDBTextArea
                    placeholder="Enter your address"
                    rows={4}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    style={{
                      borderColor: errors.address ? "red" : "",
                    }}
                  />
                  {errors.address && (
                    <small className="text-danger">{errors.address}</small>
                  )}
                </div>

                {/* Save Address Button */}
                <button
                  type="button"
                  className="btn btn-primary mb-3"
                  onClick={saveAddressToDb}
                >
                  Save Address
                </button>
                <hr />

                {/* Coupon Section */}
                <MDBTypography tag="h5" className="mb-3">
                  Got a Coupon?
                </MDBTypography>
                <MDBInput
                  placeholder="Enter coupon code"
                  type="text"
                  className="mb-3"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={applyDiscountCoupon}
                >
                  Apply Coupon
                </button>
                {discountError && (
                  <p className="text-danger mt-2">{discountError}</p>
                )}
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        {/* Order Summary Section */}
        <MDBCol md="4" className="mb-4">
          <MDBCard>
            <MDBCardHeader>
              <MDBTypography tag="h5" className="mb-0">
                Order Summary
              </MDBTypography>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBListGroup flush>
                {products.map((p, i) => (
                  <MDBListGroupItem
                    key={i}
                    className="d-flex justify-content-between"
                  >
                    <span>
                      {p.product.title} ({p.color}) x {p.count}
                    </span>
                    <span>${p.product.price * p.count}</span>
                  </MDBListGroupItem>
                ))}
                <MDBListGroupItem className="d-flex justify-content-between">
                  <strong>Total:</strong>
                  <strong>${total}</strong>
                </MDBListGroupItem>
              </MDBListGroup>
              {totalAfterDiscount > 0 && (
                <p className="bg-success text-white p-2 mt-2 rounded">
                  Discount Applied: Total Payable: ${totalAfterDiscount}
                </p>
              )}
              <div className="d-flex justify-content-between mt-3">
                <button
                  type="button"
                  className="btn btn-success"
                  disabled={!addressSaved || !products.length}
                  onClick={() => navigate("/payment")}
                >
                  Place Order
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={emptyCart}
                  disabled={!products.length}
                >
                  Empty Cart
                </button>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Checkout;
