import './App.css'
import axios from 'axios'
import ImageContainer from "./components/ImageContainer/imageContainer.tsx";
import {useState} from "react";
import IMovie from "./components/movieType/movieContainer.tsx";



function App() {
    const [nickname, setNickname] = useState('');
    const [movieToDiscuss, setMovieToDiscuss] = useState('');
    const [review, setReview] = useState('');
    const [evaluation, setEvaluation] = useState(0);
    const [imageUrl, setImageUrl] = useState('');

    const [fullReview, setFullReview] = useState<IMovie[]>([]);

    const createMovieForm = () => {
        const newMovie = {
            nickname: nickname,
            movie: movieToDiscuss,
            review: review,
            evaluation: evaluation,
            image: imageUrl
        }
        console.log('createMovieForm CREATED', createMovieForm);
        setFullReview([...fullReview, newMovie])
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();

        createMovieForm();
    }



    return (
        <>
          <section>
              {/*<ImageContainer />*/}
              <div className="js-movie-container movie-container"></div>
          </section>


          <form className="js-form-container form-container" onSubmit={handleSubmit}>
              <h2>Add new movie</h2>
              <label htmlFor="nickname">Your Nickname:</label>
              <input
                  type="text"
                  name="nickname"
                  value={nickname}
                  onChange={(event) => {
                      setNickname(event.target.value);
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
                  value={review}
                  onChange={(event) => {
                      setReview(event.target.value)
                  }}
                  placeholder="Enter your thoughts"
                  className="review-main-details"
                  maxLength={200}
              ></textarea>

              <label htmlFor="movie score">Movie score:</label>
              <input
                  type="number"
                  name="movie score"
                  value={evaluation}
                  onChange={(event) => {
                      setEvaluation(Number(event.target.value));
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
