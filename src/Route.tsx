import { useRoutes } from 'react-router-dom'
import {Home} from './pages/Home'
import ImageUpload from './pages/UploadFile'
import { Register } from './pages/Authentication'

const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
   {
    path: '/upload',
    element: <ImageUpload/>
   },  {
    path:"/register",
    element:<Register />
  }
  ])

  return routes
}

export default Routes
