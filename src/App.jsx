import { createHashRouter, RouterProvider } from "react-router"
import Homepage from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import Services from "./pages/Services"


// Hash-based URLs work on GitHub Pages without server-side route rewrites.
const router = createHashRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/projects",
    element: <Projects />
  },
  {
    path: "/services",
    element: <Services />
  }
])

function App() {

  return <RouterProvider router={router}/>
  
}

export default App;
