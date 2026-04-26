type ZoomProps = {
  className?: string;
  in?: "True";
  timeout?: "Number";
};

function Zoom({ className, in: inProp = "True", timeout = "Number" }: ZoomProps) {
  return (
    <div className={className || "bg-[rgba(151,71,255,0.04)] border border-[#9747ff] border-dashed content-stretch flex flex-col h-[100px] items-center justify-center relative rounded-[var(--borderradius,4px)] w-[200px]"} data-node-id="11436:165316">
      <div className="flex flex-col font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] justify-center leading-[0] relative shrink-0 text-[#9747ff] text-[length:var(--_fontsize\/0\,75rem,12px)] text-center tracking-[0.4px] whitespace-nowrap" data-node-id="I11436:165316;10020:109863" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.66]">Instance Slot</p>
      </div>
    </div>
  );
}

export default Zoom;
