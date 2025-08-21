import { Link } from "react-router-dom"
import "./notFound.css"

function NotFound() {
   return (
      <main className="notFound__container">
         <div className="notFound__contentArea">
            <h1 className="notFound__title">Page Unavailable</h1>
            <p className="notFound__text">The requested page could not be located. Please check out our homepage.</p>
            <Link to="/" className="notFound__btn primary-button">
               Return to Homepage
            </Link>
         </div>

      </main>
   )
}

export default NotFound