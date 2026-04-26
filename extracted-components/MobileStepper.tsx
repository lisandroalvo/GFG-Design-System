const imgVector = "https://www.figma.com/api/mcp/asset/a1b2c3d4-e5f6-7890-abcd-ef1234567890";

type MobileStepperProps = {
  className?: string;
  variant?: "Dots";
};

function MobileStepper({ className, variant = "Dots" }: MobileStepperProps) {
  return (
    <div className={className || "bg-[var(--_components\\/paper\\/elevation-0,white)] content-stretch flex gap-[8px] items-center justify-between p-[8px] relative w-[400px]"} data-node-id="6576:51239">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0" data-node-id="6576:51240" data-name="<IconButton>">
        <div className="content-stretch flex items-start relative shrink-0" data-node-id="I6576:51240;10144:136816" data-name="<Icon>">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I6576:51240;10144:136816;6594:47652" data-name="KeyboardArrowLeftFilled">
            <div className="absolute inset-[25%_29.17%]" data-node-id="I6576:51240;10144:136816;6594:47652;7475:54236" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="6576:51241" data-name="Dots">
        <div className="bg-[var(--primary\/main,#1976d2)] shrink-0 size-[8px]" data-node-id="6576:51242" />
        <div className="bg-[var(--action\/disabled,rgba(0,0,0,0.12))] shrink-0 size-[8px]" data-node-id="6576:51243" />
        <div className="bg-[var(--action\/disabled,rgba(0,0,0,0.12))] shrink-0 size-[8px]" data-node-id="6576:51244" />
        <div className="bg-[var(--action\/disabled,rgba(0,0,0,0.12))] shrink-0 size-[8px]" data-node-id="6576:51245" />
        <div className="bg-[var(--action\/disabled,rgba(0,0,0,0.12))] shrink-0 size-[8px]" data-node-id="6576:51246" />
      </div>
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0" data-node-id="6576:51247" data-name="<IconButton>">
        <div className="content-stretch flex items-start relative shrink-0" data-node-id="I6576:51247;10144:136816" data-name="<Icon>">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I6576:51247;10144:136816;6594:47652" data-name="KeyboardArrowRightFilled">
            <div className="absolute inset-[25%_29.17%]" data-node-id="I6576:51247;10144:136816;6594:47652;7475:54247" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileStepper;
