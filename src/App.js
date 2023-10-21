import './App.css';
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from 'react-redux';
import store from "./utilis/store"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from "./components/MainContainer"
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
  path: "/",
  element: <Body/>,
  children: [
    {
      path:"/",
      element: <MainContainer/>
    },
    {
      path:"/Watch",
      element: <WatchPage />,
    },
  ],
},
]);

function App() {
  return (
    <Provider store={store}>
    <div>
      <Head />
      <RouterProvider router={appRouter}/>


          {/* 
        * head
        * body
        * sidebar
           -menu-Items
        * main container
           -button list
           - video container 
              - video cards      
      */}
    </div>
    </Provider>
  );
}



export default App;


