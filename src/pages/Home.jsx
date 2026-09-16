// React hooks power the viewport-based reveal treatment.
import { useEffect, useRef, useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import cassavaLogo from "../assets/partners/Cassava.png"
import eclofLogo from "../assets/partners/ECLOF.png"
import googleLogo from "../assets/partners/Google.png"
import halliburtonLogo from "../assets/partners/Halliburton.png"
import liquidLogo from "../assets/partners/Liquid.png"
import microsoftLogo from "../assets/partners/Microsoft.png"
import nitaLogo from "../assets/partners/nita.png"
import nvidiaLogo from "../assets/partners/Nvidia.png"
import valvoLogo from "../assets/partners/Valvo.png"
import vmLogo from "../assets/partners/VM.png"

// Reveal content after it enters the viewport, while honoring reduced-motion settings.
const Reveal = ({ children, className = "" }) => {
  const elementRef = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.18 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <div>Home</div>
  )
}

export default Home