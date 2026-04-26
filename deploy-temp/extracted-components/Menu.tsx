type MenuProps = {
  className?: string;
  anchorOrigin?: "Top Left";
  transformOrigin?: "Top Left";
};

function Menu({ className, anchorOrigin = "Top Left", transformOrigin = "Top Left" }: MenuProps) {
  return (
    <div className={className || "bg-[var(--_components\\/paper\\/elevation-8,white)] content-stretch flex flex-col items-start max-h-[calc(100%-96px)] max-w-[calc(100%-32px)] min-h-[16px] min-w-[16px] overflow-clip py-[8px] relative rounded-[var(--borderradius,4px)] shadow-[0px_3px_14px_2px_rgba(0,0,0,0.12),0px_8px_10px_1px_rgba(0,0,0,0.14),0px_5px_5px_-3px_rgba(0,0,0,0.2)]"} data-node-id="899:98403">
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-node-id="899:98404" data-name="<MenuItem>">
        <div className="content-stretch flex items-center overflow-clip px-[16px] py-[6px] relative shrink-0" data-node-id="I899:98404;10070:120208" data-name="Container">
          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I899:98404;7320:48352" data-name="Container">
            <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body1,16px)] tracking-[0.15px] whitespace-nowrap" data-node-id="I899:98404;7320:48353" style={{ fontVariationSettings: "'wdth' 100" }}>
              Menu Item
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-node-id="899:98405" data-name="<MenuItem>">
        <div className="content-stretch flex items-center overflow-clip px-[16px] py-[6px] relative shrink-0" data-node-id="I899:98405;10070:120208" data-name="Container">
          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I899:98405;7320:48352" data-name="Container">
            <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body1,16px)] tracking-[0.15px] whitespace-nowrap" data-node-id="I899:98405;7320:48353" style={{ fontVariationSettings: "'wdth' 100" }}>
              Menu Item
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-node-id="899:98406" data-name="<MenuItem>">
        <div className="content-stretch flex items-center overflow-clip px-[16px] py-[6px] relative shrink-0" data-node-id="I899:98406;10070:120208" data-name="Container">
          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I899:98406;7320:48352" data-name="Container">
            <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body1,16px)] tracking-[0.15px] whitespace-nowrap" data-node-id="I899:98406;7320:48353" style={{ fontVariationSettings: "'wdth' 100" }}>
              Menu Item
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
