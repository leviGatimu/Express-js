import express from 'express';

const router = express.Router();

const cars = [
  { id: 1, brand: "Toyota", country: "Japan" },
  { id: 2, brand: "BMW", country: "Germany" },
  { id: 3, brand: "Ford", country: "USA" },
  { id: 4, brand: "Mercedes-Benz", country: "Germany" },
  { id: 5, brand: "Hyundai", country: "South Korea" },
  { id: 6, brand: "Tesla", country: "USA" },
  { id: 7, brand: "Honda", country: "Japan" },
  { id: 8, brand: "Volkswagen", country: "Germany" }
];

router.post('/', (req, res)=>{
    const car = req.body;
    cars.push(car);
    res.send(`The car ${car.brand} was successfully added`);
});

router.get('/', (req, res)=> {
    res.send(cars);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const car = cars.find(c => c.id === id);
    if(!car){
        return res.status(404).send("Car is not found");
    }
    res.send(car);
});

router.put('/:id', (req, res)=>{
    const id= parseInt(req.params.id);
    const updated = req.body;
    const car = cars.find(c=> c.id === id);  
    if(!car){
        res.send("Car not found");
    }
    car.brand = updated.brand;
    car.country = updated.country;
    res.send("Car was updatd");
});

router.delete('/:id', (req, res)=>{
    const id= parseInt(req.params.id);
    const car = cars.findIndex(c => c.id === id);
    if (car === -1){
        res.status(404).send("Car not found");
    }
    cars.splice(car, 1);
    res.send(`Car with id ${id} was deleted`);
})


export default router;
