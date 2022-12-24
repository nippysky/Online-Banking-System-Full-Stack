import { BsBank } from "react-icons/bs";
import { FaSuitcase, FaGlobeEurope } from "react-icons/fa";
import { MdOutlineSendToMobile } from "react-icons/md";

const services: { id: string; title: string; desc: string; icon: any }[] = [
  {
    id: "1",
    title: "Personal Business",
    desc: "Explore the power of simpler and smarter banking. Bank online with our over 250 services",
    icon: <BsBank size={50} color={"#202124"} />,
  },

  {
    id: "2",
    title: "Business Banking",
    desc: "Offering you wide range of tools that your company needs",
    icon: <FaSuitcase size={50} color={"#202124"} />,
  },

  {
    id: "3",
    title: "Mobile Bank",
    desc: "Enjoy simpler and smarter banking with our responsive banking App",
    icon: <MdOutlineSendToMobile size={50} color={"#202124"} />,
  },

  {
    id: "4",
    title: "Online Deposit",
    desc: "Make deposits to your account and get instant reflection without delay",
    icon: <FaGlobeEurope size={50} color={"#202124"} />,
  },
];

export default services;
