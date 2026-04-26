type PaginationItemProps = {
  className?: string;
  active?: "True";
  color?: "Primary";
  disabled?: "False";
  icon?: "False";
  shape?: "Rounded";
  size?: "Small";
  variant?: "Outlined";
};

function PaginationItem({ className, active = "True", color = "Primary", disabled = "False", icon = "False", shape = "Rounded", size = "Small", variant = "Outlined" }: PaginationItemProps) {
  return (
    <div className={className || "overflow-clip relative size-[26px]"} data-node-id="6598:49338">
      <div className="absolute bg-[var(--primary\/_states\/focus,rgba(25,118,210,0.12))] border border-[var(--primary\/_states\/outlinedborder,rgba(25,118,210,0.5))] border-solid left-0 overflow-clip rounded-[var(--borderradius,4px)] size-[26px] top-0" data-node-id="11145:211054" data-name="<ButtonBase>">
        <p className="absolute font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] inset-[calc(11.54%-0.77px)_calc(34.62%-0.31px)] leading-[1.43] text-[color:var(--primary\/main,#1976d2)] text-[length:var(--typography\/body2,14px)] text-center tracking-[0.17px] whitespace-nowrap" data-node-id="11145:211055" style={{ fontVariationSettings: "'wdth' 100" }}>
          1
        </p>
      </div>
    </div>
  );
}

export default PaginationItem;
