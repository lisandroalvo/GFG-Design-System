const imgVector = "https://www.figma.com/api/mcp/asset/bottom-nav-icon-url";

type BottomNavigationProps = {
  className?: string;
  showLabels?: "False";
};

function BottomNavigation({ className, showLabels = "False" }: BottomNavigationProps) {
  return (
    <div className={className || "bg-[var(--_components\/paper\/elevation-8,white)] content-stretch flex items-start relative shadow-[0px_3px_14px_2px_rgba(0,0,0,0.12),0px_8px_10px_1px_rgba(0,0,0,0.14),0px_5px_5px_-3px_rgba(0,0,0,0.2)] w-[393px]"} data-node-id="6572:50225">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px pb-[8px] pt-[6px] px-[12px] relative" data-node-id="6572:50226" data-name="<BottomNavigationAction>">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I6572:50226;6572:50304" data-name="FavoriteFilled">
          <div className="absolute inset-[11.77%_8.33%]" data-node-id="I6572:50226;6572:50304;7475:71000" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px pb-[8px] pt-[6px] px-[12px] relative" data-node-id="6572:50227" data-name="<BottomNavigationAction>">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I6572:50227;6572:50304" data-name="LocationOnFilled">
          <div className="absolute inset-[8.33%]" data-node-id="I6572:50227;6572:50304;7475:70989" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px pb-[8px] pt-[6px] px-[12px] relative" data-node-id="6572:50228" data-name="<BottomNavigationAction>">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I6572:50228;6572:50304" data-name="RestoreFilled">
          <div className="absolute inset-[8.33%]" data-node-id="I6572:50228;6572:50304;7475:71033" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomNavigation;
