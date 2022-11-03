import { AWARD } from "../data";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const award = () => {

  const slideLeft = () => {
    var slider = document.getElementById("slider")
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
    var slider = document.getElementById("slider")
    slider.scrollLeft = slider.scrollLeft + 500
  }

    return (
        <div className="flex flex-col justify-center items-center gap-[2rem] px-[1rem] py-[1rem]">
            <h1 className="font-bold leading-[45px] text-[1.5rem]">
                Awards and Testimonials
            </h1>
            <div className="relative flex items-center">
                <MdChevronLeft className="opacity-50 cursor-pointer hover:opacity-100" onClick={slideLeft} size={30} />
                <div
                    id="slider"
                    className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
                >
                    {AWARD.map((award, i) => (
                        <img
                            src={award.image}
                            alt=""
                            className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                        />
                    ))}
                </div>
                <MdChevronRight className="opacity-50 cursor-pointer hover:opacity-100" onClick={slideRight} size={30} />
            </div>
        </div>
    );
};

export default award;
