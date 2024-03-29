import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/Usercontext";

const Registration = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("regestered user :", user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleGoogSignIn = () => {
    signInGoogle()
      .then((result) => {
        const user = result.user;
        console.log("user :", user);
      })
      .catch((er) => {
        console.error(er.message);
      });
  };

  const { createUser, signInGoogle } = useContext(AuthContext);
  console.log("creating", createUser);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  required
                  className="input input-bordered"
                />
                <label className="label">
                  <Link to="/login" className="">
                    <button className="btn btn-link">
                      Already have an account?
                    </button>
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <button
                onClick={handleGoogSignIn}
                className="btn btn-outline btn-success "
              >
                Google Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
