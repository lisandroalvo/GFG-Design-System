const imgSentimentCalm = "https://www.figma.com/api/mcp/asset/dialog-icon-url";

type DialogProps = {
  className?: string;
  fullScreen?: "False";
  fullWidth?: "False";
  maxWidth?: "Small";
  scroll?: "Paper";
};

function Dialog({ className, fullScreen = "False", fullWidth = "False", maxWidth = "Small", scroll = "Paper" }: DialogProps) {
  return (
    <div className={className || "bg-[var(--_components\\/backdrop\\/fill,rgba(0,0,0,0.5))] content-stretch flex flex-col h-[852px] items-center justify-center relative w-[393px]"} data-node-id="127:59921">
      <div className="bg-[var(--_components\/paper\/elevation-24,white)] content-stretch flex flex-col items-start max-w-[600px] min-w-[600px] overflow-clip relative rounded-[var(--borderradius,4px)] shadow-[0px_11px_15px_-7px_rgba(0,0,0,0.2),0px_24px_38px_3px_rgba(0,0,0,0.14),0px_9px_46px_8px_rgba(0,0,0,0.12)] shrink-0 w-full" data-node-id="127:59922" data-name="Paper">
        <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-full" data-node-id="127:59923" data-name="<DialogTitle>">
          <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.6] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/h6,20px)] tracking-[0.15px] w-full" data-node-id="127:59924" style={{ fontVariationSettings: "'wdth' 100" }}>
            Dialog Title
          </p>
        </div>
        <div className="border-[var(--divider,rgba(0,0,0,0.12))] border-b border-solid border-t content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-full" data-node-id="127:59925" data-name="<DialogContent>">
          <div className="bg-[rgba(151,71,255,0.04)] border border-[#9747ff] border-dashed content-stretch flex flex-col items-center justify-center px-[24px] py-[4px] relative rounded-[var(--borderradius,4px)] shrink-0 w-full" data-node-id="I127:59925;10020:110248" data-name="*Library / Instance Slot">
            <div className="flex flex-col font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] justify-center leading-[0] relative shrink-0 text-[#9747ff] text-[length:var(--_fontsize\/0\,75rem,12px)] text-center tracking-[0.4px] whitespace-nowrap" data-node-id="I127:59925;10020:109863" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[1.66]">Instance Slot</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] items-center justify-end p-[8px] relative shrink-0 w-full" data-node-id="127:59926" data-name="<DialogActions>">
          <div className="content-stretch flex flex-col h-[34px] items-center justify-center overflow-clip px-[20px] py-[10px] relative rounded-[var(--radius\/button,6px)] shrink-0" data-node-id="127:59927" data-name="<Button>">
            <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-node-id="I127:59927;15667:31995">
              <div className="relative shrink-0 size-[14px]" data-node-id="I127:59927;15667:36456" data-name="sentiment_calm">
                <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" data-node-id="I127:59927;15667:36456;1:30768" style={{ maskImage: `url('${imgSentimentCalm}')` }} data-name="sentiment_calm">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSentimentCalm} />
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="I127:59927;9996:109957" data-name="Base">
                <p className="font-[family-name:var(--font\/family\/body,'Lato:Bold',sans-serif)] leading-[normal] not-italic relative shrink-0 text-[color:var(--primary\/dark-dust,#af9577)] text-[length:var(--font\/size\/overline,11px)] tracking-[1.98px] uppercase whitespace-nowrap" data-node-id="I127:59927;9996:109958">
                  Disagree
                </p>
              </div>
              <div className="relative shrink-0 size-[14px]" data-node-id="I127:59927;15667:30179" data-name="sentiment_calm">
                <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" data-node-id="I127:59927;15667:30179;1:30768" style={{ maskImage: `url('${imgSentimentCalm}')` }} data-name="sentiment_calm">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSentimentCalm} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[34px] items-center justify-center overflow-clip px-[20px] py-[10px] relative rounded-[var(--radius\/button,6px)] shrink-0" data-node-id="127:59928" data-name="<Button>">
            <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-node-id="I127:59928;15667:31995">
              <div className="relative shrink-0 size-[14px]" data-node-id="I127:59928;15667:36456" data-name="sentiment_calm">
                <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" data-node-id="I127:59928;15667:36456;1:30768" style={{ maskImage: `url('${imgSentimentCalm}')` }} data-name="sentiment_calm">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSentimentCalm} />
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="I127:59928;9996:109957" data-name="Base">
                <p className="font-[family-name:var(--font\/family\/body,'Lato:Bold',sans-serif)] leading-[normal] not-italic relative shrink-0 text-[color:var(--primary\/dark-dust,#af9577)] text-[length:var(--font\/size\/overline,11px)] tracking-[1.98px] uppercase whitespace-nowrap" data-node-id="I127:59928;9996:109958">
                  Agree
                </p>
              </div>
              <div className="relative shrink-0 size-[14px]" data-node-id="I127:59928;15667:30179" data-name="sentiment_calm">
                <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" data-node-id="I127:59928;15667:30179;1:30768" style={{ maskImage: `url('${imgSentimentCalm}')` }} data-name="sentiment_calm">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSentimentCalm} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
