const express = require('express');
const router = express.Router();

let heroes = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];

router.get('/heroes', (req, res) => {
    res.send(
        heroes
    );
});

router.get('/heroes/:id', (req, res, next) => {
    console.log(req.params.id);
    res.send(heroes.find(i => i.id == req.params.id));
});

router.delete('/heroes/:id', (req, res, next) => {
    console.log(req.params.id); 
    heroes = heroes.filter(i => i.id != req.params.id);
});

module.exports = router;
