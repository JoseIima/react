import React from "react";
import "./loginform.css"

export const PageLogin = () => {
  return (
    <div className="cover">
      <h1>Login</h1>
      <input type="text" placeholder="nome de usuário" />
      <input type="password" placeholder="senha" />

      <div className="login-btn">Login</div>
      
      <div className="alt-login"></div>

    </div>
  )
}

