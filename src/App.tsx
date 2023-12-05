import './App.css'
import React, {useEffect, useState} from "react";
import IMovie from "./components/movieType/movieInterface.tsx";
import DisplayForm from "./components/formToDisplay/displayForm.tsx";
import postCreatedForm from "./callToDatabase/postMovies.tsx";
import deleteMovies from "./callToDatabase/deleteMovies.tsx";
import getMovies from "./callToDatabase/getMovies.tsx";


function App() {
    const [currentUser, setCurrentUser] = useState('');
    const [movieToDiscuss, setMovieToDiscuss] = useState('');
    const [movieReview, setMovieReview] = useState('');
    const [movieEvaluation, setMovieEvaluation] = useState(1);
    const [imageUrl, setImageUrl] = useState('');
    const [movies, setMovies] = useState<IMovie[]>([]);

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


    const deleteCurrentMovie = (id: number) => {
        //delete movie with passed id
        deleteMovies(id, ()  => getMovies(setMovies))
        console.log('DELETE TRIGGER')
    }

    return (
        <>
          <section>
              <div className="js-movie-container movie-container">
                  <div className="createdForm">
                      {/*{display all movie reviews}*/}
                      { movies && movies.map((movie: IMovie, key: number) => (
                          <DisplayForm key={key} movieToDisplay={movie} deleteCurrentMovie={deleteCurrentMovie}/>
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
      </>
    )
}

export default App
