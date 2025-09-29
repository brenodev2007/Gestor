
import React from 'react';
import styled from 'styled-components';

const DashboardPage: React.FC = () => {

  return (
    <Container>
      <Header>
        <Title>Dashboard</Title>
        <LogoutButton>Logout</LogoutButton>
      </Header>
      <Summary>
        <SummaryCard>
          <SummaryTitle>Total Balance</SummaryTitle>
          <SummaryValue>R$ 10.000,00</SummaryValue>
        </SummaryCard>
        <SummaryCard>
          <SummaryTitle>Total Revenues</SummaryTitle>
          <SummaryValue>R$ 15.000,00</SummaryValue>
        </SummaryCard>
        <SummaryCard>
          <SummaryTitle>Total Expenses</SummaryTitle>
          <SummaryValue>R$ 5.000,00</SummaryValue>
        </SummaryCard>
      </Summary>
      <Transactions>
        <TransactionTitle>Recent Transactions</TransactionTitle>
        <TransactionList>
          <TransactionItem>
            <TransactionInfo>
              <TransactionName>Salary</TransactionName>
              <TransactionCategory>Revenue</TransactionCategory>
            </TransactionInfo>
            <TransactionValue>R$ 5.000,00</TransactionValue>
          </TransactionItem>
          <TransactionItem>
            <TransactionInfo>
              <TransactionName>Rent</TransactionName>
              <TransactionCategory>Expense</TransactionCategory>
            </TransactionInfo>
            <TransactionValue>R$ 1.500,00</TransactionValue>
          </TransactionItem>
        </TransactionList>
      </Transactions>
      <AddTransaction>
        <TransactionTitle>Add Transaction</TransactionTitle>
        <Input placeholder="Name" />
        <Input placeholder="Value" />
        <Select>
          <option>Revenue</option>
          <option>Expense</option>
        </Select>
        <Button>Add</Button>
      </AddTransaction>
    </Container>
  );
};

const Container = styled.div`
  padding: 40px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  color: var(--primary-color);
`;

const LogoutButton = styled.button`
  padding: 10px 20px;
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

const Summary = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;
`;

const SummaryCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const SummaryTitle = styled.h2`
  color: #888;
  margin-bottom: 10px;
`;

const SummaryValue = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

const Transactions = styled.div`
  margin-bottom: 40px;
`;

const TransactionTitle = styled.h2`
  color: #333;
  margin-bottom: 20px;
`;

const TransactionList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TransactionItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
`;

const TransactionInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const TransactionName = styled.p`
  font-weight: bold;
`;

const TransactionCategory = styled.p`
  color: #888;
`;

const TransactionValue = styled.p`
  font-weight: bold;
`;

const AddTransaction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  padding: 10px;
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

export default DashboardPage;
