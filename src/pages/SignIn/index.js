import React, {useState, useEffect } from 'react';
import { Container, Form } from './styles';
import api from '../../services/api';

export default function SignIn({ history }) {
  const [ username, setUsername ] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
 
    const response = await api.post('/devs', {
      username,
    });
     console.log(response)
    const { _id } = response.data

    history.push(`/dev/${_id}`)
  }

  return (
    <Container>      
      {/*<img src={logo} alt='Tindev' />*/}
       <form onSubmit={handleSubmit}>
          <input 
          placeholder="Digite seu usuário no Github"
          value={username}
          onChange={e => setUsername(e.target.value)} 
          />
          <button type='submit'>Enviar</button>
        </form>
    </Container>
  );
}
