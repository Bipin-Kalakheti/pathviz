import { twMerge } from "tailwind-merge";
import { usePathfinding } from "../hooks/usePathfinding";
import { MAX_COLS, MAX_ROWS } from "../utils/constants";

export function Grid() {
  const { grid } = usePathfinding();

  return (
    <div
      className={twMerge(
        //Base classes
        "flex flex-col items-center justify-center border-sky-300",
        //Control Grid height
        `lg:min-h-[${MAX_ROWS * 17}px] md:min-h-[${MAX_ROWS * 15}px]
            xs:min-h-[${MAX_ROWS * 8}px] min-h-[${MAX_ROWS * 7}px]`,
        //Control Grid width
        `lg:w-[${MAX_COLS * 17}px] md:w-[${MAX_COLS * 15}px]
            xs:w-[${MAX_COLS * 8}px] w-[${MAX_COLS * 7}px]`
      )}
    >
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((title, titleIndex) => (
            <div className="bg-white h-2 w-2 border"></div>
          ))}
        </div>
      ))}
    </div>
  );
}
