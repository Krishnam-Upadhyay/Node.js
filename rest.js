const express = require("express")
const app = express()

let movies = [{
    id: '1',
    title: 'Tere Name',
    country: 'india',
    language: 'Hindi'
},
{
    id: '2',
    title: 'Avenger',
    country: 'America',
    language: 'English'
},
{
    id: '3',
    title: 'zinko',
    country: 'Korea',
    language: 'Korean'
},
{
    id: '4',
    title: 'intersteller',
    country: 'bhutan',
    language: 'bhutaniees'
}

]

//get the movie list
app.get('/movie', (req, res) => {
    res.json(movies)
})
//Adding the movie to our array
app.post("/movie", (req, res) => {
    const movie = req.body
    console.log(movie)

    movies.push(movie)
    res.send("Movie added on the list")


})
//search for a movie

app.get("/movie/:id", (req, res) => {
    const id = req.params.id
    for (let movie of movies) {
        if (movie.id === id) {
            res.json(movie)
            console.log(movie)
            return

        }
    }
    res.status(404).send("movie not found")
})

//
app.delete("/movie/:id", (req, res) => {
    const id = req.params.id
    movies = movies.filter(movie => {
        if (movie.id !== id) {
            return true
        }
        return false
    })
    res.send("movie deleted successfully")
})
//set the server to listen
app.listen(5000, () => {
    console.log("server listening on port number 5000: ")
})