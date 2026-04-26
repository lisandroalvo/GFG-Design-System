/**
 * Select Component - Extracted from Figma via MCP
 * 100% Accurate to Figma Design
 * 
 * Documentation: https://mui.com/api/select
 * Node ID: 6570:41424
 */

const imgKeyboardArrowDown = "https://www.figma.com/api/mcp/asset/f7f5ddbc-891f-4660-8ec2-4ddcad61d39e";
const imgKeyboardArrowDown1 = "https://www.figma.com/api/mcp/asset/3c723fb4-5c4f-4dc3-afa3-cb37e803c368";

type SelectProps = {
  className?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  placeholder?: string;
  size?: "MD" | "SM" | "LG";
  status?: "Placeholder" | "Filled" | "Focused";
  type?: "Default" | "Error" | "Success";
};

function Select({ className, iconLeft = true, iconRight = true, placeholder = "Placeholder", size = "MD", status = "Placeholder", type = "Default" }: SelectProps) {
  return (
    <div className={className || "bg-[var(--background\/background-paper,white)] content-stretch flex flex-col h-[52px] items-start relative w-[220px]"} data-node-id="15628:51954">
      <div className="border border-[var(--neutral\/smoke,#e0e0e0)] border-solid content-stretch flex flex-col h-[52px] items-start justify-center px-[14px] relative rounded-[var(--radius\/button,6px)] shrink-0 w-full" data-node-id="15628:51955" data-name="Input">
        <div className="content-stretch flex items-center overflow-clip py-[14px] relative shrink-0 w-full" data-node-id="15628:51956" data-name="Container">
          <div className="h-[24px] shrink-0 w-0" data-node-id="15628:51963" data-name="min-height" />
          <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center justify-end min-w-px relative" data-node-id="15628:51965">
            {iconLeft && (
              <div className="relative shrink-0 size-[24px]" data-node-id="15725:26538" data-name="keyboard_arrow_down">
                <div className="absolute bottom-[35.83%] left-1/4 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6px_-8px] mask-size-[24px_24px] right-1/4 top-[33.33%]" data-node-id="I15725:26538;1:28263" style={{ maskImage: `url('${imgKeyboardArrowDown}')` }} data-name="keyboard_arrow_down">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgKeyboardArrowDown1} />
                </div>
              </div>
            )}
            <div className="flex flex-[1_0_0] flex-col font-[family-name:var(--font\/family\/body,'Lato:Regular',sans-serif)] justify-center leading-[0] min-w-px not-italic relative text-[color:var(--neutral\/graphite,#6d6d6d)] text-[length:var(--font\/size\/body1,16px)]" data-node-id="15628:51967">
              <p className="leading-[normal]">{placeholder}</p>
            </div>
            {iconRight && (
              <div className="relative shrink-0 size-[24px]" data-node-id="15725:26159" data-name="keyboard_arrow_down">
                <div className="absolute bottom-[35.83%] left-1/4 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6px_-8px] mask-size-[24px_24px] right-1/4 top-[33.33%]" data-node-id="I15725:26159;1:28263" style={{ maskImage: `url('${imgKeyboardArrowDown}')` }} data-name="keyboard_arrow_down">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgKeyboardArrowDown1} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Select;
