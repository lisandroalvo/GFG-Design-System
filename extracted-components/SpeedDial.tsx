const imgVector = "https://www.figma.com/api/mcp/asset/speed-dial-icon-url";

type SpeedDialProps = {
  className?: string;
  direction?: "Up";
  open?: "False";
};

function SpeedDial({ className, direction = "Up", open = "False" }: SpeedDialProps) {
  return (
    <div className={className || "content-stretch flex flex-col gap-[16px] items-end relative"} data-node-id="6599:50843">
      <div className="bg-[var(--primary\/main,#1976d2)] content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] min-w-[56px] overflow-clip relative rounded-[100px] shadow-[0px_3px_5px_-1px_rgba(0,0,0,0.2),0px_6px_10px_0px_rgba(0,0,0,0.14),0px_1px_18px_0px_rgba(0,0,0,0.12)] shrink-0 w-[56px]" data-node-id="6599:50844" data-name="<Fab>">
        <div className="content-stretch flex items-start relative shrink-0" data-node-id="I6599:50844;11496:178656" data-name="<Icon>">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I6599:50844;11496:178656;6594:47652" data-name="AddFilled">
            <div className="absolute inset-[16.67%]" data-node-id="I6599:50844;11496:178656;6594:47652;7475:54012" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpeedDial;
