type TabProps = {
  className?: string;
  disabled?: "False";
  icon?: "False";
  iconPosition?: "Top";
  label?: "True";
  selected?: "False";
  wrapped?: "False";
};

function Tab({ className, disabled = "False", icon = "False", iconPosition = "Top", label = "True", selected = "False", wrapped = "False" }: TabProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-center justify-center min-h-[48px] min-w-[90px] overflow-clip px-[16px] py-[12px] relative"} data-node-id="899:99151">
      <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="I899:99151;11443:170042" data-name="Label">
        <p className="font-[family-name:var(--fontfamily,'Roboto:Medium',sans-serif)] font-[var(--fontweightmedium,500)] leading-[1.75] relative shrink-0 text-[color:var(--text\/secondary,rgba(0,0,0,0.6))] text-[length:var(--typography\/button,14px)] tracking-[0.4px] uppercase whitespace-nowrap" data-node-id="I899:99151;11443:170043" style={{ fontVariationSettings: "'wdth' 100" }}>
          Item One
        </p>
      </div>
    </div>
  );
}

export default Tab;
