import { useState } from "react";
export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form className="register">
      <h1>Regiser</h1>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <button>Regiser</button>
    </form>
  );
}
