
import "aos/dist/aos.css"; // Import AOS CSS
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';



export default function Herosection() {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    loginWithRedirect();
  };

  return (
    <div className="bg-gray-50">

 
    <section className="relative bg-gradient-to-r from-blue-500 to-green-500 text-white py-24">
      
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://unsplash.com/photos/a-dollar-bill-with-a-plant-growing-out-of-it-Y_PgbgGMfNs)"}}></div>

       
        <div className="relative container mx-auto px-4 text-center z-10">
            <h1 className="text-5xl font-extrabold leading-tight mb-6" data-aos="fade-up">
                MyFedha
            </h1>
            <p className="text-lg mb-8 text-semibold" data-aos="fade-up" data-aos-delay="200">
                Manage your income, budget, and expenses all in one place with our easy-to-use Finance Manager app.
            </p>
            <a href="#features" className="inline-block bg-white text-green-500 py-3 px-6 rounded-lg text-xl font-semibold transition-all hover:bg-green-500 hover:text-white" data-aos="fade-up" data-aos-delay="400">
                See More!
            </a>
        </div>
    </section>

    
    <section id="features" className="py-24 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12" data-aos="flip-left">App Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
                <h3 className="text-2xl font-semibold text-green-500 mb-4">Track Your Income</h3>
                <p className="text-lg text-gray-700">
                    Easily add and monitor all your sources of income, and get insights into your earnings.
                </p>
            </div>
            
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="400">
                <h3 className="text-2xl font-semibold text-green-500 mb-4">Manage Budgets</h3>
                <p className="text-lg text-gray-700">
                    Create and track budgets to ensure you're staying on top of your spending.
                </p>
            </div>
        
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="600">
                <h3 className="text-2xl font-semibold text-green-500 mb-4">Monitor Expenses</h3>
                <p className="text-lg text-gray-700">
                    Keep track of your daily, monthly, and yearly expenses with detailed reports.
                </p>
            </div>
        </div>
    </section>

  
    <section className="bg-green-500 text-white text-center py-16">
        <h2 className="text-3xl font-extrabold mb-6" data-aos="fade-up">Start Managing Your Finances Today!</h2>
        <button  onClick={handleGetStarted} className="bg-white text-green-500 py-3 px-6 rounded-lg text-xl font-semibold transition-all hover:bg-green-600 hover:text-white" data-aos="fade-up" data-aos-delay="400">
            Get Started
        </button>
    </section>

    
    <footer className="bg-gray-800 text-white text-center py-6">
        <p>© MyFedha Finance Manager. All rights reserved.</p>
    </footer>

    

</div>
  )
}
