const imgDot = "https://www.figma.com/api/mcp/asset/timeline-dot-url";

type TimelineProps = {
  className?: string;
  align?: "Alternate";
  items?: "3";
  position?: "Right";
};

function Timeline({ className, align = "Alternate", items = "3", position = "Right" }: TimelineProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative w-[200px]"} data-node-id="6602:51762">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="6602:51763" data-name="<TimelineItem>">
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="I6602:51763;6602:51441" data-name="Dot Container">
          <div className="content-stretch flex flex-[1_0_0] flex-col h-[24px] items-end min-w-px relative" data-node-id="I6602:51763;6602:51442" data-name="Main">
            <p className="flex-[1_0_0] font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.5] min-h-px relative text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body1,16px)] text-right tracking-[0.15px] w-full" data-node-id="I6602:51763;6602:51442;6605:52865" style={{ fontVariationSettings: "'wdth' 100" }}>
              Main
            </p>
          </div>
          <div className="h-[35px] relative shrink-0 w-[12px]" data-node-id="I6602:51763;6602:51443" data-name="<TimelineDot>">
            <div className="absolute left-0 size-[12px] top-[11.5px]" data-node-id="I6602:51763;6602:51443;6602:51788" data-name="Dot">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot} />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I6602:51763;6602:51444" data-name="Opposing">
            <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--text\/secondary,rgba(0,0,0,0.6))] text-[length:var(--typography\/body1,16px)] tracking-[0.15px] w-full" data-node-id="I6602:51763;6602:51444;6605:52865" style={{ fontVariationSettings: "'wdth' 100" }}>
              Opposing
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="6602:51764" data-name="<TimelineItem>">
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="I6602:51764;6602:51441" data-name="Dot Container">
          <div className="content-stretch flex flex-[1_0_0] flex-col h-[24px] items-end min-w-px relative" data-node-id="I6602:51764;6602:51442" data-name="Main">
            <p className="flex-[1_0_0] font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.5] min-h-px relative text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body1,16px)] text-right tracking-[0.15px] w-full" data-node-id="I6602:51764;6602:51442;6605:52865" style={{ fontVariationSettings: "'wdth' 100" }}>
              Main
            </p>
          </div>
          <div className="h-[35px] relative shrink-0 w-[12px]" data-node-id="I6602:51764;6602:51443" data-name="<TimelineDot>">
            <div className="absolute left-0 size-[12px] top-[11.5px]" data-node-id="I6602:51764;6602:51443;6602:51788" data-name="Dot">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot} />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I6602:51764;6602:51444" data-name="Opposing">
            <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--text\/secondary,rgba(0,0,0,0.6))] text-[length:var(--typography\/body1,16px)] tracking-[0.15px] w-full" data-node-id="I6602:51764;6602:51444;6605:52865" style={{ fontVariationSettings: "'wdth' 100" }}>
              Opposing
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="6602:51765" data-name="<TimelineItem>">
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="I6602:51765;6602:51441" data-name="Dot Container">
          <div className="content-stretch flex flex-[1_0_0] flex-col h-[24px] items-end min-w-px relative" data-node-id="I6602:51765;6602:51442" data-name="Main">
            <p className="flex-[1_0_0] font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.5] min-h-px relative text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body1,16px)] text-right tracking-[0.15px] w-full" data-node-id="I6602:51765;6602:51442;6605:52865" style={{ fontVariationSettings: "'wdth' 100" }}>
              Main
            </p>
          </div>
          <div className="h-[35px] relative shrink-0 w-[12px]" data-node-id="I6602:51765;6602:51443" data-name="<TimelineDot>">
            <div className="absolute left-0 size-[12px] top-[11.5px]" data-node-id="I6602:51765;6602:51443;6602:51788" data-name="Dot">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot} />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I6602:51765;6602:51444" data-name="Opposing">
            <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--text\/secondary,rgba(0,0,0,0.6))] text-[length:var(--typography\/body1,16px)] tracking-[0.15px] w-full" data-node-id="I6602:51765;6602:51444;6605:52865" style={{ fontVariationSettings: "'wdth' 100" }}>
              Opposing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
