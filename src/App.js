import { BrowserRouter} from 'react-router-dom';
import Page from "./pages/Page"
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';


function App() {
  return (
    <BrowserRouter>
      <Page />
    </BrowserRouter>
  );
}

export default App;
