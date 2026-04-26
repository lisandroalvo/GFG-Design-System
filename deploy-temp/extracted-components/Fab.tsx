const imgVector = "https://www.figma.com/api/mcp/asset/fab-icon-url";

type FabProps = {
  className?: string;
  color?: "Primary";
  disabled?: "False";
  size?: "Large";
  variant?: "Circular";
};

function Fab({ className, color = "Primary", disabled = "False", size = "Large", variant = "Circular" }: FabProps) {
  return (
    <div className={className || "bg-[var(--primary\\/main,#1976d2)] content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] min-w-[56px] overflow-clip relative rounded-[100px] shadow-[0px_3px_5px_-1px_rgba(0,0,0,0.2),0px_6px_10px_0px_rgba(0,0,0,0.14),0px_1px_18px_0px_rgba(0,0,0,0.12)] w-[56px]"} data-node-id="899:97009">
      <div className="content-stretch flex items-start relative shrink-0" data-node-id="I899:97009;11496:178656" data-name="<Icon>">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I899:97009;11496:178656;6594:47652" data-name="AddFilled">
          <div className="absolute inset-[16.67%]" data-node-id="I899:97009;11496:178656;6594:47652;7475:54012" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fab;
