import {useEffect, useState} from "react";
import IMovie from "../components/movieType/movieContainer.tsx";
const getAllMovies =  () => {
    const [movies, setMovies] = useState<IMovie[]>([]);


    useEffect(() => {
        fetch('http://localhost:3000/movies')
            .then(response => {
                return response.json();
            })
            .then(data => {
                setMovies(data);
                console.log('DATA FROM DB', data);
            })
    }, [])

    return { movies }
}

export default getAllMovies


// return (
//     <div>
//         {movies.map((movie: IMovie, key: number) => (
//             <DisplayForm key={key} movieToDisplay={movie} />
//         ))}
//     </div>
// );