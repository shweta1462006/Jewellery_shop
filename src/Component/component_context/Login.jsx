import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SU from '../../assets/sign_up.jpg';
import { useUser } from '../context/UserContext1';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useUser();

  const [formData, setFormData] = useState({
    un: "",
    em: "",
    pwd: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.un.trim() && formData.em.trim()) {
      login(formData);
      setFormData({ un: '', em: '', pwd: '' });
      setTimeout(() => navigate("/"), 1000);
    }
  }

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row shadow-lg rounded-4 overflow-hidden w-100 mx-2" style={{ maxWidth: '900px' }}>
        
        {/* Left Image */}
        <div className="col-lg-6 d-none d-lg-block">
          <img src={SU} alt="Sign Up" className="img-fluid h-100 w-100 object-fit-cover" />
        </div>

        {/* Form */}
        <div className="col-lg-6 col-12 p-5 bg-white">
          <h2 className="mb-4 fw-bold text-primary">Sign Up</h2>
          <p className="text-muted mb-4">Create an account to get started.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                name="un"
                value={formData.un}
                className="form-control shadow-sm"
                placeholder="User Name"
                onChange={handleChange}
                required
              />
              <label>User Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                name="em"
                value={formData.em}
                className="form-control shadow-sm"
                placeholder="name@example.com"
                onChange={handleChange}
                required
              />
              <label>Email address</label>
            </div>
            <div className="form-floating mb-4">
              <input
                type="password"
                name="pwd"
                value={formData.pwd}
                className="form-control shadow-sm"
                placeholder="Password"
                onChange={handleChange}
                required
              />
              <label>Password</label>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100 py-2 fw-bold shadow-sm"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-3 text-center text-muted">
            Already have an account? <a href="/login" className="text-primary fw-semibold">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
