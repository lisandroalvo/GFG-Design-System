/**
 * ImageListItemBar Component - Extracted from Figma via MCP
 * 100% Accurate to Figma Design
 * 
 * Node ID: 15773:11886
 */

const imgVector = "https://www.figma.com/api/mcp/asset/4b151d3c-0847-4191-8899-d5e2b7be3736";

type ImageListItemBarProps = {
  className?: string;
  subtitle?: boolean;
  subtitle1?: string;
  title?: boolean;
  title1?: string;
};

function ImageListItemBar({ className, subtitle = true, subtitle1 = "{Subtitle}", title = true, title1 = "{Title}" }: ImageListItemBarProps) {
  return (
    <div className={className || "content-stretch flex items-center relative size-[240px]"} data-node-id="15773:11886">
      <div className="bg-[var(--text/_states/hover,rgba(0,0,0,0.04))] content-stretch flex flex-[1_0_0] flex-col h-[240px] items-start min-w-px overflow-clip relative" />
      <div className="absolute bg-[rgba(0,0,0,0.5)] bottom-[-0.33px] content-stretch flex items-center left-0 right-0">
        <div className="content-stretch flex flex-[1_0_0] flex-col font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] items-start min-w-px pl-[16px] py-[12px] relative text-[color:var(--common/white/_states/main,white)]">
          {title && (
            <p className="leading-[1.5] relative shrink-0 text-[16px] tracking-[0.15px] w-full">
              {title1}
            </p>
          )}
          {subtitle && (
            <p className="leading-[1.66] relative shrink-0 text-[12px] tracking-[0.4px] w-full">
              {subtitle1}
            </p>
          )}
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0">
          <div className="content-stretch flex items-start relative shrink-0">
            <div className="overflow-clip relative shrink-0 size-[24px]">
              <div className="absolute inset-[8.33%]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageListItemBar;
