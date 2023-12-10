import axios from "axios";

const postCreatedForm = async (newMovie: {nickname: string, movie: string, review: string, evaluation: number, image: string}) => {
    try {
        await axios.post('http://localhost:3000/movies', newMovie)
    } catch (error) {
        console.error('Error creating movie:', error);
    }
}

export default postCreatedForm