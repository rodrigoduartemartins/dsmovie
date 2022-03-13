import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Navbar/Pagination";
import { BASE_URL } from "utils/requests";

function listing() {
    
    axios.get(`${BASE_URL}/movies?size=10&page=1`)
        .then(response => {
            console.log(response.data);
        })
    
    return (
        <>
            <Pagination />

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div> 
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div> 
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div> 
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div> 
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div> 
               </div>
            </div>
        </>
    );
}

export default listing;