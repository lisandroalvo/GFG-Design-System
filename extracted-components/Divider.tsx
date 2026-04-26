type DividerProps = {
  className?: string;
  absolute?: "False";
  flexItem?: "False";
  light?: "False";
  orientation?: "Horizontal";
  textAlign?: "Center";
  variant?: "Fullwidth";
};

function Divider({ className, absolute = "False", flexItem = "False", light = "False", orientation = "Horizontal", textAlign = "Center", variant = "Fullwidth" }: DividerProps) {
  return (
    <div className={className || "bg-[var(--divider,rgba(0,0,0,0.12))] h-[1px] relative w-[200px]"} data-node-id="6562:38673" />
  );
}

export default Divider;
