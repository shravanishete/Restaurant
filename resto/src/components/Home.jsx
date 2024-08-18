
import heroImage from '../assets/hero.jpg';

const Home = () => {
  return (
    <div 
      className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className='w-full lg:w-2/3 space-y-5'>
        <h1 className='text-white font-semibold text-6xl'>Your Cozy Corner for Coffee and Conversation</h1>
        <p className=' text-backgroundColor'>
          Welcome to Foodi Web! Enjoy delicious dishes in a cozy atmosphere with exceptional service.<br></br>
          Savor the flavors today!
        </p>
        <div className='mt-10 lg:pl-70'>
          <button className='py-5 px-12 text-xl lg:text-2xl border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full'>
            Order Now
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
