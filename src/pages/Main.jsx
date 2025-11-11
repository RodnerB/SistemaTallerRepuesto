
import './Main.css'
import Header from '../components/Header.jsx';
import { mainButtons } from '../constants/buttons.js';
function Main() {
    const [principalBtn, secundaryBtn] = mainButtons();
    return (
        <main className='main'>
            <Header title="DashBoard" 
            principalBtn={principalBtn} 
            secundaryBtn={secundaryBtn}
            />
        </main>
    )

}

export default Main;