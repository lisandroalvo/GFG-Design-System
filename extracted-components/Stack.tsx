type StackProps = {
  className?: string;
  direction?: "Row";
  dividers?: "False";
  spacing?: "2";
};

function Stack({ className, direction = "Row", dividers = "False", spacing = "2" }: StackProps) {
  return (
    <div className={className || "content-stretch flex gap-[16px] items-start relative"} data-node-id="11436:165288">
      <div className="bg-[rgba(151,71,255,0.04)] border border-[#9747ff] border-dashed content-stretch flex flex-col h-[40px] items-center justify-center relative rounded-[var(--borderradius,4px)] shrink-0 w-[40px]" data-node-id="11436:165289" data-name="*Library / Instance Slot">
        <div className="flex flex-col font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] justify-center leading-[0] relative shrink-0 text-[#9747ff] text-[length:var(--_fontsize\/0\,75rem,12px)] text-center tracking-[0.4px] whitespace-nowrap" data-node-id="I11436:165289;10020:109863" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[1.66]">Instance Slot</p>
        </div>
      </div>
      <div className="bg-[rgba(151,71,255,0.04)] border border-[#9747ff] border-dashed content-stretch flex flex-col h-[40px] items-center justify-center relative rounded-[var(--borderradius,4px)] shrink-0 w-[40px]" data-node-id="11436:165290" data-name="*Library / Instance Slot">
        <div className="flex flex-col font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] justify-center leading-[0] relative shrink-0 text-[#9747ff] text-[length:var(--_fontsize\/0\,75rem,12px)] text-center tracking-[0.4px] whitespace-nowrap" data-node-id="I11436:165290;10020:109863" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[1.66]">Instance Slot</p>
        </div>
      </div>
      <div className="bg-[rgba(151,71,255,0.04)] border border-[#9747ff] border-dashed content-stretch flex flex-col h-[40px] items-center justify-center relative rounded-[var(--borderradius,4px)] shrink-0 w-[40px]" data-node-id="11436:165291" data-name="*Library / Instance Slot">
        <div className="flex flex-col font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] justify-center leading-[0] relative shrink-0 text-[#9747ff] text-[length:var(--_fontsize\/0\,75rem,12px)] text-center tracking-[0.4px] whitespace-nowrap" data-node-id="I11436:165291;10020:109863" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[1.66]">Instance Slot</p>
        </div>
      </div>
    </div>
  );
}

export default Stack;
