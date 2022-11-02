import Table from 'react-bootstrap/Table';




export default function TodoList () {
    const list = [
        {
            "name": "приготовить ужин",
            "date": "2 ноября",
            "discriptions": "приготовить пиццу",
            "tags": ["на крайняк заказать"],
            "priority": "тотально важно"
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
        <tr>
          <td>1</td>
          <td> {list[0].name}</td>
          <td>{list[0].date}</td>
          <td>{list[0].discriptions}</td>
          <td>{list[0].tags}</td>
          <td>{list[0].priority}</td>
        </tr>
        
          
      </tbody>
    </Table>
    </div>
  );
    }       



    
        
  
  
    

