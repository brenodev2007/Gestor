
import React, { useState } from 'react';
import styled from 'styled-components';
import { signUp } from '../services/auth';

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await signUp(email, password);
      window.location.href = '/';
    } catch (err) {
      setError("Failed to sign up. Please try again.");
    }
  };

  return (
    <Container>
      <SignUpBox>
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
        <Input 
          type="password" 
          placeholder="Confirm Password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button onClick={handleSignUp}>Sign Up</Button>
        <SignInText>
          Already have an account? <a href="/login">Sign In</a>
        </SignInText>
      </SignUpBox>
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

const SignUpBox = styled.div`
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

const SignInText = styled.p`
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

export default SignUpPage;
