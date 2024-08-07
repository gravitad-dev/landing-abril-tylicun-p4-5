import { useState } from 'react';
import data from '../../data.json';

function Last() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    validateEmail(inputValue);
  };

  const validateEmail = (input) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(regex.test(input));
  };

  const handleButtonClick = () => {
    window.location.href = `https://blog.tylicun.com/contacto/`;
  };

  return (
    <section id="suscribe">
      <div className="flex flex-col justify-center items-center py-12 pb-20 gap-2 bg-bg-secondary text-white">
        <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-semibold self-center w-1/2 text-center">
          {data['section-last'].title}
        </p>
        {/* <p className="text-xs md:text-md text-[#AEAEB6]">
          {data['section-last'].subtitle}
        </p> */}
        <div className="flex flex-col sm:flex-row items-center mt-4 sm:mt-8 gap-2 w-full justify-center">
          {/* <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="min-w-[280px] text-white bg-[#454457] p-3 px-2 border-none rounded-md border placeholder-[#DADADD]"
            placeholder={data['section-last'].input_placeholder}
          /> */}
          <a
            href={data['section-last'].button.href}
            target="_blank"
            className="rounded-md bg-[#FFC059] text-[#020718] p-3 px-6 hover:brightness-105 active:brightness-95 transition-all"
          >
            {data['section-last'].button.text}
          </a>
        </div>
        {!isValidEmail && email !== '' && (
          <p className="text-orange-500 text-sm mt-2">
            {data['section-last'].error}
          </p>
        )}
      </div>
    </section>
  );
}

export default Last;
