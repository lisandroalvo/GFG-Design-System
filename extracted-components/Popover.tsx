type PopoverProps = {
  className?: string;
  anchorOrigin?: "Top Left";
  transformOrigin?: "Top Left";
};

function Popover({ className, anchorOrigin = "Top Left", transformOrigin = "Top Left" }: PopoverProps) {
  return (
    <div className={className || "bg-[var(--_components\/paper\/elevation-8,white)] content-stretch flex flex-col h-[100px] items-center justify-center max-h-[calc(100%-32px)] max-w-[calc(100%-32px)] min-h-[16px] min-w-[16px] overflow-clip relative rounded-[var(--borderradius,4px)] shadow-[0px_3px_14px_2px_rgba(0,0,0,0.12),0px_8px_10px_1px_rgba(0,0,0,0.14),0px_5px_5px_-3px_rgba(0,0,0,0.2)] w-[200px]"} data-node-id="11436:165317">
      <div className="bg-[rgba(151,71,255,0.04)] border border-[#9747ff] border-dashed content-stretch flex flex-col items-center justify-center px-[24px] py-[4px] relative rounded-[var(--borderradius,4px)] shrink-0" data-node-id="I11436:165317;10020:110248" data-name="*Library / Instance Slot">
        <div className="flex flex-col font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] justify-center leading-[0] relative shrink-0 text-[#9747ff] text-[length:var(--_fontsize\/0\,75rem,12px)] text-center tracking-[0.4px] whitespace-nowrap" data-node-id="I11436:165317;10020:109863" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[1.66]">Instance Slot</p>
        </div>
      </div>
    </div>
  );
}

export default Popover;
