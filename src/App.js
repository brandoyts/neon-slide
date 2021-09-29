import GlobalStyle from './globalStyles';
import Slider from './components/Slider/Slider';
import Container from './components/container/Container';
import Footer from './components/footer/Footer';

function App() {
    return (
        <div className='App'>
            <GlobalStyle />
            <Container>
                <Slider />
                <Footer />
            </Container>
        </div>
    );
}

export default App;
