/**
 * Switch Component - Extracted from Figma via MCP
 * 100% Accurate to Figma Design
 * 
 * Documentation: https://mui.com/api/switch
 * Node ID: 6564:39128
 */

const imgKnob = "https://www.figma.com/api/mcp/asset/f003ca8e-94e8-4398-bdd9-3ac3f544b3f1";
const imgKnob1 = "https://www.figma.com/api/mcp/asset/d1d5447a-5034-4261-82f4-193d425e5202";

type SwitchProps = {
  className?: string;
  checked?: boolean;
  color?: "Error" | "Primary" | "Secondary" | "Success" | "Warning" | "Info";
  size?: "Medium" | "Small";
  state?: "Enabled" | "Disabled" | "Focused";
};

function Switch({ className, checked = true, color = "Error", size = "Medium", state = "Enabled" }: SwitchProps) {
  const isCheckedAndMediumAndErrorAndEnabled = checked && size === "Medium" && color === "Error" && state === "Enabled";
  return (
    <div className={className || "content-stretch flex items-center relative"} data-node-id="6564:39128" id={isCheckedAndMediumAndErrorAndEnabled ? "node-7964_81016" : "node-7964_81009"}>
      <div className="h-[38px] relative shrink-0 w-[58px]" id={isCheckedAndMediumAndErrorAndEnabled ? "node-7964_81017" : "node-7964_81010"} data-name="Switch">
        <div className={`absolute content-stretch flex items-center left-0 p-[12px] top-0 ${isCheckedAndMediumAndErrorAndEnabled ? "opacity-50" : "opacity-38"}`} id={isCheckedAndMediumAndErrorAndEnabled ? "node-7964_81018" : "node-7964_81011"} data-name="Slide">
          <div className={`h-[14px] rounded-[100px] shrink-0 w-[34px] ${isCheckedAndMediumAndErrorAndEnabled ? String.raw`bg-[var(--good-wine-\(error\)\/wine-2,#bb7570)]` : String.raw`bg-[var(--neutral\/wax,#f5f5f5)]`}`} id={isCheckedAndMediumAndErrorAndEnabled ? "node-7964_81019" : "node-7964_81012"} data-name="Slide" />
        </div>
        <div className={`absolute size-[38px] top-0 ${isCheckedAndMediumAndErrorAndEnabled ? "left-[20px]" : "left-0"}`} id={isCheckedAndMediumAndErrorAndEnabled ? "node-7964_81020" : "node-7964_81013"} data-name="Knob">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={isCheckedAndMediumAndErrorAndEnabled ? imgKnob1 : imgKnob} />
        </div>
      </div>
    </div>
  );
}

export default Switch;
