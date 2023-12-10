import IMovie from "../movieType/movieInterface.tsx";

interface FormValues {
    movieToDisplay: IMovie;
    deleteCurrentMovie(id: number): void;
    editMovie(movie: IMovie): void;
}

const DisplayForm = ({movieToDisplay, deleteCurrentMovie, editMovie}: FormValues) => {
    return (
        <div>
            <img src={movieToDisplay.image} alt="Image here" width={200}/>
            <p>User: {movieToDisplay.nickname}</p>
            <p>Movie name: {movieToDisplay.movie}</p>
            <p>{movieToDisplay.review}</p>
            <p>{movieToDisplay.evaluation} out of 10</p>
            <button onClick={ () => {
                deleteCurrentMovie(movieToDisplay.id)
                console.log('BUTTON DELETE CLICKED')
            }}>Delete</button>
            <button onClick={ () => {
                // EDIT BUTTON LOGIC HERE
                editMovie(movieToDisplay)
                console.log('BUTTON EDIT CLICKED')
            }}>Edit</button>
        </div>
    )
}

export default DisplayForm