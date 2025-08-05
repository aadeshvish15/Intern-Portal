import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/loginUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      // console.log(data);     

      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("isLoggedIn", "true");
        toast.success("Login Successful!");
        navigate('/page');
      } else {
        toast.error("Login failed");
      }

    } catch (error) {
      console.error("Login Error:", error);
      toast.error("Something went wrong while logging in.");
    }
  };

  return (
    <div className="h-[100vh] bg-[#F5D042] gap-3 flex flex-col justify-center items-center">
      <p className="text-3xl text-center font-semibold">LOGIN</p>
      <form className="flex flex-col gap-3" onSubmit={handleLogin}>
        <div>
          <p className="font-medium text-xl">Email</p>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            required
            className="w-[20vw] rounded p-4 border-[#bce0fd] border-[3px] h-[6vh]"
          />
        </div>

        <div>
          <p className="font-medium text-xl">Password</p>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
            className="w-[20vw] rounded p-4 border-[#bce0fd] border-[3px] h-[6vh]"
          />
        </div>

        <button type="submit" className="bg-[#0A174E] w-[20vw] h-[6vh] rounded text-white font-semibold cursor-pointer hover:bg-[#0a164ed0]">
          Submit
        </button>
      </form>

      <p>
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-500 underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
