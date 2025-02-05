import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Funcția pentru trimiterea formularului
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/authentication", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Permite trimiterea și setarea cookie-urilor
        body: JSON.stringify({ email, password }), // Trimite email și parola
      });

      if (!response.ok) {
        throw new Error("Autentificare eșuată!");
      }

      const data = await response.json(); // Obține răspunsul complet
      console.log("Răspuns:", data);
      alert("Autentificare reușită!");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="login-container">
      <h1>Logare</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Parolă:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Autentifică-te</button>
      </form>
    </div>
  );
};

export default Login;
