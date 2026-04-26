const imgVector = "https://www.figma.com/api/mcp/asset/toggle-button-icon-url";

type ToggleButtonProps = {
  className?: string;
  color?: "Standard";
  disabled?: "False";
  fullWidth?: "False";
  selected?: "False";
  size?: "Medium";
};

function ToggleButton({ className, color = "Standard", disabled = "False", fullWidth = "False", selected = "False", size = "Medium" }: ToggleButtonProps) {
  return (
    <div className={className || "border border-[var(--action\/disabled,rgba(0,0,0,0.12))] border-solid content-stretch flex flex-col items-center justify-center overflow-clip px-[11px] py-[5px] relative rounded-[var(--borderradius,4px)]"} data-node-id="1484:15579">
      <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="1484:15580" data-name="Content">
        <div className="content-stretch flex items-start relative shrink-0" data-node-id="1484:15581" data-name="<Icon>">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I1484:15581;6594:47652" data-name="FormatAlignLeftFilled">
            <div className="absolute inset-[16.67%]" data-node-id="I1484:15581;6594:47652;7475:54381" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToggleButton;
