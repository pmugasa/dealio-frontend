import { useState } from "react";
import { Link, redirect } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  //submitting form
  function handleSubmit(e) {
    e.preventDefault();
    redirect("/account");
    setEmail("");
    setPassword("");
    setConfirmPwd("");
    console.log(email, password);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className=" min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-lg mt-8 bg-base-100">
              <div className="card-body ">
                <div className="form-control">
                  {/*  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="label">
                    <span className="label-text">Confirm password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="confirm password"
                    className="input input-bordered"
                    value={confirmPwd}
                    onChange={(e) => setConfirmPwd(e.target.value)}
                  />
                  <div className="md:flex">
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                  <div className="divider">OR</div>*/}

                  <button className="btn btn-primary font-bold hover:text-white my-4">
                    <span className="mr-4">
                      <ion-icon name="logo-google"></ion-icon>
                    </span>{" "}
                    Register with Google
                  </button>
                  <label className="label">
                    <Link
                      to="/login"
                      className="label-text-alt link link-hover"
                    >
                      Already have an account?{" "}
                      <span className="text-primary">Login</span>
                    </Link>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Signup;
