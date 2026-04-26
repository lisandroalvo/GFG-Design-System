type ListProps = {
  className?: string;
  dense?: "False";
  disablePadding?: "False";
  subheader?: "False";
};

function List({ className, dense = "False", disablePadding = "False", subheader = "False" }: ListProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start py-[8px] relative w-[360px]"} data-node-id="7320:48351">
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="7320:48354" data-name="<ListItem>">
        <div className="content-stretch flex items-center overflow-clip px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="I7320:48354;7320:46000" data-name="Container">
          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7320:48354;7320:48352" data-name="Container">
            <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body1,16px)] tracking-[0.15px] whitespace-nowrap" data-node-id="I7320:48354;7320:48353" style={{ fontVariationSettings: "'wdth' 100" }}>
              List item
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="7320:48355" data-name="<ListItem>">
        <div className="content-stretch flex items-center overflow-clip px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="I7320:48355;7320:46000" data-name="Container">
          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7320:48355;7320:48352" data-name="Container">
            <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body1,16px)] tracking-[0.15px] whitespace-nowrap" data-node-id="I7320:48355;7320:48353" style={{ fontVariationSettings: "'wdth' 100" }}>
              List item
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="7320:48356" data-name="<ListItem>">
        <div className="content-stretch flex items-center overflow-clip px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="I7320:48356;7320:46000" data-name="Container">
          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7320:48356;7320:48352" data-name="Container">
            <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body1,16px)] tracking-[0.15px] whitespace-nowrap" data-node-id="I7320:48356;7320:48353" style={{ fontVariationSettings: "'wdth' 100" }}>
              List item
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
