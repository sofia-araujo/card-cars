import Section from "../Section/Section"
import './App.css'
const App = () => {
    return(
        <>
        <div className="container">
            <Section
            img='../../../images/icon-sedans.svg'
            title='SEDANS'
            textButton='Learn More'
            text='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city oro n your next Road trip.'
            className='sedans border-first'
            colorButton='sedansButton'
            />
            <Section
            img='../../../images/icon-suvs.svg'
            title='SUVS'
            textButton='Learn More'
            text='Take na SUV for its spacious interior, Power, and versatily. Perfect for your next family vacation and off-road adventures.'
            className='suvs'
            colorButton='suvsButton'
            />
            <Section
            img='../../../images/icon-luxury.svg'
            title='LUXURY'
            textButton='Learn More'
            text='Cruise in the best car brands without the bloated proces. Enjoy the enhanced comfort of a luxury rental and arrive in style.'
            className='luxury border-last'
            colorButton='luxuryButton'
            />

        </div>
        </>
    )
}

export default App