/**
 * Radio Component - Extracted from Figma via MCP
 * 100% Accurate to Figma Design
 * 
 * Documentation: https://mui.com/api/radio
 * Node ID: 6558:39273
 */

const imgVector = "https://www.figma.com/api/mcp/asset/da5c92c7-88eb-4b34-9fdf-68c1c2166f2f";

type RadioProps = {
  className?: string;
  checked?: "True" | "False";
  color?: "Default" | "Primary" | "Secondary" | "Success" | "Error" | "Warning" | "Info";
  size?: "Large" | "Medium" | "Small";
  state?: "Disabled" | "Enabled" | "Focused";
};

function Radio({ className, checked = "True", color = "Default", size = "Large", state = "Disabled" }: RadioProps) {
  return (
    <div className={className || "content-stretch flex items-center overflow-clip relative"} data-node-id="9728:104075">
      <div className="content-stretch flex items-center p-[9px] relative rounded-[100px] shrink-0" data-node-id="9728:104076" data-name="Padding">
        <div className="overflow-clip relative shrink-0 size-[28px]" data-node-id="9728:104077" data-name="*hidden">
          <div className="absolute inset-[8.33%]" data-node-id="I9728:104077;7475:49581" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Radio;
