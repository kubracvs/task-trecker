import axios from "axios";
import {useState}  from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


function AddTask({getTask}) {
    const [task, setTask] = useState("")
    const [date, setDate] = useState("")

    const handleSubmit =(e)=>{
    e.preventDefault();

    const newTask= {task,date}
  addNewTask(newTask)
  setDate("");
  setTask("");
    };
    const addNewTask= async(newTask) =>{
        const url ="https://63f7293ee8a73b486af1c260.mockapi.io/api/tasks"
        try{
            await axios.post(url,newTask)
        } catch (error) {
            console.log(error)
        }
        getTask();
    }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task</Form.Label>
        <Form.Control type="text" value={task} placeholder="Enter task"
        onChange={(e)=>setTask(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" value={date} placeholder=""
        onChange={(e)=>setDate(e.target.value)} />
      </Form.Group>
      <div className="text-center">
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default AddTask;
