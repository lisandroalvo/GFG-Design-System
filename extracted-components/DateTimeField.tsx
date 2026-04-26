/**
 * DateTimeField Component - Extracted from Figma via MCP
 * 100% Accurate to Figma Design
 * 
 * Node ID: 1251:806501
 */

type DateTimeFieldProps = {
  className?: string;
  clearable?: "False";
};

function DateTimeField({ className, clearable = "False" }: DateTimeFieldProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative w-[320px]"} data-node-id="1251:806501">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div className="border border-[var(--_components/input/outlined/enabledborder,rgba(0,0,0,0.23))] border-solid content-stretch flex flex-col items-start px-[14px] relative rounded-[var(--borderradius,4px)] shrink-0 w-full">
          <div className="content-stretch flex items-center min-h-[24px] min-w-[24px] overflow-clip py-[16px] relative shrink-0 w-full">
            <p className="flex-[1_0_0] font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[24px] min-w-px relative text-[color:var(--text/disabled,rgba(0,0,0,0.38))] text-[16px] tracking-[0.15px]">
              MM/DD/YYYY hh:mm aa
            </p>
          </div>
        </div>
        <div className="absolute bg-[var(--_components/paper/elevation-0,white)] content-stretch flex h-[2px] items-center left-[10px] px-[4px] top-0">
          <div className="flex flex-col font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] justify-center leading-[0] relative shrink-0 text-[color:var(--text/secondary,rgba(0,0,0,0.6))] text-[12px] tracking-[0.15px] whitespace-nowrap">
            <p className="leading-[12px]">Basic date field</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DateTimeField;
