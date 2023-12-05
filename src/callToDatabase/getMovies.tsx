import IMovie from "../components/movieType/movieInterface.tsx";
const getAllMovies =  (callback: (movies: IMovie[]) => void) => {

    fetch('http://localhost:3000/movies')
        .then(response => {
            return response.json();
        })
        .then(data => {
            callback(data); // populate setMovies
            console.log('DATA FROM DB', data);
    })
}

export default getAllMovies