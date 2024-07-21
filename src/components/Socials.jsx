import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const social = [
  {
    id: 0,
    url: 'https://www.instagram.com/tylicun.comm/',
    icon: <FaInstagram />,
  },
  {
    id: 1,
    url: 'https://www.facebook.com/profile.php?id=61560910383805',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.linkedin.com/company/tylicun-com/about/?viewAsMember=true',
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: 'https://x.com/tylicun',
    icon: <FaXTwitter />,
  },
];

function SocialButtons() {
  return (
    <div className="flex pt-6 justify-center">
      <ul>
        <li className="flex gap-[2vw]">
          {social.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="hover:bg-[#474748] bg-gray-800 h-[28px] w-[28px] rounded-[4px] text-white text-[16px] flex justify-center items-center shadow-gray-700 shadow-sm"
            >
              {item.icon}
            </a>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default SocialButtons;
