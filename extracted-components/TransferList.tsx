const imgVector = "https://www.figma.com/api/mcp/asset/transfer-list-icon";

type TransferListProps = {
  className?: string;
  orientation?: "Horizontal";
};

function TransferList({ className, orientation = "Horizontal" }: TransferListProps) {
  return (
    <div className={className || "content-stretch flex gap-[16px] items-center relative"} data-node-id="6562:38661">
      <div className="border border-[var(--divider,rgba(0,0,0,0.12))] border-solid content-stretch flex flex-col h-[230px] items-start overflow-clip relative rounded-[var(--borderradius,4px)] shrink-0 w-[200px]" data-node-id="6562:38662" data-name="<Paper>">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I6562:38662;6562:38664" data-name="<List>">
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="I6562:38662;6562:38665" data-name="<ListItem>">
            <div className="content-stretch flex items-center overflow-clip px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="I6562:38662;6562:38665;7320:46000" data-name="Container">
              <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="I6562:38662;6562:38665;7320:46001" data-name="<Checkbox>">
                <div className="content-stretch flex items-start p-[9px] relative rounded-[100px] shrink-0" data-node-id="I6562:38662;6562:38665;7320:46001;6543:43107" data-name="Padding">
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I6562:38662;6562:38665;7320:46001;6543:43108" data-name="*hidden">
                    <div className="absolute inset-[12.5%]" data-node-id="I6562:38662;6562:38665;7320:46001;6543:43108;7475:49560" data-name="Vector">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I6562:38662;6562:38665;7320:48352" data-name="Container">
                <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body1,16px)] tracking-[0.15px] whitespace-nowrap" data-node-id="I6562:38662;6562:38665;7320:48353" style={{ fontVariationSettings: "'wdth' 100" }}>
                  List item
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-node-id="6562:38663" data-name="Actions">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0" data-node-id="6562:38666" data-name="<IconButton>">
          <div className="content-stretch flex items-start relative shrink-0" data-node-id="I6562:38666;10144:136816" data-name="<Icon>">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I6562:38666;10144:136816;6594:47652" data-name="ChevronRightFilled">
              <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-node-id="I6562:38666;10144:136816;6594:47652;7475:54247" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0" data-node-id="6562:38667" data-name="<IconButton>">
          <div className="content-stretch flex items-start relative shrink-0" data-node-id="I6562:38667;10144:136816" data-name="<Icon>">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I6562:38667;10144:136816;6594:47652" data-name="ChevronLeftFilled">
              <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-node-id="I6562:38667;10144:136816;6594:47652;7475:54236" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-[var(--divider,rgba(0,0,0,0.12))] border-solid content-stretch flex flex-col h-[230px] items-start overflow-clip relative rounded-[var(--borderradius,4px)] shrink-0 w-[200px]" data-node-id="6562:38668" data-name="<Paper>">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I6562:38668;6562:38664" data-name="<List>">
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="I6562:38668;6562:38665" data-name="<ListItem>">
            <div className="content-stretch flex items-center overflow-clip px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="I6562:38668;6562:38665;7320:46000" data-name="Container">
              <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="I6562:38668;6562:38665;7320:46001" data-name="<Checkbox>">
                <div className="content-stretch flex items-start p-[9px] relative rounded-[100px] shrink-0" data-node-id="I6562:38668;6562:38665;7320:46001;6543:43107" data-name="Padding">
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I6562:38668;6562:38665;7320:46001;6543:43108" data-name="*hidden">
                    <div className="absolute inset-[12.5%]" data-node-id="I6562:38668;6562:38665;7320:46001;6543:43108;7475:49560" data-name="Vector">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I6562:38668;6562:38665;7320:48352" data-name="Container">
                <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body1,16px)] tracking-[0.15px] whitespace-nowrap" data-node-id="I6562:38668;6562:38665;7320:48353" style={{ fontVariationSettings: "'wdth' 100" }}>
                  List item
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransferList;
