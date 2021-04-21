import ContentRowMovies from "./ContentRowMovies";
import LastMovieInDb from "./LastMovieInDb";
import GenresInDb from "./GenresInDb";

function ContentRowTop() {
  return (
    <>
      <ContentRowMovies />
      <LastMovieInDb />
      <GenresInDb />
    </>
  );
}

export default ContentRowTop;
