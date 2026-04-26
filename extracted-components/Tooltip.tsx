type TooltipProps = {
  className?: string;
  arrow?: "False";
  placement?: "Bottom";
  title?: string;
};

function Tooltip({ className, arrow = "False", placement = "Bottom", title = "Tooltip" }: TooltipProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-center relative"} data-node-id="899:96059">
      <div className="bg-[rgba(97,97,97,0.92)] content-stretch flex flex-col items-center max-w-[300px] overflow-clip px-[8px] py-[4px] relative rounded-[var(--borderradius,4px)] shrink-0" data-node-id="899:96060" data-name="Tooltip">
        <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.4] relative shrink-0 text-[color:var(--_components\/tooltip\/color,white)] text-[length:var(--_fontsize\/0\,625rem,10px)] text-center tracking-[0.4px]" data-node-id="899:96061" style={{ fontVariationSettings: "'wdth' 100" }}>
          {title}
        </p>
      </div>
    </div>
  );
}

export default Tooltip;
