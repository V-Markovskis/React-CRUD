import axios from "axios";
import IMovie from "../components/movieType/movieInterface.tsx";

const putMovie = async (editedMovie: IMovie, callback:() => void) => {
    try {
        await axios.put(`http://localhost:3000/movies/${editedMovie.id}`, editedMovie).then(() => {
            callback();
        })
    } catch (error) {
        console.error('Error updating movie', error);
    }
}

export default putMovie