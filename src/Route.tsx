import { useRoutes } from 'react-router-dom'
import { Home } from './pages/Home'
import ImageUpload from './pages/UploadFile'
import { Register } from './pages/Authentication/Register'
import { AllBlog } from './pages/Blog/AllBlog'
import { SingleBlog } from './pages/Blog/SingleBlog'


const Routes = () => {
  const routes = useRoutes([
    {
      path: '/chat',
      element: <Home />,
    },
    {
      path: '/upload',
      element: <ImageUpload />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/all-blog",
      element: <AllBlog/>
    },
    {
      path: "/blog-details",
      element: <SingleBlog/>
    }

  ])

  return routes
}

export default Routes
