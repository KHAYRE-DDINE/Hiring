import "./Contact.css";
import { motion } from "framer-motion";
import Hire from "../Hire/hire";

function Contact({ navState }) {
  return (
    <motion.div
      initial={{ scale: 0, right: "50%", top: "50%" }}
      whileInView={{ scale: 1, right: 0, top: 0 }}
      className={navState ? "contact section nav" : "contact section"}
      data-index="3"
    >
      <Hire />
      <div transition={{ duration: 3 }} className="info">
        <address style={{ textTransform: "capitalize" }}>
          abdelkabir ben hafid al fihri al fassi{" "}
        </address>
        <a href="mailto:ahrarkhirdin@gmail.com">ahrarkhirdin@gmail.com</a>
        <a href="tel:+21237625661">+21237625661</a>
        <a type="button" href="#+21237625661">
          behance
        </a>
        <a type="button" href="+21237625661">
          dribble
        </a>
        <a type="button" href="+21237625661">
          contact us
        </a>
      </div>
    </motion.div>
  );
}

export default Contact;
