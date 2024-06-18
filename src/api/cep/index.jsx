import React, { useState } from "react";
import axios from "axios";

export default function GetCep() {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState(null);

  async function handleAddress() {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setAddress(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>API busca CEP</h1>
      <input type="text" onChange={(e) => setCep(e.target.value)} />
      <button onClick={handleAddress}>Busque seu CEP!</button>

      {address && (
        <div>
          <p>{address.logradouro}</p>
          <p>{address.ddd}</p>
          <p>{address.bairro}</p>
          <p>{address.localidade}</p>
        </div>
      )}
    </div>
  );
}
