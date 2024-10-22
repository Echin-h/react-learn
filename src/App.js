import './App.css';
import routes from './router';
import {RouterProvider} from "react-router-dom";

function App() {
  return (
      <div className="app">
        <RouterProvider router={routes}>
        </RouterProvider>
      </div>
  )
}

export default App;
