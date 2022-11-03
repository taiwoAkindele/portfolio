import { NAVLINKS } from "../data"
import menu from "../assets/menu.svg"


const navbar = () => {
  return (
    <>
      <header className="sticky bg-blend-screen shadow-md z-[999] shadow-inherit bg-[#FFFFFF] inset-0 h-[100px] flex items-center justify-between px-[2rem] py-[1.5rem] text-[#000000]">
        <h1 className="text-[3rem] font-[700]">TAIWO</h1>
        <nav className="hidden md:flex gap-[2rem]">
            {NAVLINKS.map((link, i) => (
              <a className="hover:border-b-2 border-[#000000]" key={i} href={link.link}>{link.name}</a>
            ))}
        </nav>
        <div className="md:hidden">
        <img className="" src={menu} alt="" />
        </div>
      </header>
    </>
  )
}

export default navbar