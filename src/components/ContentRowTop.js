import React from 'react';
import ContentRowMovies from './ContentRowMovies'
import LastMovieInDb from './LastMovieInDb'
import GenresInDb from './GenresInDb'
import TableMovies from './TableMovies';


function ContentRowTop(){
  const cards = [
    {
      title: "Movies in Data Base",
      style: "primary",
      number: 21,
      icon: "fas fa-film"
    },
    {
      title: "Total awards",
      style: "success",
      number: 79,
      icon: "fas fa-award"
    },
    {
      title: "Actors quantity",
      style: "warning",
      number: 49,
      icon: "fas fa-user"
    }
  ]

  const name = ["Acción", "Animación", "Aventura", "Ciencia Ficción", "Comedia", "Documental", "Drama", "Fantasía", "Infantiles", "Musical"]

  return (
    <>
      {/* <!-- Content Row Top --> */}
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
      </div>

      {/* <!-- Content Row Movies--> */}

      <ContentRowMovies cards={cards}/>
      
      {/* <!-- Content Row Last Movie in Data Base --> */}

      <div className="row">
        
        <LastMovieInDb />
        
        {/* <!-- Genres in DB --> */}
        <GenresInDb genres={name}/>
        
      </div>
      
      <TableMovies />
  {/* <!--End Content Row Top--> */}
    </div>
    </>
  )

}
export default ContentRowTop;
