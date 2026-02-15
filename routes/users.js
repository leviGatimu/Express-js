import express from 'express';

const router = express.Router();

const Tasks = [
    {id: 1, title: "Study", completed : false},
    {id: 2, title: "Homework", completed : false}

];

//Get all students
router.get('/', (req, res) => {
    console.log(Tasks);
    res.send(Tasks);
});

//Post tasks onto array
router.post('/', (req, res) => {
    const todo = req.body;
    Tasks.push(todo);
    res.send(`The todo ${todo.title} was succesfully added`)
});

//Get by id
router.get('/:id', (req , res)=> {
    const id = parseInt(req.params.id);
    const task = Tasks.find(t=> t.id == id)
     if(!task){
        res.send("Task not found");
        console.log("Task not found")
     }
      res.send(task);
     console.log(task);
});

// Update tasks
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updated = req.body;
    const task = Tasks.find(t=> t.id == id);
    if(!task){
        res.send("User not found");
    }
    task.title = updated.title
    task.completed = updated.completed;
    res.send(task);
    
});

//Delete tasks
router.delete('/:id', (req, res) => {
    const id= Number(req.params.id);
    const index = Tasks.findIndex(t=> t.id == id);

    if(index === -1){
        res.status(404).send("Task not found")
    }
    else{
        Tasks.splice(index, 1);
        res.status(200).send("Student deleted: Get to see data");
    }
});


export default router;