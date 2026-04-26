function LibraryInstanceSlot({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[rgba(151,71,255,0.04)] border border-[#9747ff] border-dashed content-stretch flex flex-col items-center justify-center px-[24px] py-[4px] relative rounded-[var(--borderradius,4px)]"} data-node-id="10020:110248" data-name="*Library / Instance Slot">
      <div className="flex flex-col font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] justify-center leading-[0] relative shrink-0 text-[#9747ff] text-[length:var(--_fontsize\/0\,75rem,12px)] text-center tracking-[0.4px] whitespace-nowrap" data-node-id="10020:109863" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.66]">Instance Slot</p>
      </div>
    </div>
  );
}

type DialogContentProps = {
  className?: string;
  dividers?: "True";
  instance?: React.ReactNode | null;
};

function DialogContent({ className, dividers = "True", instance = null }: DialogContentProps) {
  return (
    <div className={className || "border-[var(--divider,rgba(0,0,0,0.12))] border-b border-solid border-t content-stretch flex flex-col items-start px-[24px] py-[16px] relative w-[600px]"} data-node-id="127:59929">
      {instance || <LibraryInstanceSlot className="bg-[rgba(151,71,255,0.04)] border border-[#9747ff] border-dashed content-stretch flex flex-col items-center justify-center px-[24px] py-[4px] relative rounded-[var(--borderradius,4px)] shrink-0 w-full" />}
    </div>
  );
}

export default DialogContent;
