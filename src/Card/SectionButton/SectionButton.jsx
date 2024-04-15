import './SectionButton.css'

const SectionButton = ({textButton, colorButton}) => {
    return(
        <button className={colorButton}>{textButton}</button>
    )
}

export default SectionButton