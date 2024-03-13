import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';
import '/src/styles/button.css'


export default function Button(props){
    return(
        <AwesomeButton type="primary">{props.content}</AwesomeButton>
    
    );
}