import express from 'express';

const router = express.Router();

const todos = [
    { id: 1, name: "Finish math homework" },
    { id: 2, name: "Study PHP for exam" },
    { id: 3, name: "Push project to GitHub" },
    { id: 4, name: "Practice coding 30 minutes" },
    { id: 5, name: "Read physics notes" }
];

router.get('/', (req, res)=>{
    res.send(todos);
});
router.get('/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id == id);
    if(!todo){
        res.status(404).send("Todo not found");
    }
    res.status(201).send(todo);
});

router.post('/', (req, res)=>{
    const todo = req.body;
    if(todo.name.length < 2 || todo.id === todos.map(m => m.id)){
        return res.send("Please input longer todo");
    }
    todos.push(todo);
    res.send("Todo was succesfully added!");
});
router.put('/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    const todo = todos.find(t=> t.id == id);
    const updated = req.body;
    if(!todo){
        res.send("Student not found.");
    }
    todo.id = updated.id
    todo.name = updated.id
    res.send(`Succesfully updated ${id}`)
});
router.delete('/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    const index = todos.findIndex(t=> t.id == id);

    if(index == -1){
        res.status(404).send("Student not found");
    }
    todos.splice(index , 1);
    res.send("Student succesfully deleted!");
});


export default router;