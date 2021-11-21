import { Container } from "./styled"
import { useEffect, useState } from "react";
import Company from "./comp";


export default function Home(){

    const [infoa, setInfoa] = useState([]);
    const [infob, setInfob] = useState([]);
    const [infoc, setInfoc] = useState([]);
    const [infod, setInfod] = useState([]);

    const Infoa = () => {
        setInfoa([
            {
                name: "GameBud",
                logo: "/assets/images/INFOA-GAMEBUD.svg",
                link: "https://gamebudfinal.netlify.app/"
            },
            {
                name: "Destiny",
                logo: "/assets/images/INFOA-DESTINY.svg",
                link: "https://destinyfrei.netlify.app/"
            },
            {
                name: "Enlox",
                logo: "/assets/images/INFOA-ENLOX.svg",
                link: "https://enloxx.netlify.app/"
            },
            {
                name: "Sistema de Padaria FREI",
                logo: "/assets/images/frei.svg",
                link: "https://618e53cb00976e0008c6634d--sistema-de-padaria.netlify.app/"
            }
        ])
    }


    const Infob = () => {
        setInfob([
            {
                name: "Amaze",
                logo: "/assets/images/INFOB-AMAZE.svg",
                link: "https://amaze-tcc.netlify.app/"
            },
            {
                name: "Movies World",
                logo: "/assets/images/INFOB-MOVIEWORLD.svg",
                link: "https://romantic-visvesvaraya-389409.netlify.app/"
            },
            {
                name: "Hora de Mudar",
                logo: "/assets/images/INFOB-HORADEMUDAR.svg",
                link: "https://horademudar.netlify.app/"
            },
            {
                name: "Adot Petz",
                logo: "/assets/images/INFOB-ADOTPETZ.svg",
                link: "https://adotpetz.netlify.app/"
            }
        ])
    }

    const Infoc = () => {
        setInfoc([
            {
                name: "Bookly",
                logo: "/assets/images/INFOC-BOOKLY.svg",
                link: "https://bookly-by-tecdev.netlify.app/"
            },
            {
                name: "New Side",
                logo: "/assets/images/INFOC-NEWSIDE.svg",
                link: "https://tccinsf-newside.netlify.app/"
            },
            {
                name: "TuriSPace",
                logo: "/assets/images/INFOC-TURISPACE.svg",
                link: "https://turispace.netlify.app/"
            },
            {
                name: "Lusset",
                logo: "/assets/images/frei.svg",
                link: "https://lusset-models.netlify.app/"
            },
            {
                name: "Jadde'sFood",
                logo: "/assets/images/frei.svg",
                link: "https://jaddes-food.netlify.app/"
            },
            {
                name: "AllMarket",
                logo: "/assets/images/INFOC-TECNOTEAM.svg",
                link: "https://allmarket.netlify.app/"
            },
            {
                name: "Local Jobs",
                logo: "/assets/images/INFOC-LOCALJOBS.svg",
                link: "https://localjobs.netlify.app/"
            },
            {
                name: "Women",
                logo: "/assets/images/INFOC-WOMEN.svg",
                link: "https://ntc-nsfatima.netlify.app/"
            }
        ])
    }

    const Infod = () => {
        setInfod([
            {
                name: "INFO ANIMES",
                logo: "/assets/images/INFOD-INFOANIMES.svg",
                link: "https://infooanimes.netlify.app/home"
            },
            {
                name: "Sweet Cherry",
                logo: "/assets/images/INFOD-SWEETCHERRY.svg",
                link: "https://sweetcheeryv8.netlify.app/"
            },
            {
                name: "Leones",
                logo: "/assets/images/INFOD-LEONES.svg",
                link: "https://leonessalaodebeleza.netlify.app/"
            },
            {
                name: "Search Jobs",
                logo: "/assets/images/INFOD-SEARCHJOB.svg",
                link: "https://insf-searchjob.netlify.app/tela%20de%20redirecionamento/"
            }
        ])
    }



    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    const target = document.querySelectorAll('[data-anime]')
    const animationClass = "animate"

    function animeScroll() {
        const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);

        target.forEach(function(element){
            if((windowTop) > element.offsetTop) {
                element.classList.add(animationClass)
            } else {
                element.classList.remove(animationClass)
            }
        })
    }

    window.addEventListener('scroll', function() {
        animeScroll()
    })

    useEffect(() => {
        Infoa()
        Infob()
        Infoc()
        Infod()
    }, [])

    return(
        <Container>
            <div className="header">
                <div>
                    <div className="title"> Trabalho de conclusão de curso - Informática </div>
                    <hr/>
                    <div className="text">
                        Este site tem como objetivo listar de maneira rápida e fácil, 
                        os respectivos TCCs dos alunos de Informática 
                        do Instituto Social Nossa Senhora de Fátima.
                    </div>
                </div>
                <img className="logo-frei" src="/assets/images/frei.svg" alt="logo-frei"/>
            </div>
            <div className="body">
                <div className="class">
                    <div className="title-class"> INFO-A </div>
                    <hr className="hr-class"/>
                    <div className="scroll"> 
                        {infoa.map(item => 
                             <Company empresa={item}/>
                        )}
                    </div>
                </div>
                <div className="class">
                    <div className="title-class"> INFO-B </div>
                    <hr className="hr-class"/>
                    <div className="scroll"> 
                        {infob.map(item => 
                             <Company empresa={item}/>
                        )}
                    </div>
                </div>
                <div className="class">
                    <div className="title-class"> INFO-C </div>
                    <hr className="hr-class"/>
                    <div className="scroll"> 
                        {infoc.map(item => 
                             <Company empresa={item}/>
                        )}
                    </div>
                </div>
                <div className="class">
                    <div className="title-class"> INFO-D </div>
                    <hr className="hr-class"/>
                    <div className="scroll"> 
                        {infod.map(item => 
                             <Company empresa={item}/>
                        )}
                    </div>
                </div>
                <div className="align-button">
                    <button className="" data-anime onClick={scrollTop}> <img src="/assets/images/button.svg" alt="button"/> </button>
                </div>    
            </div>
            <div className="footer">
                <div className="text-footer"> Todos os Direitos Reservados Por Intituto Social Nossa Senhora de Fátima © </div>
            </div>
        </Container>
    )
}