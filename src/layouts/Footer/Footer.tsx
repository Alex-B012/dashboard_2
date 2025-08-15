import { footerData } from "../../data/data";
import "./footer.css";

function Footer() {
   return (
      <footer className="footer__section">
         <p>{footerData}</p>
      </footer>
   )
}

export default Footer