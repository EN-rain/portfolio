import { cn } from "@/utils/cn";
import GridGlobe from "./GridGlobe";
import Slider from "./Slider";
import Profile from "./Profile";
import Image from "next/image"; 

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt="Project Image"
              className={cn(imgClassName, "object-cover object-center")}
              layout="fill" 
              objectFit="cover" 
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt="Spare Image"
              layout="fill" 
              objectFit="cover"
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        <div>
          <div
            className={cn(
              titleClassName,
              "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
            )}
          >
            <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
              {description}
            </div>

            <div
              className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}>
              {title}
            </div>
          </div>
          {id === 3 && <GridGlobe />}
          {id === 2 && <Slider />}
          {id === 1 && <Profile />}
        </div>

        <div className="group-hover/bento:translate-x-2 transition duration-200"></div>
      </div>
    </div>
  );
};
