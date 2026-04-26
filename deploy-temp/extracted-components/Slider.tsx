type SliderProps = {
  className?: string;
  color?: "Primary";
  disabled?: "False";
  marks?: "False";
  orientation?: "Horizontal";
  size?: "Medium";
  track?: "Normal";
  valueLabelDisplay?: "Off";
};

function Slider({ className, color = "Primary", disabled = "False", marks = "False", orientation = "Horizontal", size = "Medium", track = "Normal", valueLabelDisplay = "Off" }: SliderProps) {
  return (
    <div className={className || "content-stretch flex items-center px-[13px] relative w-[200px]"} data-node-id="899:98003">
      <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="899:98004" data-name="Rail">
        <div className="bg-[var(--primary\/main,#1976d2)] h-[4px] left-0 relative rounded-[1px] w-[calc(30%-2px)]" data-node-id="899:98005" data-name="Track" />
        <div className="bg-[var(--primary\/main,#1976d2)] content-stretch flex flex-col items-center justify-center ml-[-6px] overflow-clip relative rounded-[100px] shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_1px_5px_0px_rgba(0,0,0,0.12)] shrink-0 size-[12px]" data-node-id="899:98006" data-name="Thumb" />
        <div className="bg-[rgba(0,0,0,0.26)] flex-[1_0_0] h-[2px] min-w-px relative rounded-[1px]" data-node-id="899:98007" data-name="Rail" />
      </div>
    </div>
  );
}

export default Slider;
