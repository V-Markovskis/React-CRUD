import './App.css'
import axios from 'axios'

function App() {

  return (
      <>
          <section>
              <div className="global-test"></div>
              <div className="js-image-container"></div>
              <div className="js-movie-container movie-container"></div>
          </section>

          <div className="js-form-global-container form-global-container">
              <form className="js-form-container form-container">
                  <h2>Add new movie</h2>
                  <label htmlFor="nickname">Your Nickname:</label>
                  <input
                      type="text"
                      name="nickname"
                      placeholder="Enter your nickname"
                      className="review-main-details"
                      required
                  />

                  <label htmlFor="movie title">Enter Movie:</label>
                  <input
                      type="text"
                      name="movie title"
                      placeholder="Movie to be discussed"
                      className="review-main-details"
                      required
                  />

                  <label htmlFor="review">Your review:</label>
                  <textarea
                      name="review"
                      rows={4}
                      cols={50}
                      placeholder="Enter your thoughts"
                      className="review-main-details"
                      maxLength={200}
                      required
                  ></textarea>

                  <label htmlFor="movie score">Movie score:</label>
                  <input
                      type="number"
                      name="movie score"
                      placeholder="Evaluation (1-10)"
                      min="1"
                      max="10"
                      className="review-main-details"
                      required
                  />

                  <label htmlFor="image">Image URL:</label>
                  <input
                      type="text"
                      id="image"
                      name="image"
                      className="review-main-details"
                      placeholder="Post image URL"
                      required
                  />

                  <button className="submit-button">Submit</button>
              </form>
          </div>
      </>
  )
}

export default App
