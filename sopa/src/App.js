import logo from './logo.svg';
//import './assets/css/app.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
<<<<<<< HEAD
import MenuInicial, { ToogleMenu } from './components/menuInicial';
=======
import Menu from './components/Menu';
>>>>>>> 8a0101a62d739891e7398604f387f2a7bd34f158

function App() {
  return (
    /* 
    == Components ==
    - Header -
      > Título
    - Menu inicial -
      > começar jogo
      > ver highscores
    - Tabuleiro de jogo -
    - Lista de palavras -
    - Pontuação final -
    - Lista de pontuações -
    - tempo de jogo -
    - seleção de nível - 
    - pop-up fim do jogo -
    - Footer -
      > "trabalho realizado por X, Y e Z no âmbito da cadeira de Linguagens Script"
    */
    <div className="App">
    <Header />
<<<<<<< HEAD
    <MenuInicial/>
=======
    <Menu />
    <Body />
>>>>>>> 8a0101a62d739891e7398604f387f2a7bd34f158
    <Footer />
    </div>
  );
}

export default App;
