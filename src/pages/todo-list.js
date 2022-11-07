import Table from 'react-bootstrap/Table';

import TodoListItem from './todo-list-item';



export default function TodoList () {
    const list = [
        {
            "name": "приготовить ужин",
            "date": "07.11.2022.",
            "discriptions": "приготовить пиццу",
            "tags": ["на крайняк заказать"],
            "priority": "тотально важно"
          },
          {
            "name": "покормить кота",
            "date": "07.11.2022.",
            "discriptions": "кити кэт",
            "tags": ["блабла"],
            "priority": "важно"
          }
    ];



    return (
        <div>
    <Table striped bordered hover size="sm">
      <thead>
        
        <tr>
          <th>#</th>
          <th>задача</th>
          <th>дата</th>
          <th>описание</th>
          <th>пометки</th>
          <th>приоритет</th>
        </tr>
      </thead>
      <tbody>
       
      {list.map((item, index) =>(
        <TodoListItem item={item} index={index+1} key={index}></TodoListItem>
      ))}
      </tbody>
    </Table>
    </div>
  );
    }       



    
        
  
  
    

