import SectionButton from "../SectionButton/SectionButton"
import './Section.css'
const Section = ({img, title, text, textButton, className, colorButton}) => {
    return(
        <>
            <article className={className}>
                <img src={img} alt="" />
                <h2>{title}</h2>
                <p>{text}</p>
                <SectionButton
                    textButton={textButton}
                    colorButton={colorButton}
                />
            </article>
        </>
    )
}

export default Section