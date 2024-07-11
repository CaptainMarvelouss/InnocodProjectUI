import { useRoutes } from 'react-router-dom'
import {Home} from './pages/Home'
import ImageUpload from './pages/UploadFile'
import { Blog } from './pages/Blog/SingleBlog'
import { AllBlog } from './pages/Blog/AllBlog'

const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
   {
    path: '/upload',
    element: <ImageUpload/>
   },
   {
    path: '/blog',
    element: <Blog/>
   },
   {
    path: '/all-blog',
    element: <AllBlog/>
   }
  ])

  return routes
}

export default Routes
