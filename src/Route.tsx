import { useRoutes } from 'react-router-dom'
import {Home} from './pages/Home'
import ImageUpload from './pages/UploadFile'
<<<<<<< HEAD
import { Register } from './pages/Authentication'
=======
import { Blog } from './pages/Blog/SingleBlog'
import { AllBlog } from './pages/Blog/AllBlog'
>>>>>>> eb4091c5aaccd5eb184d8d11e843184fab62a092

const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
   {
    path: '/upload',
    element: <ImageUpload/>
<<<<<<< HEAD
   },  {
    path:"/register",
    element:<Register />
  }
=======
   },
   {
    path: '/blog',
    element: <Blog/>
   },
   {
    path: '/all-blog',
    element: <AllBlog/>
   }
>>>>>>> eb4091c5aaccd5eb184d8d11e843184fab62a092
  ])

  return routes
}

export default Routes
