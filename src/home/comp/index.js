import { Container } from "./styled";

export default function Company(props){
    
    return(
        <Container>
                <div className="align-line">
                    <img className="logo-company" src={props.empresa.logo} alt="logo-empresa"/>
                    <div className="content-company">
                        <div className="title-company" title={props.empresa.name}> 
                            {props.empresa.name != null && props.empresa.name.length >= 17
                                                                                     ? props.empresa.name.substr(0, 17) + "..."
                                                                                     : props.empresa.name
                            }
                        </div>
                        <a  className="link" href={props.empresa.link}> 
                            {props.empresa.link != null && props.empresa.link.length >= 33
                                                                                     ? props.empresa.link.substr(0, 33) +"..."
                                                                                     : props.empresa.link
                            } 
                        </a>
                    </div>
                </div>    
                <div className="circle"> </div>
        </Container>
    )
}