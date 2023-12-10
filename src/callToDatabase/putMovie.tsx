import axios from "axios";

const putMovie = async (id: number, callback:() => void) => {
    try {
        await axios.put(`http://localhost:3000/movies/${id}`).then(() => {
            callback();
        })
    } catch (error) {
        console.error('Error updating movie', error);
    }
}

export default putMovie