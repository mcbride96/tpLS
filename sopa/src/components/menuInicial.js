import '../assets/css/menu.css'


function MenuInicial() {
    return (
        <div>
            <h3> Menu </h3>
            <div class="MenuInicial">
                <button className="IniciaJogo editButt"> Iniciar Jogo</button>
                <button className="HighScore editButt"  > Ver Pontuações</button>
            </div>
        </div>
    )
}


export default MenuInicial;