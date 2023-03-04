import React, {useState} from 'react';
import Expenses from './Components/Expenses/Expenses';
import NewExpenses from './Components/NewExpenses/NewExpenses';
const Dummy_Expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount : 94.12,
    date: new Date(2020,7,14),
  },
  {
    id: 'e2',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021,5,23),
  },
  {
    id: 'e3',
    title: 'New Dress',
    amount: 895.67,
    date: new Date(2022,9,6),
  },
  {
    id: 'e4',
    title: 'New Desk',
    amount: 594.86,
    date: new Date(2021,4,21),
  },
  {
    id:'e5',
    title: 'Tea Machine',
    amount: '876.93',
    date: new Date(2019,5,23),
  },
  {
    id:'e6',
    title: 'Bicycle',
    amount: '212.56',
    date: new Date(2019,6,25),
  },
  {
    id:'e7',
    title: 'Watch',
    amount: '23.43',
    date: new Date(2019,3,28),
  },
  {
    id:'e8',
    title: 'Photo Frame',
    amount: '12.43',
    date: new Date(2019,9,18),
  },
  {
    id:'e9',
    title: 'Laptop',
    amount: '295.43',
    date: new Date(2020,11,9),
  },
  {
    id:'e10',
    title: 'Desktop',
    amount: '125.34',
    date: new Date(2022,6,12),
  },
  
]

const App = () => {
     const [expenses,initialExpenses] = useState(Dummy_Expenses);

    const addExpenseHandler = (expense) => {
        initialExpenses((prevExpenses) => {
          return [expense,...prevExpenses]
        });
    };
  return(
    <>
       <NewExpenses onAddExpense = {addExpenseHandler}/>
       <Expenses items = {expenses}/>
    </>
  )
}
export default App;
