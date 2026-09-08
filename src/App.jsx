import { createBrowserRouter, RouterProvider } from "react-router"
import Homepage from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import Services from "./pages/Services"


const router = createBrowserRouter([
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