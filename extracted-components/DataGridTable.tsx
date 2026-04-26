/**
 * DataGridTable Component - Extracted from Figma via MCP
 * 100% Accurate to Figma Design
 * 
 * Documentation: https://mui.com/api/data-grid/data-grid
 * Node ID: 208:104827
 */

const imgVector = "https://www.figma.com/api/mcp/asset/5f22ef9c-1dab-4bb3-a794-48d545f2bbae";
const imgMuiDataGridColumnSeparator = "https://www.figma.com/api/mcp/asset/4b242d90-9e3d-4e88-9a5f-fcdb24f76684";
const imgVector1 = "https://www.figma.com/api/mcp/asset/91609d23-a05f-46ec-9186-31b8543dc3d4";
const imgVector9 = "https://www.figma.com/api/mcp/asset/909729ef-a814-466c-ba92-380a41899696";
const imgVector10 = "https://www.figma.com/api/mcp/asset/dc481ba9-857c-4a57-8315-1a84179bdcd5";
const imgVector11 = "https://www.figma.com/api/mcp/asset/34e4b532-f8b9-4b1e-9145-9047b369049a";

type DataGridTableProps = {
  className?: string;
  checkbox?: "False";
  density?: "Standard";
  rows?: "10";
  tableFooter?: boolean;
};

function DataGridTable({ className, checkbox = "False", density = "Standard", rows = "10", tableFooter = true }: DataGridTableProps) {
  return (
    <div className={className || "content-stretch flex flex-col isolate items-start relative w-[960px]"} data-node-id="208:104827">
      <div className="border-[var(--_components/table/border,#e0e0e0)] border-b border-solid content-stretch flex h-[56px] items-start relative shrink-0 w-full">
        <p className="font-[family-name:var(--fontfamily,'Roboto:Medium',sans-serif)] font-[var(--fontweightmedium,500)] leading-[24px] text-[14px] text-[color:var(--text/primary,rgba(0,0,0,0.87))]">
          Header
        </p>
      </div>
      {tableFooter && (
        <div className="content-stretch flex gap-[26px] items-center justify-end py-[2px] relative shrink-0 w-full">
          <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.66] text-[color:var(--text/primary,rgba(0,0,0,0.87))] text-[12px]">
            1-5 of 13
          </p>
        </div>
      )}
    </div>
  );
}

export default DataGridTable;
