import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tictactoe from './Components/tictactoe';
import OutraPagina from './Components/OutraPagina';

function App() {
    return (
        <Router>
          <Routes>
                <Route path="/" exact element={<Tictactoe/>} />
                <Route path="/outra-pagina" element={<OutraPagina/>} />
          </Routes>
        </Router>
    );
}

export default App;
