type TabsProps = {
  className?: string;
  centered?: "False";
  scrollButtons?: "False";
  tabs?: "3";
  variant?: "Standard";
};

function Tabs({ className, centered = "False", scrollButtons = "False", tabs = "3", variant = "Standard" }: TabsProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative w-[384px]"} data-node-id="11443:170047">
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="11443:170048" data-name="Tabs">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-[48px] min-w-[90px] overflow-clip px-[16px] py-[12px] relative" data-node-id="11443:170049" data-name="<Tab>">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="I11443:170049;11443:170042" data-name="Label">
            <p className="font-[family-name:var(--fontfamily,'Roboto:Medium',sans-serif)] font-[var(--fontweightmedium,500)] leading-[1.75] relative shrink-0 text-[color:var(--text\/secondary,rgba(0,0,0,0.6))] text-[length:var(--typography\/button,14px)] tracking-[0.4px] uppercase whitespace-nowrap" data-node-id="I11443:170049;11443:170043" style={{ fontVariationSettings: "'wdth' 100" }}>
              Item One
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-[48px] min-w-[90px] overflow-clip px-[16px] py-[12px] relative" data-node-id="11443:170050" data-name="<Tab>">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="I11443:170050;11443:170042" data-name="Label">
            <p className="font-[family-name:var(--fontfamily,'Roboto:Medium',sans-serif)] font-[var(--fontweightmedium,500)] leading-[1.75] relative shrink-0 text-[color:var(--primary\/main,#1976d2)] text-[length:var(--typography\/button,14px)] tracking-[0.4px] uppercase whitespace-nowrap" data-node-id="I11443:170050;11443:170043" style={{ fontVariationSettings: "'wdth' 100" }}>
              Item Two
            </p>
          </div>
          <div className="absolute bg-[var(--primary\/main,#1976d2)] bottom-0 h-[2px] left-0 right-0" data-node-id="I11443:170050;11443:170044" data-name="Indicator" />
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-[48px] min-w-[90px] overflow-clip px-[16px] py-[12px] relative" data-node-id="11443:170051" data-name="<Tab>">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="I11443:170051;11443:170042" data-name="Label">
            <p className="font-[family-name:var(--fontfamily,'Roboto:Medium',sans-serif)] font-[var(--fontweightmedium,500)] leading-[1.75] relative shrink-0 text-[color:var(--text\/secondary,rgba(0,0,0,0.6))] text-[length:var(--typography\/button,14px)] tracking-[0.4px] uppercase whitespace-nowrap" data-node-id="I11443:170051;11443:170043" style={{ fontVariationSettings: "'wdth' 100" }}>
              Item Three
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[var(--divider,rgba(0,0,0,0.12))] h-px relative shrink-0 w-full" data-node-id="11443:170052" data-name="Divider" />
    </div>
  );
}

export default Tabs;
