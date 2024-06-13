import { Route, Routes } from "react-router-dom";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";


function App() {
  return(
    <Routes>
      <Route path='/' element={<TaskList />} />
      <Route path='/add' element={<AddTask />} />
    </Routes>
  )
}

export default App;
