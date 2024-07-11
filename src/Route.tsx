import { useRoutes } from 'react-router-dom'
import {Home} from './pages/Home'
import ImageUpload from './pages/UploadFile'

const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
   {
    path: '/upload',
    element: <ImageUpload/>
   }
  ])

  return routes
}

export default Routes
