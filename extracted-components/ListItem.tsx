type ListItemProps = {
  className?: string;
  alignItems?: "Flex-start";
  button?: "False";
  dense?: "False";
  disabled?: "False";
  disableGutters?: "False";
  disablePadding?: "False";
  divider?: "False";
  secondaryAction?: "False";
  selected?: "False";
};

function ListItem({ className, alignItems = "Flex-start", button = "False", dense = "False", disabled = "False", disableGutters = "False", disablePadding = "False", divider = "False", secondaryAction = "False", selected = "False" }: ListItemProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start justify-center relative"} data-node-id="7320:45999">
      <div className="content-stretch flex items-center overflow-clip px-[16px] py-[8px] relative shrink-0" data-node-id="7320:46000" data-name="Container">
        <div className="content-stretch flex items-center relative shrink-0" data-node-id="7320:48352" data-name="Container">
          <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body1,16px)] tracking-[0.15px] whitespace-nowrap" data-node-id="7320:48353" style={{ fontVariationSettings: "'wdth' 100" }}>
            List item
          </p>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
