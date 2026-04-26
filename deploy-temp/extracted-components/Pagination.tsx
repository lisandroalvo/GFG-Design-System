const imgVector = "https://www.figma.com/api/mcp/asset/pagination-arrow-url";

type PaginationProps = {
  className?: string;
  boundaryCount?: "1";
  color?: "Standard";
  count?: "10";
  disabled?: "False";
  hideNextButton?: "False";
  hidePrevButton?: "False";
  shape?: "Rounded";
  showFirstButton?: "False";
  showLastButton?: "False";
  siblingCount?: "1";
  size?: "Medium";
  variant?: "Text";
};

function Pagination({ className, boundaryCount = "1", color = "Standard", count = "10", disabled = "False", hideNextButton = "False", hidePrevButton = "False", shape = "Rounded", showFirstButton = "False", showLastButton = "False", siblingCount = "1", size = "Medium", variant = "Text" }: PaginationProps) {
  return (
    <div className={className || "content-stretch flex items-center relative"} data-node-id="899:98765">
      <div className="content-stretch flex gap-[3px] items-start relative shrink-0" data-node-id="899:98766" data-name="List">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0" data-node-id="899:98767" data-name="<IconButton>">
          <div className="content-stretch flex items-start relative shrink-0" data-node-id="I899:98767;10144:136816" data-name="<Icon>">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I899:98767;10144:136816;6594:47652" data-name="NavigateBeforeFilled">
              <div className="absolute inset-[25%_29.17%]" data-node-id="I899:98767;10144:136816;6594:47652;7475:54236" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[32px]" data-node-id="899:98768" data-name="<PaginationItem>">
          <div className="absolute bg-[var(--primary\/_states\/selected,rgba(25,118,210,0.08))] left-0 overflow-clip rounded-[var(--borderradius,4px)] size-[32px] top-0" data-node-id="I899:98768;11145:211054" data-name="<ButtonBase>">
            <p className="absolute font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] inset-[calc(25%-0.5px)_calc(37.5%-0.5px)] leading-[1.43] text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body2,14px)] text-center tracking-[0.17px] whitespace-nowrap" data-node-id="I899:98768;11145:211055" style={{ fontVariationSettings: "'wdth' 100" }}>
              1
            </p>
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[32px]" data-node-id="899:98769" data-name="<PaginationItem>">
          <div className="absolute left-0 overflow-clip rounded-[var(--borderradius,4px)] size-[32px] top-0" data-node-id="I899:98769;11145:211054" data-name="<ButtonBase>">
            <p className="absolute font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] inset-[calc(25%-0.5px)_calc(37.5%-0.5px)] leading-[1.43] text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body2,14px)] text-center tracking-[0.17px] whitespace-nowrap" data-node-id="I899:98769;11145:211055" style={{ fontVariationSettings: "'wdth' 100" }}>
              2
            </p>
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[32px]" data-node-id="899:98770" data-name="<PaginationItem>">
          <div className="absolute left-0 overflow-clip rounded-[var(--borderradius,4px)] size-[32px] top-0" data-node-id="I899:98770;11145:211054" data-name="<ButtonBase>">
            <p className="absolute font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] inset-[calc(25%-0.5px)_calc(37.5%-0.5px)] leading-[1.43] text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body2,14px)] text-center tracking-[0.17px] whitespace-nowrap" data-node-id="I899:98770;11145:211055" style={{ fontVariationSettings: "'wdth' 100" }}>
              3
            </p>
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[32px]" data-node-id="899:98771" data-name="<PaginationItem>">
          <div className="absolute left-0 overflow-clip rounded-[var(--borderradius,4px)] size-[32px] top-0" data-node-id="I899:98771;11145:211054" data-name="<ButtonBase>">
            <p className="absolute font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] inset-[calc(25%-0.5px)_calc(37.5%-0.5px)] leading-[1.43] text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body2,14px)] text-center tracking-[0.17px] whitespace-nowrap" data-node-id="I899:98771;11145:211055" style={{ fontVariationSettings: "'wdth' 100" }}>
              4
            </p>
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[32px]" data-node-id="899:98772" data-name="<PaginationItem>">
          <div className="absolute left-0 overflow-clip rounded-[var(--borderradius,4px)] size-[32px] top-0" data-node-id="I899:98772;11145:211054" data-name="<ButtonBase>">
            <p className="absolute font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] inset-[calc(25%-0.5px)_calc(37.5%-0.5px)] leading-[1.43] text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body2,14px)] text-center tracking-[0.17px] whitespace-nowrap" data-node-id="I899:98772;11145:211055" style={{ fontVariationSettings: "'wdth' 100" }}>
              5
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0" data-node-id="899:98773" data-name="<IconButton>">
          <div className="content-stretch flex items-start relative shrink-0" data-node-id="I899:98773;10144:136816" data-name="<Icon>">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I899:98773;10144:136816;6594:47652" data-name="NavigateNextFilled">
              <div className="absolute inset-[25%_29.17%]" data-node-id="I899:98773;10144:136816;6594:47652;7475:54247" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
