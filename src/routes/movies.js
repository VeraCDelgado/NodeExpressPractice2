const { Router } = require('express');
const router = Router();
const movies = require('../sample.json');


router.get('/', (req, res) => {
    res.json(movies);
});

router.post('/', (req, res) => {
    const { title, director, year, rating } = req.body;

    if (title && director && year && rating) {
        const id = movies.length + 1;
        const newMovie = { id, ...req.body };
        movies.push(newMovie);
        res.json(movies);


    } else {
        res.send('Wrong Request');
    }

})
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const movie = movies.find((movie) => movie.id === id);
    console.log(movie);
    if (!movie) {
        return res.status(404).json({ success: false, msg: `no existe pelicula con el id ${id}` });
    }
    const newPeople = movies.filter((movie) => movie.id !== id);
    return res.status(200).json({ success: true, data: newPeople });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, director, year, rating } = req.body;

    //revisar esto porque no funciona.
    if (title && director && year && rating) {

        const element = movies.find((movie) => movie.id === id);

        if (!element) {
            return res.status(404).json({ success: false, msg: `La persona con el id ${id} no existe` });
        }
        movies.filter((movie) => {
            if (movie.id === id) {
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });

        return res.status(200).json({ success: true, data: movies });


    }


});


module.exports = router;