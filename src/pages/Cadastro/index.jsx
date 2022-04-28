import Header from "../../components/Header";
import FormCadastro from "../../components/Form/FormCadastro";
import Footer from "../../components/Footer";
import Carregando from "../../components/Carregando";

function Cadastro({changeTheme}){
    const style = {
        height: "70px",
    }

    return(
        <>
            {/* <Header btnInicial={{display: "none"}} btnVoltar={{display: "none"}} btnHome={{display: "none"}} btnPortfolio={{display: "none"}} btnSair={{display: "none"}} className={"btn custom-btn styleHeader"} style={style} div={{display:"none"}} login="Login" changeTheme={changeTheme}/>
            <FormCadastro />
            <Footer /> */}
            <Carregando />
        </>
    );
}

export default Cadastro;