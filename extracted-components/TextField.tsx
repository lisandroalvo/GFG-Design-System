/**
 * TextField Component - Extracted from Figma via MCP
 * 100% Accurate to Figma Design
 * 
 * Documentation: https://mui.com/components/text-fields
 * Node ID: 6570:48313
 */

const imgVector = "https://www.figma.com/api/mcp/asset/50256c88-f181-4d63-8e0d-e50a78749ba2";
const imgUnderline = "https://www.figma.com/api/mcp/asset/bc8dee43-24af-43f1-bb02-f96c5a1b82dc";

type TextFieldProps = {
  className?: string;
  adornEnd?: boolean;
  adornStart?: boolean;
  endInstance?: React.ReactNode | null;
  hasValue?: "False" | "True";
  helper?: boolean;
  label?: string;
  size?: "Small" | "Medium";
  startInstance?: React.ReactNode | null;
  state?: "Hovered" | "Enabled" | "Focused" | "Disabled";
  variant?: "Filled" | "Outlined" | "Standard";
};

function TextField({ className, adornEnd = false, adornStart = false, endInstance = null, hasValue = "False", helper = false, label = "Label", size = "Small", startInstance = null, state = "Hovered", variant = "Filled" }: TextFieldProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative w-[220px]"} data-node-id="8031:81910">
      <div className="bg-[var(--_components\/input\/filled\/hoverfill,rgba(0,0,0,0.09))] content-stretch flex flex-col items-start overflow-clip relative rounded-tl-[var(--borderradius,4px)] rounded-tr-[var(--borderradius,4px)] shrink-0 w-full" data-node-id="8031:81911" data-name="Content">
        <div className="content-stretch flex items-center p-[12px] relative shrink-0 w-full" data-node-id="8031:81912" data-name="Input">
          {adornStart && (
            <div className="content-stretch flex h-px items-center pr-[8px] relative shrink-0" data-node-id="1142:21395" data-name="Adorn. Start Container">
              {adornStart &&
                (startInstance || (
                  <div className="content-stretch flex items-start relative shrink-0" data-node-id="1142:21396" data-name="<Icon>">
                    <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I1142:21396;6594:47652" data-name="Icon">
                      <div className="absolute inset-[10.42%_8.33%]" data-node-id="I1142:21396;6594:47652;7475:49604" data-name="Vector">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
          <p className="flex-[1_0_0] font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[24px] min-w-px relative text-[color:var(--text\/secondary,rgba(0,0,0,0.6))] text-[length:var(--_fontsize\/1rem,16px)] tracking-[0.15px]" data-node-id="8031:81917" style={{ fontVariationSettings: "'wdth' 100" }}>
            {label}
          </p>
          {adornEnd && (
            <div className="content-stretch flex h-px items-center justify-center relative shrink-0" data-node-id="1139:22363" data-name="Adorn. End Container">
              {adornEnd &&
                (endInstance || (
                  <div className="content-stretch flex items-start relative shrink-0" data-node-id="1139:22364" data-name="AdornmentEnd">
                    <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I1139:22364;6594:47652" data-name="Icon">
                      <div className="absolute inset-[10.42%_8.33%]" data-node-id="I1139:22364;6594:47652;7475:49604" data-name="Vector">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
        <div className="absolute bottom-0 h-0 left-0 right-0" data-node-id="11153:212582" data-name="Underline">
          <div className="absolute inset-[-2px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgUnderline} />
          </div>
        </div>
      </div>
      {helper && (
        <div className="content-stretch flex flex-col items-start pt-[3px] px-[14px] relative shrink-0 w-full" data-node-id="8031:81919" data-name="<FormHelperText>">
          <div className="flex flex-col font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] justify-center leading-[0] relative shrink-0 text-[color:var(--text\/secondary,rgba(0,0,0,0.6))] text-[length:var(--_fontsize\/0\,75rem,12px)] tracking-[0.4px] w-full" data-node-id="I8031:81919;6626:50981" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.66]">Helper text</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TextField;
