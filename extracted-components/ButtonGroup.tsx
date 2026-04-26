const imgSentimentCalm = "https://www.figma.com/api/mcp/asset/button-group-icon-url";

type ButtonGroupProps = {
  className?: string;
  color?: "Primary";
  disabled?: "False";
  disableElevation?: "False";
  fullWidth?: "False";
  orientation?: "Horizontal";
  size?: "Medium";
  variant?: "Outlined";
};

function ButtonGroup({ className, color = "Primary", disabled = "False", disableElevation = "False", fullWidth = "False", orientation = "Horizontal", size = "Medium", variant = "Outlined" }: ButtonGroupProps) {
  return (
    <div className={className || "content-stretch flex items-start relative"} data-node-id="10144:136814">
      <div className="border-[var(--primary\/main,#1976d2)] border-y border-l border-solid content-stretch flex flex-col h-[34px] items-center justify-center overflow-clip px-[20px] py-[10px] relative rounded-l-[var(--radius\/button,6px)] shrink-0" data-node-id="10144:136815" data-name="<Button>">
        <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-node-id="I10144:136815;15667:31995">
          <div className="relative shrink-0 size-[14px]" data-node-id="I10144:136815;15667:36456" data-name="sentiment_calm">
            <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" data-node-id="I10144:136815;15667:36456;1:30768" style={{ maskImage: `url('${imgSentimentCalm}')` }} data-name="sentiment_calm">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSentimentCalm} />
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="I10144:136815;9996:109957" data-name="Base">
            <p className="font-[family-name:var(--font\/family\/body,'Lato:Bold',sans-serif)] leading-[normal] not-italic relative shrink-0 text-[color:var(--primary\/dark-dust,#af9577)] text-[length:var(--font\/size\/overline,11px)] tracking-[1.98px] uppercase whitespace-nowrap" data-node-id="I10144:136815;9996:109958">
              One
            </p>
          </div>
          <div className="relative shrink-0 size-[14px]" data-node-id="I10144:136815;15667:30179" data-name="sentiment_calm">
            <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" data-node-id="I10144:136815;15667:30179;1:30768" style={{ maskImage: `url('${imgSentimentCalm}')` }} data-name="sentiment_calm">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSentimentCalm} />
            </div>
          </div>
        </div>
      </div>
      <div className="border-[var(--primary\/main,#1976d2)] border-y border-solid content-stretch flex flex-col h-[34px] items-center justify-center overflow-clip px-[20px] py-[10px] relative shrink-0" data-node-id="10144:136817" data-name="<Button>">
        <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-node-id="I10144:136817;15667:31995">
          <div className="relative shrink-0 size-[14px]" data-node-id="I10144:136817;15667:36456" data-name="sentiment_calm">
            <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" data-node-id="I10144:136817;15667:36456;1:30768" style={{ maskImage: `url('${imgSentimentCalm}')` }} data-name="sentiment_calm">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSentimentCalm} />
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="I10144:136817;9996:109957" data-name="Base">
            <p className="font-[family-name:var(--font\/family\/body,'Lato:Bold',sans-serif)] leading-[normal] not-italic relative shrink-0 text-[color:var(--primary\/dark-dust,#af9577)] text-[length:var(--font\/size\/overline,11px)] tracking-[1.98px] uppercase whitespace-nowrap" data-node-id="I10144:136817;9996:109958">
              Two
            </p>
          </div>
          <div className="relative shrink-0 size-[14px]" data-node-id="I10144:136817;15667:30179" data-name="sentiment_calm">
            <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" data-node-id="I10144:136817;15667:30179;1:30768" style={{ maskImage: `url('${imgSentimentCalm}')` }} data-name="sentiment_calm">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSentimentCalm} />
            </div>
          </div>
        </div>
      </div>
      <div className="border-[var(--primary\/main,#1976d2)] border-y border-r border-solid content-stretch flex flex-col h-[34px] items-center justify-center overflow-clip px-[20px] py-[10px] relative rounded-r-[var(--radius\/button,6px)] shrink-0" data-node-id="10144:136818" data-name="<Button>">
        <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-node-id="I10144:136818;15667:31995">
          <div className="relative shrink-0 size-[14px]" data-node-id="I10144:136818;15667:36456" data-name="sentiment_calm">
            <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" data-node-id="I10144:136818;15667:36456;1:30768" style={{ maskImage: `url('${imgSentimentCalm}')` }} data-name="sentiment_calm">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSentimentCalm} />
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="I10144:136818;9996:109957" data-name="Base">
            <p className="font-[family-name:var(--font\/family\/body,'Lato:Bold',sans-serif)] leading-[normal] not-italic relative shrink-0 text-[color:var(--primary\/dark-dust,#af9577)] text-[length:var(--font\/size\/overline,11px)] tracking-[1.98px] uppercase whitespace-nowrap" data-node-id="I10144:136818;9996:109958">
              Three
            </p>
          </div>
          <div className="relative shrink-0 size-[14px]" data-node-id="I10144:136818;15667:30179" data-name="sentiment_calm">
            <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" data-node-id="I10144:136818;15667:30179;1:30768" style={{ maskImage: `url('${imgSentimentCalm}')` }} data-name="sentiment_calm">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSentimentCalm} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ButtonGroup;
