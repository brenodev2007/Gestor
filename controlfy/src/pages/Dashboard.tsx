
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { logout } from '../services/auth';
import { addTransaction, getTransactions } from '../services/firestore';

interface Transaction {
  id: string;
  name: string;
  value: number;
  type: 'income' | 'expense';
  createdAt: any;
}

const DashboardPage: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [newName, setNewName] = useState('');
  const [newValue, setNewValue] = useState('');
  const [newType, setNewType] = useState<'revenue' | 'expense'>('revenue');

  const [totalBalance, setTotalBalance] = useState(0);
  const [totalRevenues, setTotalRevenues] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);

  const fetchTransactions = async () => {
    const querySnapshot = await getTransactions();
    const transactionsData = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as Omit<Transaction, 'id'>)
    }));
    setTransactions(transactionsData);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  useEffect(() => {
    const calculateSummary = () => {
      const revenues = transactions
        .filter(t => t.type === 'revenue')
        .reduce((acc, t) => acc + t.value, 0);
      const expenses = transactions
        .filter(t => t.type === 'expense')
        .reduce((acc, t) => acc + t.value, 0);

      setTotalRevenues(revenues);
      setTotalExpenses(expenses);
      setTotalBalance(revenues - expenses);
    };

    calculateSummary();
  }, [transactions]);

  const handleAddTransaction = async () => {
    if (newName && newValue) {
      await addTransaction(newName, parseFloat(newValue), newType);
      setNewName('');
      setNewValue('');
      fetchTransactions();
    }
  };

  const handleLogout = async () => {
    await logout();
    window.location.href = '/login';
  };

  return (
    <Container>
      <Header>
        <Title>Dashboard</Title>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </Header>
      <Summary>
        <SummaryCard>
          <SummaryTitle>Total Balance</SummaryTitle>
          <SummaryValue>R$ {totalBalance.toFixed(2)}</SummaryValue>
        </SummaryCard>
        <SummaryCard>
          <SummaryTitle>Total Revenues</SummaryTitle>
          <SummaryValue>R$ {totalRevenues.toFixed(2)}</SummaryValue>
        </SummaryCard>
        <SummaryCard>
          <SummaryTitle>Total Expenses</SummaryTitle>
          <SummaryValue>R$ {totalExpenses.toFixed(2)}</SummaryValue>
        </SummaryCard>
      </Summary>
      <Transactions>
        <TransactionTitle>Recent Transactions</TransactionTitle>
        <TransactionList>
          {transactions.map(transaction => (
            <TransactionItem key={transaction.id}>
              <TransactionInfo>
                <TransactionName>{transaction.name}</TransactionName>
                <TransactionCategory>{transaction.type}</TransactionCategory>
              </TransactionInfo>
              <TransactionValue>R$ {transaction.value.toFixed(2)}</TransactionValue>
            </TransactionItem>
          ))}
        </TransactionList>
      </Transactions>
      <AddTransaction>
        <TransactionTitle>Add Transaction</TransactionTitle>
        <Input 
          placeholder="Name" 
          value={newName} 
          onChange={(e) => setNewName(e.target.value)} 
        />
        <Input 
          type="number" 
          placeholder="Value" 
          value={newValue} 
          onChange={(e) => setNewValue(e.target.value)} 
        />
        <Select 
          value={newType} 
          onChange={(e) => setNewType(e.target.value as 'revenue' | 'expense')} 
        >
          <option value="revenue">Revenue</option>
          <option value="expense">Expense</option>
        </Select>
        <Button onClick={handleAddTransaction}>Add</Button>
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
