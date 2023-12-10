import './App.css'
import React, {useEffect, useState} from "react";
import IMovie from "./components/movieType/movieInterface.tsx";
import DisplayForm from "./components/formToDisplay/displayForm.tsx";
import postCreatedForm from "./callToDatabase/postMovie.tsx";
import deleteMovie from "./callToDatabase/deleteMovies.tsx";
import getMovies from "./callToDatabase/getMovies.tsx";
import putMovie from "./callToDatabase/putMovie.tsx";


const initialEditMode = {
    id: -1,
    image: '',
    nickname: '',
    movie: '',
    review: '',
    evaluation: 1,
}

function App() {
    const [currentUser, setCurrentUser] = useState('');
    const [movieToDiscuss, setMovieToDiscuss] = useState('');
    const [movieReview, setMovieReview] = useState('');
    const [movieEvaluation, setMovieEvaluation] = useState(1);
    const [imageUrl, setImageUrl] = useState('');
    const [movies, setMovies] = useState<IMovie[]>([]);

    const [editMode, setEditMode] = useState<IMovie>(initialEditMode)


    useEffect(() => {
        getMovies(setMovies);
    }, [])


    let currentId = 0;

    if (movies !== null) {
        currentId += movies.length;
    }

    const createMovieForm = () => {
        const newMovie = {
            id: currentId + 1,
            nickname: currentUser,
            movie: movieToDiscuss,
            review: movieReview,
            evaluation: movieEvaluation,
            image: 'https://images.pexels.com/photos/5662857/pexels-photo-5662857.png?cs=srgb&dl=pexels-tima-miroshnichenko-5662857.jpg&fm=jpg'
        };

        console.log('newMovie', newMovie);

        //post data in DB
        postCreatedForm(newMovie);
        getMovies(setMovies); //populate setMovies

        console.log('createMovieForm CREATED', newMovie);

        setCurrentUser('');
        setMovieToDiscuss('');
        setMovieReview('');
        setMovieEvaluation(1);
        setImageUrl('');
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();

        createMovieForm();
    }

    const editCurrentMovie = (movie: IMovie) => {
        setEditMode( {
            id: movie.id,
            nickname: movie.nickname,
            movie: movie.movie,
            review: movie.review,
            evaluation: movie.evaluation,
            image: movie.image
        })
        console.log('editMode',editMode)
        // putMovie(movie.id, () => getMovies(setMovies)) // SHOULD NOT BE CALLED HERE?
        console.log('UPDATE TRIGGER')
    }

    const deleteCurrentMovie = (id: number) => {
        //delete movie with passed id
        deleteMovie(id, ()  => getMovies(setMovies))
        console.log('DELETE TRIGGER')
    }

    // const handleSave = (id: number) => {
    //     putMovie(movie.id, () => getMovies(setMovies)) // SHOULD NOT BE CALLED HERE?
    // }

    return (
        <>
          <section>
              <div className="js-movie-container movie-container">
                  <div className="createdForm">
                      {/*{display all movie reviews}*/}
                      { movies && movies.map((movie: IMovie, key: number) => (
                          <DisplayForm key={key} movieToDisplay={movie} deleteCurrentMovie={deleteCurrentMovie} editMovie={editCurrentMovie}/>
                      ))}
                  </div>
              </div>
          </section>


          <form className="form-container" onSubmit={handleSubmit}>
              <h2>Add new movie</h2>
              <label htmlFor="nickname">Your Nickname:</label>
              <input
                  type="text"
                  name="nickname"
                  value={currentUser}
                  onChange={(event) => {
                      setCurrentUser(event.target.value);
                  }}
                  placeholder="Enter your nickname"
                  className="review-main-details"
              />

              <label htmlFor="movie title">Enter Movie:</label>
              <input
                  type="text"
                  name="movie title"
                  value={movieToDiscuss}
                  onChange={(event) => {
                      setMovieToDiscuss(event.target.value);
                  }}
                  placeholder="Movie to be discussed"
                  className="review-main-details"
              />

              <label htmlFor="review">Your review:</label>
              <textarea
                  name="review"
                  rows={4}
                  cols={50}
                  value={movieReview}
                  onChange={(event) => {
                      setMovieReview(event.target.value)
                  }}
                  placeholder="Enter your thoughts"
                  className="review-main-details"
                  maxLength={200}
              ></textarea>

              <label htmlFor="movie score">Movie score:</label>
              <input
                  type="number"
                  name="movie score"
                  value={movieEvaluation}
                  onChange={(event) => {
                      setMovieEvaluation(Number(event.target.value));
                  }}
                  placeholder="Evaluation (1-10)"
                  min="1"
                  max="10"
                  className="review-main-details"
              />

              <label htmlFor="image">Image URL:</label>
              <input
                  type="text"
                  id="image"
                  name="image"
                  value={imageUrl}
                  onChange={(event) => {
                      setImageUrl(event.target.value);
                  }}
                  className="review-main-details"
                  placeholder="Post image URL"
              />

              <button className="submit-button">Submit</button>
          </form>
            {editMode.id > -1 && (
                <form className='editForm' onSubmit={(event) => {
                    event.preventDefault()
                    // putMovie(editMode.id, () => getMovies(setMovies))

                    const newEditedMovie = movies.map((movie: IMovie) => {
                        if (movie.id === editMode.id) {
                            return {
                                ...movie,
                                nickname: editMode.nickname,
                                movie: editMode.movie,
                                review: editMode.review,
                                evaluation: editMode.evaluation,
                                image: editMode.image
                            }
                        }
                        return movie
                    })
                    setMovies(newEditedMovie)
                    putMovie(editMode, () => getMovies(setMovies))
                    setEditMode(initialEditMode)
                }}>
                    <h1>Edit movie</h1>
                    <input type='text'
                           name='nickname'
                           value={editMode.nickname}
                           onChange={(e) => {
                               setEditMode({
                                   ...editMode,
                                   nickname: e.target.value
                               })
                           }}
                    />
                    <input type='text'
                           name='movie'
                           value={editMode.movie}
                           onChange={(e) => {
                               setEditMode({
                                   ...editMode,
                                   movie: e.target.value
                               })
                           }}
                    />
                    <input type='text'
                           name='review'
                           value={editMode.review}
                           onChange={(e) => {
                               setEditMode({
                                   ...editMode,
                                   review: e.target.value
                               })
                           }}
                    />
                    <input type='number'
                           name='evaluation'
                           value={editMode.evaluation}
                           onChange={(e) => {
                               setEditMode({
                                   ...editMode,
                                   evaluation: (Number(e.target.value))
                               })
                           }}
                    />
                    <input type='text'
                           name='image'
                           value={editMode.image}
                           onChange={(e) => {
                               setEditMode({
                                   ...editMode,
                                   image: e.target.value
                               })
                           }}
                    />
                    <button>Save</button>
                </form>
            )}
      </>
    )
}

export default App
