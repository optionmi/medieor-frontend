import { FaRegUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { RiMenu2Fill } from "react-icons/ri";
import logo from "../assets/logo.jpg";
import air from "../assets/air.png";
import fire from "../assets/fire.png";
import soil from "../assets/soil.png";
import space from "../assets/space.png";
import water from "../assets/water.png";

export default function Header() {
  return (
    <header className="py-2 text-white bg-[#a48159]">
      <div className="container flex flex-col items-center justify-between mx-auto sm:flex-row">
        <div className="flex items-center gap-4 px-4 py-2 sm:w-3/5">
          <img src={logo} alt="Medieor Logo" width={55} height={60} />
          <img src={space} alt="Space" width={55} height={55} />
          <img src={fire} alt="Fire" width={55} height={55} />
          <img src={water} alt="Water" width={55} height={55} />
          <img src={soil} alt="Soil" width={55} height={55} />
          <img src={air} alt="Air" width={55} height={55} />
        </div>
        <ul className="flex justify-end w-full gap-6 px-4 py-2 sm:w-2/5">
          <li className="flex flex-col items-center">
            <FaRegUser className="text-2xl" />
            <span>Account</span>
          </li>
          <li className="flex flex-col items-center">
            <FiShoppingCart className="text-2xl" />
            <span>Cart</span>
          </li>
          <li className="flex flex-col items-center">
            <RiMenu2Fill className="text-2xl" />
            <span>Menu</span>
          </li>
        </ul>
      </div>
    </header>
  );
}
