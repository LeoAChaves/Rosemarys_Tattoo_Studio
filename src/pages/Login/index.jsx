import Header from "../../components/Header";
import FormLogin from "../../components/Form/FormLogin";
import Footer from "../../components/Footer";

function Login({changeTheme}){
    const style = {
        height: "70px",
    }

    return(
        <>
            <Header btnVoltar={{display: "none"}} btnInicial={{display: "none"}} btnPortfolio={{display: "none"}} btnLogin={{display: "none"}} btnSair={{display: "none"}} className={"btn custom-btn styleHeader"} style={style} home="Home" changeTheme={changeTheme}/>
            <FormLogin />
            <Footer />
        </>
    );
}

export default Login;