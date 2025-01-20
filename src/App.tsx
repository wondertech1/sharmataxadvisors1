//import { useEffect, useState } from "react";
import { useEffect } from "react";
//import type { Schema } from "../amplify/data/resource";
//import { generateClient } from "aws-amplify/data";
//import Box from '@mui/material/Box';
import { TodoCreateForm } from '../ui-components';
import Grid from '@mui/material/Grid2';

//const client = generateClient<Schema>();



const App = ({ onButtonClicked2 }:{onButtonClicked2:any})=>{


  const App1 = () => {
    //alert('Hello world');
    const data = 'Appointment_success';
      onButtonClicked2(data);
  }
  //const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    //client.models.Todo.observeQuery().subscribe({
     // next: (data) => setTodos([...data.items]),
    //});
  }, []);

  //function createTodo() {
    //client.models.Todo.create({ content: window.prompt("Todo content"), Description: "Hello" });
  //}

  return (
    <main>


<Grid size={4} alignSelf='center' alignContent='center' textAlign='center' bgcolor="#d2e8f340">
          <TodoCreateForm 
          onSuccess={App1}
          overrides={{
            Name: {
              isRequired:true
            },
            Phone:{
              isRequired:true
            },
            Email:{
              isRequired:true
            },
            Preferred_DateTime: {
              isRequired:true
            },
          }}
          
          />
          </Grid>

     
    
    </main>
  );
}

export default App;
