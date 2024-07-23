// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const [role, setRole] = useState("USER");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/api/users/register", {
//         email,
//         password,
//         username,
//         role: role.toUpperCase(),
//       });
//       toast.success("Account successfully created!");
//       setTimeout(() => {
//         navigate("/login");
//       }, 2000);
//     } catch (error) {
//       console.error("Error registering user", error);
//       toast.error("Error registering user. Please try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
//         <h2 className="text-2xl mb-4">Sign Up</h2>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           className="w-full p-2 border border-gray-300 rounded mb-4"
//           required
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           className="w-full p-2 border border-gray-300 rounded mb-4"
//           required
//         />
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="Username"
//           className="w-full p-2 border border-gray-300 rounded mb-4"
//           required
//         />
//         <select
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded mb-4"
//           required>
//           <option value="USER">User</option>
//           <option value="COUNSELOR">Counselor</option>
//         </select>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded">
//           Sign Up
//         </button>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/users/register", {
        email,
        password,
        username,
        role: role.toUpperCase(),
      });
      toast.success("Account successfully created!");
      setTimeout(() => {
        if (role.toUpperCase() === "COUNSELOR") {
          navigate("/waiting-approval");
        } else {
          navigate("/login");
        }
      }, 2000);
    } catch (error) {
      console.error("Error registering user", error);
      toast.error("Error registering user. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">Sign Up</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required>
          <option value="USER">User</option>
          <option value="COUNSELOR">Counselor</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded">
          Sign Up
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
