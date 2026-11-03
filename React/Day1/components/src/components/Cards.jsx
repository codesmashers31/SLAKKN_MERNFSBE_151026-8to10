import cardone from '../assets/cards/baby_crystal_WEB-1.avif'
import cardtwo from '../assets/cards/pet_crystal_WEB-1.avif'
import cardthree from '../assets/cards/pharmacy-WEB.avif'
import cardfour from '../assets/cards/pharmacy-WEB.avif'

const Cards = () => {
  return (
    <>
    <div className='p-10 flex gap-6 justify-center items-center'>
        <div>
        <img src={cardone} alt="" />
        </div>
         <div>
        <img src={cardtwo} alt="" />
        </div>
         <div>
        <img src={cardthree} alt="" />
        </div>
         <div>
        <img src={cardfour} alt="" />
        </div>
    </div>
    </>
  )
}

export default Cards