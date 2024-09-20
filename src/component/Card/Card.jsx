import './card.css';
import { userData } from '../utils/constant/product'

const detail = ()=>{
   
}
const Card = () => {
  return (
    <>
      <div className='card-wrapper'>
        {userData.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-img">
              <img src ={item.background} alt={item.name} />
            </div>
            <div className="pro-img">
              <img src={item.profileImage} alt={item.name} />
            </div>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <button onClick={detail}>veiw detail</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
