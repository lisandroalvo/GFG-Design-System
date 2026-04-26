const imgVector = "https://www.figma.com/api/mcp/asset/toggle-button-icon";

type ToggleButtonGroupProps = {
  className?: string;
  buttons?: "3";
  orientation?: "Horizontal";
  size?: "Medium";
};

function ToggleButtonGroup({ className, buttons = "3", orientation = "Horizontal", size = "Medium" }: ToggleButtonGroupProps) {
  return (
    <div className={className || "content-stretch flex items-start relative"} data-node-id="10257:133375">
      <div className="border border-[var(--action\/disabled,rgba(0,0,0,0.12))] border-solid content-stretch flex flex-col items-center justify-center overflow-clip px-[11px] py-[5px] relative rounded-l-[var(--borderradius,4px)] shrink-0" data-node-id="10257:133376" data-name="<ToggleButton>">
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="I10257:133376;1484:15580" data-name="Content">
          <div className="content-stretch flex items-start relative shrink-0" data-node-id="I10257:133376;1484:15581" data-name="<Icon>">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I10257:133376;1484:15581;6594:47652" data-name="FormatAlignLeftFilled">
              <div className="absolute inset-[16.67%]" data-node-id="I10257:133376;1484:15581;6594:47652;7475:54381" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--primary\/_states\/selected,rgba(25,118,210,0.08))] border-y border-[var(--primary\/main,#1976d2)] border-solid content-stretch flex flex-col items-center justify-center overflow-clip px-[11px] py-[5px] relative shrink-0" data-node-id="10257:133377" data-name="<ToggleButton>">
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="I10257:133377;1484:15580" data-name="Content">
          <div className="content-stretch flex items-start relative shrink-0" data-node-id="I10257:133377;1484:15581" data-name="<Icon>">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I10257:133377;1484:15581;6594:47652" data-name="FormatAlignCenterFilled">
              <div className="absolute inset-[16.67%]" data-node-id="I10257:133377;1484:15581;6594:47652;7475:54370" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-[var(--action\/disabled,rgba(0,0,0,0.12))] border-solid content-stretch flex flex-col items-center justify-center overflow-clip px-[11px] py-[5px] relative rounded-r-[var(--borderradius,4px)] shrink-0" data-node-id="10257:133378" data-name="<ToggleButton>">
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="I10257:133378;1484:15580" data-name="Content">
          <div className="content-stretch flex items-start relative shrink-0" data-node-id="I10257:133378;1484:15581" data-name="<Icon>">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I10257:133378;1484:15581;6594:47652" data-name="FormatAlignRightFilled">
              <div className="absolute inset-[16.67%]" data-node-id="I10257:133378;1484:15581;6594:47652;7475:54392" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToggleButtonGroup;
