import React,{useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const saveUsers = (e) => {
    e.preventDefault();
    console.log(validateForm());
    if (validateForm()) {
      const users = { firstName, lastName, email, password, city, country };
      const answer = window.confirm("Are you sure your data is saved?");
      if (answer) {
        e.preventDefault(); 
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setCity("");
        setCountry("");
  
        console.log(users);
        } 
    }
  };
  const handleCancel = (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setCity("");
    setCountry("");
  };

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    city: "",
    country: ""
  });

  const validateForm = () => {
    let valid = true;
    //const { name, email, password } = formData;
    const errorsCopy = { ...errors };

    if (!firstName.trim()) {
      errorsCopy.firstName = "First Name is required";
      valid = false;
    } else {
      errorsCopy.firstName = "";
    }

    if (!lastName.trim()) {
      errorsCopy.lastName = "Last Name is required";
      valid = false;
    } else {
      errorsCopy.lastName = "";
    }

    if (!email.trim()) {
      errorsCopy.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errorsCopy.email = "Email is invalid";
      valid = false;
    } else {
      errorsCopy.email = "";
    }
    if (!password.trim()) {
      errorsCopy.password = "Password is required";
      valid = false;
    } else {
      errorsCopy.password = "";
    }
    if (!city.trim()) {
      errorsCopy.city = "City is required";
      valid = false;
    } else {
      errorsCopy.city = "";
    }
    if (!country.trim()) {
      errorsCopy.country = "Country is required";
      valid = false;
    } else {
      errorsCopy.country = "";
    }
    setErrors(errorsCopy);
    return valid;
  };

  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">

          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center">Registraction Form</h2>
            <div className="card-body">
              <form >
                <div className="form-group mb-2">
                  <label className="form-label"> First Name :</label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    name="firstName"
                    className={`form-control ${
                      errors.firstName ? "is-invalid" : ""
                    }`}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  ></input>
                  {errors.firstName && (
                    <div className="invalid-feedback">{errors.firstName}</div>
                  )}
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Last Name :</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    name="lastName"
                    className={`form-control ${
                      errors.lastName ? "is-invalid" : ""
                    }`}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  ></input>
                  {errors.lastName && (
                    <div className="invalid-feedback">{errors.lastName}</div>
                  )}
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Email Id :</label>
                  <input
                    type="email"
                    placeholder="Enter email Id"
                    name="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> Password :</label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> City :</label>
                  <input
                    type="text"
                    placeholder="Enter City"
                    name="city"
                    className={`form-control ${
                      errors.city ? "is-invalid" : ""
                    }`}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  ></input>
                  {errors.city && (
                    <div className="invalid-feedback">{errors.city}</div>
                  )}
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> Country:</label>
                  <input
                    type="country"
                    placeholder="Enter Country"
                    name="country"
                    className={`form-control ${
                      errors.country ? "is-invalid" : ""
                    }`}
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  ></input>
                  {errors.country && (
                    <div className="invalid-feedback">{errors.country}</div>
                  )}
                </div>
                <button
                  className="btn btn-success button"
                  onClick={(e) => saveUsers(e)}
                >
                  Submit{" "}
                </button>
                <button className="btn btn-success button" onClick={handleCancel}>
                  Cancel{" "}
                </button>
              
              
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
