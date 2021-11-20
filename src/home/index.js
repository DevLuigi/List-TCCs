import { Container } from "./styled"

export default function Home(){

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    

    return(
        <Container>
            <div className="header">
                <div>
                    <div className="title"> Trabalho de conclusão de curso - Informática </div>
                    <hr/>
                    <div className="text">   
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the. 
                    </div>
                </div>
                <img className="logo-frei" src="/assets/images/frei.svg" alt="logo-frei"/>
            </div>
            <div className="body">
                <div className="class">
                    <div className="title-class"> INFO-A </div>
                    <hr className="hr-class"/>
                    <div className="scroll"> 
                        <div className="content-line">
                            <div className="align-line">
                                <img className="logo-company" src="/assets/images/gamebud.svg" alt="logo-empresa"/>
                                <div>
                                    <div className="title-company"> GameBud </div>
                                    <a href="https://gamebudfinal.netlify.app/" className="link"> https://gamebudfinal.netlify.app/ </a>
                                </div>
                            </div>    
                            <div className="circle"> </div>
                        </div>
                        <div className="content-line">
                            <div className="align-line">
                                <img className="logo-company" src="/assets/images/gamebud.svg" alt="logo-empresa"/>
                                <div>
                                    <div className="title-company"> GameBud </div>
                                    <a href="https://gamebudfinal.netlify.app/" className="link"> https://gamebudfinal.netlify.app/ </a>
                                </div>
                            </div>    
                            <div className="circle"> </div>
                        </div>
                        <div className="content-line">
                            <div className="align-line">
                                <img className="logo-company" src="/assets/images/gamebud.svg" alt="logo-empresa"/>
                                <div>
                                    <div className="title-company"> GameBud </div>
                                    <a href="https://gamebudfinal.netlify.app/" className="link"> https://gamebudfinal.netlify.app/ </a>
                                </div>
                            </div>    
                            <div className="circle"> </div>
                        </div>
                        <div className="content-line">
                            <div className="align-line">
                                <img className="logo-company" src="/assets/images/gamebud.svg" alt="logo-empresa"/>
                                <div>
                                    <div className="title-company"> GameBud </div>
                                    <a href="https://gamebudfinal.netlify.app/" className="link"> https://gamebudfinal.netlify.app/ </a>
                                </div>
                            </div>    
                            <div className="circle"> </div>
                        </div>
                    </div>
                </div>
                <div className="class">
                    <div className="title-class"> INFO-A </div>
                    <hr className="hr-class"/>
                    <div className="scroll"> 
                        <div className="content-line">
                            <div className="align-line">
                                <img className="logo-company" src="/assets/images/gamebud.svg" alt="logo-empresa"/>
                                <div>
                                    <div className="title-company"> GameBud </div>
                                    <a href="https://gamebudfinal.netlify.app/" className="link"> https://gamebudfinal.netlify.app/ </a>
                                </div>
                            </div>    
                            <div className="circle"> </div>
                        </div>
                        <div className="content-line">
                            <div className="align-line">
                                <img className="logo-company" src="/assets/images/gamebud.svg" alt="logo-empresa"/>
                                <div>
                                    <div className="title-company"> GameBud </div>
                                    <a href="https://gamebudfinal.netlify.app/" className="link"> https://gamebudfinal.netlify.app/ </a>
                                </div>
                            </div>    
                            <div className="circle"> </div>
                        </div>
                        <div className="content-line">
                            <div className="align-line">
                                <img className="logo-company" src="/assets/images/gamebud.svg" alt="logo-empresa"/>
                                <div>
                                    <div className="title-company"> GameBud </div>
                                    <a href="https://gamebudfinal.netlify.app/" className="link"> https://gamebudfinal.netlify.app/ </a>
                                </div>
                            </div>    
                            <div className="circle"> </div>
                        </div>
                        <div className="content-line">
                            <div className="align-line">
                                <img className="logo-company" src="/assets/images/gamebud.svg" alt="logo-empresa"/>
                                <div>
                                    <div className="title-company"> GameBud </div>
                                    <a href="https://gamebudfinal.netlify.app/" className="link"> https://gamebudfinal.netlify.app/ </a>
                                </div>
                            </div>    
                            <div className="circle"> </div>
                        </div>
                    </div>
                </div>
                <div className="align-button">
                    <button onClick={scrollTop}> <img src="/assets/images/button.svg" alt="button"/> </button>
                </div>    
            </div>
            <div className="footer">
                <div className="text-footer"> Todos os Direitos Reservados Por Intituto Social Nossa Senhora de Fátima © </div>
            </div>
        </Container>
    )
}