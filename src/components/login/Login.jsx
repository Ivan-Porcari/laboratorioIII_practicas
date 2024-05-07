import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState ("");
    const [error, setError] = useState("");
 
    const handleInputChange = (event) => {
        const value = event.target.value;
        setUsername(value);

        if (value.toLowerCase().includes("o")) {
            setError("Por favor, ¡Nombres de usuario sin la letra o!");
        } else {
          setError("");
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    
    
        if (username.trim() === "" || username.toLocaleLowerCase().includes("o")) {
            setError("");
            alert("Usuario inválido para registrarse");
        } else {
            setError("");
            alert("¡Usuario registrado correctamente!");
        }
    }

  return (
     <form onSubmit = {handleSubmit}>
        <input 
        type = "text" 
        name = "username" 
        autoComplete = "off" 
        placeholder="Ingrese su usuario"
        value = {username}
        onChange ={handleInputChange}>
        </input>
        <p>{username}</p>
        <br></br>
        <br></br>
        <button type ="submit">Registrarse</button>
        {error && <p>{error}</p>} 
        
     </form>
  );
};


export default Login