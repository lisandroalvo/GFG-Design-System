const imgSentimentCalm = "https://www.figma.com/api/mcp/asset/eaf4c10a-71f5-49db-b5e8-99d0fcecb59c";
const imgSentimentCalm1 = "https://www.figma.com/api/mcp/asset/d7008c14-9f68-4b36-8254-4d3c04f9ce97";

type DialogActionsProps = {
  className?: string;
  actions?: "2";
};

function DialogActions({ className, actions = "2" }: DialogActionsProps) {
  return (
    <div className={className || "content-stretch flex gap-[8px] items-center justify-end p-[8px] relative w-[600px]"} data-node-id="6643:52226">
      <div className="content-stretch flex flex-col h-[34px] items-center justify-center overflow-clip px-[20px] py-[10px] relative rounded-[var(--radius\/button,6px)] shrink-0" data-node-id="11480:179606" data-name="Action #2">
        <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-node-id="I11480:179606;15667:31995">
          <div className="relative shrink-0 size-[14px]" data-node-id="I11480:179606;15667:36456" data-name="sentiment_calm">
            <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" data-node-id="I11480:179606;15667:36456;1:30768" style={{ maskImage: `url('${imgSentimentCalm}')` }} data-name="sentiment_calm">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSentimentCalm1} />
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="I11480:179606;9996:109957" data-name="Base">
            <p className="font-[family-name:var(--font\/family\/body,'Lato:Bold',sans-serif)] leading-[normal] not-italic relative shrink-0 text-[color:var(--primary\/dark-dust,#af9577)] text-[length:var(--font\/size\/overline,11px)] tracking-[1.98px] uppercase whitespace-nowrap" data-node-id="I11480:179606;9996:109958">
              Action
            </p>
          </div>
          <div className="relative shrink-0 size-[14px]" data-node-id="I11480:179606;15667:30179" data-name="sentiment_calm">
            <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" data-node-id="I11480:179606;15667:30179;1:30768" style={{ maskImage: `url('${imgSentimentCalm}')` }} data-name="sentiment_calm">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSentimentCalm1} />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[34px] items-center justify-center overflow-clip px-[20px] py-[10px] relative rounded-[var(--radius\/button,6px)] shrink-0" data-node-id="6643:52217" data-name="Action #1">
        <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-node-id="I6643:52217;15667:31995">
          <div className="relative shrink-0 size-[14px]" data-node-id="I6643:52217;15667:36456" data-name="sentiment_calm">
            <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" data-node-id="I6643:52217;15667:36456;1:30768" style={{ maskImage: `url('${imgSentimentCalm}')` }} data-name="sentiment_calm">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSentimentCalm1} />
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="I6643:52217;9996:109957" data-name="Base">
            <p className="font-[family-name:var(--font\/family\/body,'Lato:Bold',sans-serif)] leading-[normal] not-italic relative shrink-0 text-[color:var(--primary\/dark-dust,#af9577)] text-[length:var(--font\/size\/overline,11px)] tracking-[1.98px] uppercase whitespace-nowrap" data-node-id="I6643:52217;9996:109958">
              Action
            </p>
          </div>
          <div className="relative shrink-0 size-[14px]" data-node-id="I6643:52217;15667:30179" data-name="sentiment_calm">
            <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" data-node-id="I6643:52217;15667:30179;1:30768" style={{ maskImage: `url('${imgSentimentCalm}')` }} data-name="sentiment_calm">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSentimentCalm1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DialogActions;
