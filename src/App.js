import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Page from "./pages/Page"
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import ProjectInfo from './pages/ProjectInfo/ProjectInfo';


function App() {
  return (
    <BrowserRouter>
    <Page />
      {/* <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/project/:id" element={<ProjectInfo />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
