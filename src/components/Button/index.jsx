

const Button = ({icon,label}) => {
  return (
    <button className="flex justify-center items-centergap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red focus:ring focus:ring-red-300 hover:bg-red-500  transition duration-300 ease-in-out transform hover:scale-105 group"> {label}
    <img src={icon} alt="icon" className="ml-2 rounded-full w-5 h-5 transition duration-300 ease-in-out transform group-hover:translate-x-2"/>
    </button>
  )
}

export default Button