import './App.css'
import axios from 'axios'
import React, {useState} from "react";
import IMovie from "./components/movieType/movieContainer.tsx";
import DisplayForm from "./components/formToDisplay/displayForm.tsx";
import postCreatedForm from "./callToDatabase/postMovies.tsx";
import getAllMovies from "./callToDatabase/getMovies.tsx";
import deleteMovies from "./callToDatabase/deleteMovies.tsx";


function App() {
    const [currentUser, setCurrentUser] = useState('');
    const [movieToDiscuss, setMovieToDiscuss] = useState('');
    const [movieReview, setMovieReview] = useState('');
    const [movieEvaluation, setMovieEvaluation] = useState(1);
    const [imageUrl, setImageUrl] = useState('');

    const [fullReview, setFullReview] = useState<IMovie[]>([]);

    let currentId = 1;
    const { movies } = getAllMovies();

    if (movies !== null) {
        currentId += movies.length;
    }

    const createMovieForm = () => {
        const newMovie = {
            id: currentId,
            nickname: currentUser,
            movie: movieToDiscuss,
            review: movieReview,
            evaluation: movieEvaluation,
            image: 'https://images.pexels.com/photos/5662857/pexels-photo-5662857.png?cs=srgb&dl=pexels-tima-miroshnichenko-5662857.jpg&fm=jpg'
        };

        console.log('newMovie', newMovie);

        //post data in DB
        postCreatedForm(newMovie);

        //update data locally
        console.log('createMovieForm CREATED', newMovie);
        setFullReview([...fullReview, newMovie]);

        console.log('fullReview', fullReview);
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

    // if (movies !== null) {
    //     const deleteMovieFromLoaded = (id: number) => {
    //         setFullReview(fullReview.filter( (movie) => {
    //             return movie.id !== id;
    //         }))
    //     }
    // }



    const deleteCurrentMovie = (id: number) => {
        setFullReview(fullReview.filter( (movie) => {
            return movie.id !== id;
        }))
        //delete movie with passed id
        deleteMovies(id);
    }

    return (
        <>
          <section>
              <div className="js-movie-container movie-container">
                  <div className="createdForm">
                      {/*{display data from db}*/}
                      { movies && movies.map((movie: IMovie, key: number) => (
                          <DisplayForm key={key} movieToDisplay={movie} deleteCurrentMovie={deleteCurrentMovie}/>
                      ))}

                      {/*{display data when submit button triggered}*/}
                      { fullReview.map((movie: IMovie, key: number) =>
                      <DisplayForm key={key} movieToDisplay={movie} deleteCurrentMovie={deleteCurrentMovie}/>)}
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
