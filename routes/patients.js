import express from 'express';

const router = express.Router();

const patients = [
    {id : 1 ,name : 'Faith', age : 19 , height : 157 , weight : 59},
    {id : 2, name : 'Levi', age : 17 , height : 170 , weight : 50}
];

router.get('/', (req, res) => {
    res.status(200).send(patients);
});

router.post('/', (req, res) => {
    const patient = req.body;
    patients.push(patient);
    res.status(201).send("User added succesfully");
});

router.get('/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    const patient = patients.find(p=> p.id == id);
    if(!patient){
        res.status(404).send("The patient is not found");

    }
    res.send(patient);
});
router.put('/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    const patient = patients.find(t=> t.id == id);
    const updated= req.body;
    if(!patient){
        res.status(404).send("Patient was not found");
    }
    patient.id = updated.id;
    patient.name = updated.name;
    patient.age = updated.age;
    patient.height = updated.height;
    patient.weight = updated.weight;
    res.status(200).send("Patient succesfully updated!");
});
router.delete('/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    const index = patient.findIndex(p=> p.id == id);
    if(index == -1){
        res.status(404).send("Patient not found");
    }
    patients.splice(index, 1);
    res.send("Student succesfully deleted");
});
export default router;
