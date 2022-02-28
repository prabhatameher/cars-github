import logo from './logo.svg';
import './App.css';
import HeaderComponent from './Home/HeaderComponent';
import {QueryClientProvider,QueryClient} from 'react-query'
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import {Switch} from 'react-dom'
import FavouriteModal from './Home/FavouriteModal';
const queryClient=new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient} >
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HeaderComponent/>}/>
        <Route  path='favourite_cars' element={<FavouriteModal/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </QueryClientProvider>
  );
}

export default App;
