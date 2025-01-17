//import { useEffect, useState } from "react";
import { useEffect } from "react";
//import type { Schema } from "../amplify/data/resource";
//import { generateClient } from "aws-amplify/data";
//import Box from '@mui/material/Box';
import { TodoCreateForm } from '../ui-components';
import Grid from '@mui/material/Grid2';

//const client = generateClient<Schema>();

function App() {
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
          <TodoCreateForm />
          </Grid>

     
    
    </main>
  );
}

export default App;
