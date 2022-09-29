import './App.css';
import Activities from './components/Activities/Activities';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
        <Activities></Activities>
        <Footer></Footer>
        <ToastContainer 
          position='top-left'
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </div>
  );
}
export default App;
