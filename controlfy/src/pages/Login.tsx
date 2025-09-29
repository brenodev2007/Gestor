
import React, { useState } from 'react';
import styled from 'styled-components';
import { login } from '../services/auth';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      await login(email, password);
      window.location.href = '/';
    } catch (err) {
      setError("Failed to login. Please check your credentials.");
    }
  };

  return (
    <Container>
      <LoginBox>
        <Title>Control-Fy</Title>
        <Input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <Input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button onClick={handleLogin}>Login</Button>
        <SignUpText>
          Don't have an account? <a href="/signup">Sign Up</a>
        </SignUpText>
      </LoginBox>
    </Container>
  );
};

const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 10px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--background-color);
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: var(--primary-color);
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--secondary-color);
  }
`;

const SignUpText = styled.p`
  margin-top: 20px;
  color: #888;

  a {
    color: var(--primary-color);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default LoginPage;
