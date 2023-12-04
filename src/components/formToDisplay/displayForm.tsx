import IMovie from "../movieType/movieContainer.tsx";

interface FormValues {
    movieToDisplay: IMovie;
    deleteCurrentMovie(id: number): void;
}

const DisplayForm = ({movieToDisplay, deleteCurrentMovie}: FormValues) => {
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
        </div>
    )
}

export default DisplayForm