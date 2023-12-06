import { FaCheck } from "react-icons/fa6";
export default function PollOption({ option, percentage, color }) {
  return (
    <li className="flex justify-between">
      <div className="bg-[#ecf0f1] py-2 w-5/6 relative">
        <div
          style={{ width: percentage, backgroundColor: color }}
          className="absolute top-0 bottom-0 left-0 z-10 h-full"
        ></div>
        <span className="absolute top-0 bottom-0 left-0 z-20 p-2 font-semibold text-white ">
          {option}
        </span>
      </div>
      <div className="bg-[#bac1c5] p-2 hover:bg-[#22b69a] ">
        <FaCheck size={20} color="white" />
      </div>
    </li>
  );
}
