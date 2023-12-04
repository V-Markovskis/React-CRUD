import axios from "axios";

const deleteMovie = async (id: number) => {
    try {
        await axios.delete(`http://localhost:3000/movies/${id}`)
    } catch (error) {
        console.error('Error creating movie:', error);
    }
}

export default deleteMovie