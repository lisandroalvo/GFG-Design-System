const imgVector = "https://www.figma.com/api/mcp/asset/ec706482-7412-4765-ad36-b5acd953f23a";

type BottomNavigationActionProps = {
  className?: string;
  active?: "False";
  label?: "True";
  labelContent?: string;
  state?: "Disabled";
};

function BottomNavigationAction({ className, active = "False", label = "True", labelContent = "Label", state = "Disabled" }: BottomNavigationActionProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-center justify-center pb-[8px] pt-[6px] px-[12px] relative"} data-node-id="6572:50303">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="6572:50304" data-name="FavoriteFilled">
        <div className="absolute inset-[11.77%_8.33%]" data-node-id="I6572:50304;7475:71000" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
        </div>
      </div>
      <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-node-id="6572:50305" data-name="Text Wrapper">
        <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.66] relative shrink-0 text-[color:var(--text\/disabled,rgba(0,0,0,0.38))] text-[length:var(--typography\/caption,12px)] text-center tracking-[0.4px] whitespace-nowrap" data-node-id="6572:50306" style={{ fontVariationSettings: "'wdth' 100" }}>
          {labelContent}
        </p>
      </div>
    </div>
  );
}

export default BottomNavigationAction;
