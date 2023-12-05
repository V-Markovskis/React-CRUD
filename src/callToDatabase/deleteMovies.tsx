import axios from "axios";

const deleteMovie = async (id: number, callback:() => void ) => {
    try {
        await axios.delete(`http://localhost:3000/movies/${id}`).then(() => {
            callback();
        })
    } catch (error) {
        console.error('Error creating movie:', error);
    }
}

export default deleteMovie