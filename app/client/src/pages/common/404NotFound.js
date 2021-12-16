import { Link } from "react-router-dom";


const NotFound = props => {



    return (
        <div className="container text-white mt-5">
        <div className="row">
            <div className="col-md-12">
                <div className="error-template">
                    <h1>
                        Oops!</h1>
                    <h2>
                        404 Not Found</h2>
                    <div className="error-details">
                        Sorry, an error has occured, Requested page not found!
                    </div>
                    <div >
                        <Link to="http://www.jquery2dotnet.com" className="btn btn-danger btn-lg mt-1">
                            Take Me Home 
                        </Link>
                    </div>
                </div>
            </div>
        </div>  
    </div>
    )
}

export default NotFound;