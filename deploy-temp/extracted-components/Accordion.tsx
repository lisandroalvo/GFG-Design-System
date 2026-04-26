const imgVector = "https://www.figma.com/api/mcp/asset/accordion-icon-url";

type AccordionProps = {
  className?: string;
  disabled?: "False";
  expanded?: "False";
  square?: "False";
};

function Accordion({ className, disabled = "False", expanded = "False", square = "False" }: AccordionProps) {
  return (
    <div className={className || "border-[var(--divider,rgba(0,0,0,0.12))] border-b border-solid content-stretch flex flex-col items-start relative w-[360px]"} data-node-id="899:96719">
      <div className="content-stretch flex items-center min-h-[48px] px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="899:96720" data-name="<AccordionSummary>">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="899:96721" data-name="Content">
          <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body1,16px)] tracking-[0.15px] w-full" data-node-id="899:96722" style={{ fontVariationSettings: "'wdth' 100" }}>
            Accordion 1
          </p>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center ml-[16px] overflow-clip p-[12px] relative rounded-[100px] shrink-0" data-node-id="899:96723" data-name="<IconButton>">
          <div className="content-stretch flex items-start relative shrink-0" data-node-id="I899:96723;10144:136816" data-name="<Icon>">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I899:96723;10144:136816;6594:47652" data-name="ExpandMoreFilled">
              <div className="absolute inset-[25%_29.17%]" data-node-id="I899:96723;10144:136816;6594:47652;7475:54258" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
