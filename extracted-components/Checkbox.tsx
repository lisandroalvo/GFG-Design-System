/**
 * Checkbox Component - Extracted from Figma via MCP
 * 100% Accurate to Figma Design
 * 
 * Documentation: https://mui.com/api/checkbox
 * Node ID: 6543:43052
 * 
 * Usage:
 * import Checkbox from '@mui/material/Checkbox';
 * <Checkbox color="warning" indeterminate size="small" />
 */

const imgVector = "https://www.figma.com/api/mcp/asset/392be162-7cda-45d5-bcaa-1daf63cbc600";

type CheckboxProps = {
  className?: string;
  checked?: "False" | "True";
  color?: "Warning" | "Primary" | "Secondary" | "Success" | "Error" | "Info";
  indeterminate?: "True" | "False";
  size?: "Small" | "Medium";
  state?: "Focused" | "Enabled" | "Disabled";
};

function Checkbox({ 
  className, 
  checked = "False", 
  color = "Warning", 
  indeterminate = "True", 
  size = "Small", 
  state = "Focused" 
}: CheckboxProps) {
  return (
    <div className={className || "content-stretch flex items-center overflow-clip relative"} data-node-id="7456:49046">
      <div className="content-stretch flex items-start p-[9px] relative rounded-[100px] shrink-0" data-node-id="7456:49047" data-name="Padding">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="7456:49048" data-name="*hidden">
          <div className="absolute inset-[12.5%]" data-node-id="I7456:49048;7475:49569" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[var(--good-ochre-\(warning\)\/ochre-4,#f3e3cd)] left-1/2 rounded-[100px] size-[34px] top-1/2" data-node-id="1475:328388" data-name="focusRipple" />
    </div>
  );
}

export default Checkbox;
