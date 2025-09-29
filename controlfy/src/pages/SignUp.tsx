
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SignUpPage: React.FC = () => {

  return (
    <Container>
      <Title>Sign Up</Title>
      <Form>
        <Input
          type="email"
          placeholder="Email"
        />
        <Input
          type="password"
          placeholder="Password"
        />
        <Button type="submit">Sign Up</Button>
      </Form>
      <StyledLink to="/login">Already have an account? Login</StyledLink>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--background-color);
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  color: var(--primary-color);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
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

const StyledLink = styled(Link)`
  margin-top: 1rem;
  color: var(--primary-color);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default SignUpPage;
