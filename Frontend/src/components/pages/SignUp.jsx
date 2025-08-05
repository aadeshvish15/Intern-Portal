import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const SignUp = () => {

  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { name, email, password } = Object.fromEntries(formData);

    try {
      const response = await fetch(`http://localhost:4000/api/v1/createUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
      });

      const data = await response.json();
      if (data.success) {
        toast.success("User registered successfully!.You can login now.");
        e.target.reset(); // clear form
        navigate("/");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("An error occurred while registering.");
    }
  };

  return (
    <div className="h-[100vh] bg-[#F5D042] gap-3 flex flex-col justify-center items-center">
      <p className="text-3xl text-center font-semibold">CREATE AN ACCOUNT</p>
      <form className="flex flex-col gap-3" onSubmit={handleForm}>
        <div>
          <p className="font-medium text-xl">Username</p>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            required
            className="w-[20vw] rounded p-4 border-[#bce0fd] border-[3px] h-[6vh]"
          />
        </div>

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

      <h2 align="center" className="font-semibold text-2xl mt-4">OR</h2>
      <p>
        Have an account? <Link to="/" className="text-blue-500 underline">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
