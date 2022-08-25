import { useState } from "react";
import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { Task } from "./components/Task"
import { TaskList } from "./components/TaskList"

export interface ListTask {
  id: number;
  content: string;
  isComplete: boolean;
}

function App() {
  const [task, setTask] = useState<ListTask[]>([])

  return (
    <>
      <Header />
      <Form task={task} setTask={setTask} />
      <Task task={task} setTask={setTask} />
      <TaskList task={task} setTask={setTask} />
    </>

  )
}

export default App
