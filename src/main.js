import { Header } from "../components/Header.js"
import { users } from "../utils/db.js"
import { reload } from "../utils/reload.js";


console.log(users);


const container = document.querySelector('.container')
console.log(container);

reload(users,Header,container)


import  Card  from './component/Card.js';
import  Transactions  from './component/Transactions.js';

Card();
Transactions();


