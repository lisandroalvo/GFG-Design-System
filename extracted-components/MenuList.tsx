type MenuListProps = {
  className?: string;
  autoWidth?: "True";
  dense?: "True";
  disGutters?: "True";
  smallScreen?: "False";
};

function MenuList({ className, autoWidth = "True", dense = "True", disGutters = "True", smallScreen = "False" }: MenuListProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start py-[8px] relative"} data-node-id="111:61863">
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-node-id="111:61864" data-name="<MenuItem>">
        <div className="content-stretch flex items-center overflow-clip py-[4px] relative shrink-0" data-node-id="I111:61864;10070:120208" data-name="Container">
          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I111:61864;7320:48352" data-name="Container">
            <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[24px] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--_fontsize\/0\,875rem,14px)] tracking-[0.17px] whitespace-nowrap" data-node-id="I111:61864;10100:157237" style={{ fontVariationSettings: "'wdth' 100" }}>
              Menu Item
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-node-id="111:61865" data-name="<MenuItem>">
        <div className="content-stretch flex items-center overflow-clip py-[4px] relative shrink-0" data-node-id="I111:61865;10070:120208" data-name="Container">
          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I111:61865;7320:48352" data-name="Container">
            <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[24px] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--_fontsize\/0\,875rem,14px)] tracking-[0.17px] whitespace-nowrap" data-node-id="I111:61865;10100:157237" style={{ fontVariationSettings: "'wdth' 100" }}>
              Menu Item
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-node-id="111:61867" data-name="<MenuItem>">
        <div className="content-stretch flex items-center overflow-clip py-[4px] relative shrink-0" data-node-id="I111:61867;10070:120208" data-name="Container">
          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I111:61867;7320:48352" data-name="Container">
            <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[24px] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--_fontsize\/0\,875rem,14px)] tracking-[0.17px] whitespace-nowrap" data-node-id="I111:61867;10100:157237" style={{ fontVariationSettings: "'wdth' 100" }}>
              Menu Item
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuList;
