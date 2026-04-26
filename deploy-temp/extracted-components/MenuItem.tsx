type MenuItemProps = {
  className?: string;
  dense?: "False";
  disabled?: "False";
  disableGutters?: "False";
  selected?: "False";
};

function MenuItem({ className, dense = "False", disabled = "False", disableGutters = "False", selected = "False" }: MenuItemProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start justify-center relative"} data-node-id="899:98407">
      <div className="content-stretch flex items-center overflow-clip px-[16px] py-[6px] relative shrink-0" data-node-id="I899:98407;10070:120208" data-name="Container">
        <div className="content-stretch flex items-center relative shrink-0" data-node-id="I899:98407;7320:48352" data-name="Container">
          <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body1,16px)] tracking-[0.15px] whitespace-nowrap" data-node-id="I899:98407;7320:48353" style={{ fontVariationSettings: "'wdth' 100" }}>
            Menu Item
          </p>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
