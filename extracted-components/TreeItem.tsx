const imgVector = "https://www.figma.com/api/mcp/asset/tree-item-icon";

type TreeItemProps = {
  className?: string;
  expanded?: "False";
  hasChildren?: "True";
  selected?: "False";
};

function TreeItem({ className, expanded = "False", hasChildren = "True", selected = "False" }: TreeItemProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative w-[200px]"} data-node-id="6601:51150">
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="6601:51151" data-name="Container">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0" data-node-id="6601:51152" data-name="<IconButton>">
          <div className="content-stretch flex items-start relative shrink-0" data-node-id="I6601:51152;10144:136816" data-name="<Icon>">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I6601:51152;10144:136816;6594:47652" data-name="ChevronRightFilled">
              <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-node-id="I6601:51152;10144:136816;6594:47652;7475:54247" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip px-[8px] py-[4px] relative rounded-[var(--borderradius,4px)]" data-node-id="6601:51153" data-name="Label">
          <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body1,16px)] tracking-[0.15px] whitespace-nowrap" data-node-id="6601:51154" style={{ fontVariationSettings: "'wdth' 100" }}>
            Label
          </p>
        </div>
      </div>
    </div>
  );
}

export default TreeItem;
