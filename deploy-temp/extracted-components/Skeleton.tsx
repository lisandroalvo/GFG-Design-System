type SkeletonProps = {
  className?: string;
  animation?: "Pulse";
  height?: "Number";
  variant?: "Text";
  width?: "Number";
};

function Skeleton({ className, animation = "Pulse", height = "Number", variant = "Text", width = "Number" }: SkeletonProps) {
  return (
    <div className={className || "bg-[rgba(0,0,0,0.11)] h-[20px] relative rounded-[var(--borderradius,4px)] w-[210px]"} data-node-id="899:97817" />
  );
}

export default Skeleton;
