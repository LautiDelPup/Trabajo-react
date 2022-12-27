import "./button.css"

export default function Button (props){
    const styleButton ={
        backgroundColor: props.color,
        padding: props.padding,
    }

    return(
        <button style={styleButton}  className="btn">{props.children}</button>
    )
}

//export default Botton - se puede exportar de las dos maneras.

