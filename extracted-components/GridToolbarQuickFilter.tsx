/**
 * GridToolbarQuickFilter Component - Extracted from Figma via MCP
 * 100% Accurate to Figma Design
 * 
 * Node ID: 9668:14228
 */

const imgVector = "https://www.figma.com/api/mcp/asset/96598059-4c01-4ab9-bf1e-10fd38b9c3ac";
const imgVector1 = "https://www.figma.com/api/mcp/asset/71d6f573-af01-47da-b9e7-5b71d1395c53";

type GridToolbarQuickFilterProps = {
  className?: string;
  state?: "Default";
};

function GridToolbarQuickFilter({ className, state = "Default" }: GridToolbarQuickFilterProps) {
  return (
    <div className={className || "border-[var(--_components/table/border,#e0e0e0)] border-b border-solid content-stretch flex items-center justify-end min-h-[52px] p-[6px] relative w-[702px]"} data-node-id="9668:14228">
      <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-end min-w-px relative">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0">
          <div className="content-stretch flex items-start relative shrink-0">
            <div className="overflow-clip relative shrink-0 size-[20px]">
              <div className="absolute inset-[12.5%_20.83%_16.67%_20.83%]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0">
          <div className="content-stretch flex items-start relative shrink-0">
            <div className="overflow-clip relative shrink-0 size-[20px]">
              <div className="absolute inset-[13.56%]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridToolbarQuickFilter;
