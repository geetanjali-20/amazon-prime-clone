const MovieDetails = ({ movie }) => (
  <div className="p-6 text-white bg-[#0f171e]">
    <h3 className="text-2xl mb-2">About the Movie</h3>
    <p>{movie.longDescription}</p>
    <div className="mt-4 space-x-4">
      <span>{movie.year}</span>
      <span>{movie.duration}</span>
      <span>{movie.genre}</span>
    </div>
  </div>
);
export default MovieDetails;
