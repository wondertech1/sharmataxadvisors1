//import { useEffect, useState } from "react";
import { useEffect } from "react";
//import type { Schema } from "../amplify/data/resource";
//import { generateClient } from "aws-amplify/data";
import Box from '@mui/material/Box';
import { TodoCreateForm } from '../ui-components';

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

<Box component="section" sx={{ p: 2, border: 'none'}}>
        
          <TodoCreateForm />

     
     </Box>
    </main>
  );
}

export default App;
