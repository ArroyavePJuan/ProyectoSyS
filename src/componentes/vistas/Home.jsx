import Header from '../Header'
import {Link} from 'react-router-dom'


const Home = () => {
    return (
        <main>
            <Header></Header>
            <section className='fondo'>
                <img className='img1' src="../src/assets/img/img1.jpg" alt="logo" />
            </section>
        </main>
    )
}

export default Home