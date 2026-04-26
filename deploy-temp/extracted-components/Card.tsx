type CardProps = {
  className?: string;
  raised?: "False";
};

function Card({ className, raised = "False" }: CardProps) {
  return (
    <div className={className || "bg-[var(--_components\/paper\/elevation-1,white)] content-stretch flex flex-col items-start overflow-clip relative rounded-[var(--borderradius,4px)] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)] w-[344px]"} data-node-id="6562:38678">
      <div className="content-stretch flex items-start p-[16px] relative shrink-0 w-full" data-node-id="I6562:38678;6572:50229" data-name="<CardHeader>">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I6562:38678;6572:50230" data-name="Content">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I6562:38678;6572:50231" data-name="<Typography>">
            <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.334] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/h5,24px)] tracking-[0px] w-full" data-node-id="I6562:38678;6572:50231;899:99868" style={{ fontVariationSettings: "'wdth' 100" }}>
              Title
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(151,71,255,0.04)] border border-[#9747ff] border-dashed content-stretch flex flex-col h-[194px] items-center justify-center relative shrink-0 w-full" data-node-id="I6562:38678;10020:110248" data-name="*Library / Instance Slot">
        <div className="flex flex-col font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] justify-center leading-[0] relative shrink-0 text-[#9747ff] text-[length:var(--_fontsize\/0\,75rem,12px)] text-center tracking-[0.4px] whitespace-nowrap" data-node-id="I6562:38678;10020:109863" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[1.66]">Instance Slot</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start p-[16px] relative shrink-0 w-full" data-node-id="I6562:38678;6562:38679" data-name="<CardContent>">
        <div className="bg-[rgba(151,71,255,0.04)] border border-[#9747ff] border-dashed content-stretch flex flex-col items-center justify-center px-[24px] py-[4px] relative rounded-[var(--borderradius,4px)] shrink-0 w-full" data-node-id="I6562:38678;6562:38679;10020:110248" data-name="*Library / Instance Slot">
          <div className="flex flex-col font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] justify-center leading-[0] relative shrink-0 text-[#9747ff] text-[length:var(--_fontsize\/0\,75rem,12px)] text-center tracking-[0.4px] whitespace-nowrap" data-node-id="I6562:38678;6562:38679;10020:109863" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.66]">Instance Slot</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-center justify-end p-[8px] relative shrink-0 w-full" data-node-id="I6562:38678;6562:38680" data-name="<CardActions>">
        <div className="content-stretch flex flex-col h-[34px] items-center justify-center overflow-clip px-[20px] py-[10px] relative rounded-[var(--radius\/button,6px)] shrink-0" data-node-id="I6562:38678;6562:38681" data-name="<Button>">
          <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-node-id="I6562:38678;6562:38681;15667:31995">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="I6562:38678;6562:38681;9996:109957" data-name="Base">
              <p className="font-[family-name:var(--font\/family\/body,'Lato:Bold',sans-serif)] leading-[normal] not-italic relative shrink-0 text-[color:var(--primary\/dark-dust,#af9577)] text-[length:var(--font\/size\/overline,11px)] tracking-[1.98px] uppercase whitespace-nowrap" data-node-id="I6562:38678;6562:38681;9996:109958">
                Share
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[34px] items-center justify-center overflow-clip px-[20px] py-[10px] relative rounded-[var(--radius\/button,6px)] shrink-0" data-node-id="I6562:38678;6562:38682" data-name="<Button>">
          <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-node-id="I6562:38678;6562:38682;15667:31995">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="I6562:38678;6562:38682;9996:109957" data-name="Base">
              <p className="font-[family-name:var(--font\/family\/body,'Lato:Bold',sans-serif)] leading-[normal] not-italic relative shrink-0 text-[color:var(--primary\/dark-dust,#af9577)] text-[length:var(--font\/size\/overline,11px)] tracking-[1.98px] uppercase whitespace-nowrap" data-node-id="I6562:38678;6562:38682;9996:109958">
                Learn More
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
