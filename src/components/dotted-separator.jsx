import { cn } from "@/lib/utils";

export function DottedSeparator({
  className = "",
  color = "#d4d4d8",
  height = "2px",
  dotSize = 2,
  gapSize = 6,
  direction = "horizontal",
}) {
  const isHorizontal = direction === "horizontal";

  const style = {
    backgroundImage: `radial-gradient(circle, ${color} 25%, transparent 25%)`,
    backgroundSize: isHorizontal
      ? `${gapSize + dotSize}px ${height}`
      : `${height} ${dotSize + gapSize}px`,
    backgroundRepeat: isHorizontal ? "repeat-x" : "repeat-y",
    backgroundPosition: "center",
    width: isHorizontal ? "100%" : height,
    height: isHorizontal ? height : "100%",
  };

  return (
    <div
      className={cn(
        isHorizontal
          ? "w-full flex items-center"
          : "h-full flex flex-col items-center",
        className,
      )}
    >
      <div className={isHorizontal ? "grow" : "grow-0"} style={style} />
    </div>
  );
}
