import logo from './logo.svg';
//import {palavras} from './data';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
<<<<<<< HEAD
import MenuInicial, { ToogleMenu } from './components/menuInicial';
=======
import Menu from './components/Menu';
<<<<<<< HEAD
>>>>>>> 8a0101a62d739891e7398604f387f2a7bd34f158
=======
import ListaWords from './components/ListaWords';
>>>>>>> e5c0c5f082f0f8d8322e475e9146ec036ef448d4

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
<<<<<<< HEAD
>>>>>>> 8a0101a62d739891e7398604f387f2a7bd34f158
=======
    <ListaWords />
>>>>>>> e5c0c5f082f0f8d8322e475e9146ec036ef448d4
    <Footer />
    </div>
  );
}

export default App;
