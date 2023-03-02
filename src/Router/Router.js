import ProjectDetails from "../Components/Projects/ProjectDetails/ProjectDetails";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../Components/Home/Home");
const { default: Main } = require("../Layout/Mani/Main");

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <p>error</p>,
    children: [
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/details/:id',
        element: <ProjectDetails></ProjectDetails>,
        loader: ({params}) => fetch(`https://assignment-server-iota.vercel.app/projects/${params.id}`)
      },
      {
        path: '/blog',
        element: <p>Blog section</p>
      },
      // {
      //   path: '/blog',
      //   element: <Blog></Blog>
      // },
      // {
      //   path: '/login',
      //   element: <Login></Login>
      // },
      // {
      //   path: '/signup',
      //   element: <SignUp></SignUp>
      // },
      // {
      //   path: '/advertised',
      //   element: <AdvertistMent></AdvertistMent>
      // },
      // {
      //   path: 'products/category/:id',
      //   element: <CategoryItems></CategoryItems>,
      //   loader: ({params}) => fetch(`https://final-project-server-zeta.vercel.app/products/category/${params.id}`)
      // },
      // {
      //   path: 'home/category/:id',
      //   element: <CategoryItems></CategoryItems>,
      //   loader: ({params}) => fetch(`https://final-project-server-zeta.vercel.app/products/category/${params.id}`)
      // },
      // {
      //   path: '/category/:id',
      //   element: <CategoryItems></CategoryItems>,
      //   loader: ({params}) => fetch(`https://final-project-server-zeta.vercel.app/products/category/${params.id}`)
      // },
    ]
  }
  
])