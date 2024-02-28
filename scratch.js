let nextId = 2



/***** STATE *****/
const movieList = [
    {
        id: 0,
        title: "Return of the Jedi",
        genre: "Sci-Fi"
    },
    {
        id: 1,
        title: "The Lego Movie",
        genre: "Comedy"
    }
]

/***** RENDERING *****/
const titleInput = document.getElementById("movie-title-input")
const genreInput = document.querySelector("#movie-genre-input")
const movieTableBody = document.getElementById("movie-table-body")

function renderMovieTable() {
    // clean out any HTML inside the table from last time
    movieTableBody.innerHTML = ""
    // put it all in fresh again
    for (let i = 0; i < movieList.length; i++) {
        const movie = movieList[i]
        movieTableBody.appendChild(renderMovieRow(movie))
    }
}
// run as soon as the app loads in
// so that it can render the data from last time (eventually)
renderMovieTable()

function renderMovieRow(movieData) {
    const newBabyTr = document.createElement("tr")
    newBabyTr.innerHTML = `
        <td>${movieData.title}</td>
        <td>${movieData.genre}</td>
        <td><button id="delete-button" class="btn btn-sm btn-outline-danger">Delete</button></td>
    `

    // EVENT LISTENING
    newBabyTr.querySelector("#delete-button").addEventListener("click", () => {
        // update the state
        const indexToRemove = movieList.findIndex(movie => movie.id === movieData.id)
        movieList.splice(indexToRemove, 1)
        // rerender based on the state
        renderMovieTable()
    })

    return newBabyTr
}

/***** LISTENING *****/

function addMovie(event) {
    event.preventDefault()

    const newMovie = {
        id: nextId++, // little hacky way to get new ids for each new movie
        title: titleInput.value,
        genre: genreInput.value
    }

    // add the new movie to the state (array of movies)
    movieList.push(newMovie)

    // rerender based on the state
    renderMovieTable()

    titleInput.value = ""
    genreInput.value = ""
}