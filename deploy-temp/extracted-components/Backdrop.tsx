type BackdropProps = {
  className?: string;
  invisible?: "False";
  open?: "True";
  transitionDuration?: "Number";
};

function Backdrop({ className, invisible = "False", open = "True", transitionDuration = "Number" }: BackdropProps) {
  return (
    <div className={className || "bg-[rgba(0,0,0,0.5)] content-stretch flex flex-col h-[180px] items-center justify-center relative w-[300px]"} data-node-id="11436:165305">
      <div className="bg-[rgba(151,71,255,0.04)] border border-[#9747ff] border-dashed content-stretch flex flex-col items-center justify-center px-[24px] py-[4px] relative rounded-[var(--borderradius,4px)] shrink-0" data-node-id="I11436:165305;10020:110248" data-name="*Library / Instance Slot">
        <div className="flex flex-col font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] justify-center leading-[0] relative shrink-0 text-[#9747ff] text-[length:var(--_fontsize\/0\,75rem,12px)] text-center tracking-[0.4px] whitespace-nowrap" data-node-id="I11436:165305;10020:109863" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[1.66]">Instance Slot</p>
        </div>
      </div>
    </div>
  );
}

export default Backdrop;
