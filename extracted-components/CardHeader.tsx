type CardHeaderProps = {
  className?: string;
  action?: "False";
  avatar?: "False";
  subheader?: "False";
};

function CardHeader({ className, action = "False", avatar = "False", subheader = "False" }: CardHeaderProps) {
  return (
    <div className={className || "content-stretch flex items-start p-[16px] relative w-[344px]"} data-node-id="6572:50229">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="6572:50230" data-name="Content">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="6572:50231" data-name="<Typography>">
          <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.334] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/h5,24px)] tracking-[0px] w-full" data-node-id="I6572:50231;899:99868" style={{ fontVariationSettings: "'wdth' 100" }}>
            Title
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardHeader;
