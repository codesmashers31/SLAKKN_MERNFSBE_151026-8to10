
import cardsdata from '../assets/cards/unnamed.webp'
import Button from '../utils/Button'
const AboutSection = () => {
  return (
    <>
    <div className='flex justify-between items-center p-10'>
        <div className='flex flex-col p-1  gap-5'>
           <h3 className='font-bold text-5xl text-wrap'>Blinkit is an Indian quick-commerce company owned by Eternal Limited.</h3>
           <p className='text-wrap w-200'>Blinkit is an Indian quick-commerce company owned by Eternal Limited. It was founded in December 2013 and is based in Gurgaon. Customers of the company use a mobile app to order groceries and essentials online, which are sourced from the company's dark stores and delivered in 10 minutes.</p>
           <Button/>
        </div>
        <div className='w-200'>
            <img src={cardsdata} className='w-100' alt="" />
        </div>
    </div>
    </>
  )
}

export default AboutSection