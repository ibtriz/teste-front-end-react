
import car1 from "../../assets/car1.png";
import iconDate from "../../assets/icons/Vector.png";
import iconSpeed from "../../assets/icons/Vector-1.png";
import iconPower from "../../assets/icons/Vector-2.png";
import iconCapacity from "../../assets/icons/Vector-3.png";
import chevronLeft from "../../assets/bi_chevron-left.png";
import chevronRigth from "../../assets/bi_chevron-right.png";
import { CardsSection } from '../../styles/cards';

export function Cards(){
    return(
        <CardsSection>
            <img alt='chevron' src={chevronLeft} id='chevron-left'></img>
        <div className='container-cars'>
            <div className='card-car'>
            <img src={car1} alt='car' className='car-img'></img>
                <h3>Mustang</h3>
            <span><img class="icon" alt='icon' src={iconDate}></img>2015</span>
            <span><img class="icon" alt='icon' src={iconSpeed}></img>180 Km/h</span>
            <span><img class="icon" alt='icon' src={iconPower}></img>9/10</span>
            <span><img class="icon" alt='icon' src={iconCapacity}></img>8/10</span>

            <button className='buttom-see-car'>Ver Carro</button>

            </div>

            <div className='card-car'>
                <img src={car1} alt='car' className='car-img'></img>
                <h3>Mustang</h3>
            <span><img class="icon" alt='icon' src={iconDate}></img>2015</span>
            <span><img class="icon" alt='icon' src={iconSpeed}></img>180 Km/h</span>
            <span><img class="icon" alt='icon' src={iconPower}></img>9/10</span>
            <span><img class="icon" alt='icon' src={iconCapacity}></img>8/10</span>

            <button className='buttom-see-car'>Ver Carro</button>

            </div>

            <div className='card-car'>
                <img src={car1} alt='car' className='car-img'></img>
                <h3>Mustang</h3>
            <span><img class="icon" alt='icon' src={iconDate}></img>2015</span>
            <span><img class="icon" alt='icon' src={iconSpeed}></img>180 Km/h</span>
            <span><img class="icon" alt='icon' src={iconPower}></img>9/10</span>
            <span><img class="icon" alt='icon' src={iconCapacity}></img>8/10</span>

            <button className='buttom-see-car'>Ver Carro</button>

            </div>
        </div>
        <img alt='chevron' src={chevronRigth} id='chevron-rigth'></img>
        </CardsSection>
    )
}