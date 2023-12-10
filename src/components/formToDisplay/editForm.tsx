// import IMovie from "../movieType/movieInterface.tsx";
// import {useState} from "react";
// import getMovies from "../../callToDatabase/getMovies.tsx";
//
// const EditMovie = (movie: IMovie, callback: (movies: IMovie[]) => void) => {
//     const [editData, setEditData] = useState({
//         id: movie.id,
//         nickname: movie.nickname,
//         movie: movie.movie,
//         review: movie.review,
//         evaluation: movie.evaluation,
//         image: 'https://images.pexels.com/photos/5662857/pexels-photo-5662857.png?cs=srgb&dl=pexels-tima-miroshnichenko-5662857.jpg&fm=jpg'
//     })
//
//     const handleChange = (e: any) => {
//         setEditData({
//             ...editData,
//             [e.target.nickname]: e.target.value,
//             [e.target.movie]: e.target.value,
//             [e.target.review]: e.target.value,
//             [e.target.evaluation]: e.target.value,
//             [e.target.image]: e.target.value
//          })
//     }
//
//     const handeSubmit = (e: any) => {
//         e.preventDefault();
//
//         getMovies(callback);
//     }
//
//     return (
//         <form onSubmit={handeSubmit}>
//             <label>
//                 <input type="text" name="nickname" value={editData.nickname} onChange={handleChange}/>
//             </label>
//             <br />
//             <label>
//                 <input type="text" name="movie" value={editData.movie} onChange={handleChange}/>
//             </label>
//             <br />
//             <label>
//                 <textarea rows={4} cols={50} name="review" value={editData.movie} onChange={handleChange}></textarea>
//             </label>
//             <br />
//             <label>
//                 <input type="number" name="evaluation" value={editData.evaluation} onChange={handleChange}/>
//             </label>
//             <br />
//             <label>
//                 <input type="text" name="name" value={editData.image} onChange={handleChange}/>
//             </label>
//             <br />
//         </form>
//     )
// }
//
// export default EditMovie