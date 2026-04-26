/**
 * Button Component - Extracted from Figma via MCP
 * 100% Accurate to Figma Design
 * 
 * Documentation: https://mui.com/api/button
 * Node ID: 6543:36744
 */

const imgSentimentCalm = "https://www.figma.com/api/mcp/asset/8d24623a-18ec-4e2e-826c-ab100c02413b";
const imgSentimentCalm1 = "https://www.figma.com/api/mcp/asset/5b4ddaa7-a7d6-4158-bd5c-7d8307345bf8";
const imgVector = "https://www.figma.com/api/mcp/asset/15408c8b-e6aa-4cb6-aaaa-ea4f3c6be95a";
const imgVector1 = "https://www.figma.com/api/mcp/asset/9a17756e-ccda-43ee-950a-8fe2b6e353a2";

type ButtonProps = {
  className?: string;
  color?: "Success";
  endIcon?: boolean;
  endIcon1?: React.ReactNode | null;
  iconLeft?: boolean;
  iconRight?: boolean;
  label?: string;
  size?: "Large";
  startIcon?: boolean;
  startIcon1?: React.ReactNode | null;
  state?: "Enabled";
  variant?: "Contained";
};

function Button({ 
  className, 
  color = "Success", 
  endIcon = false, 
  endIcon1 = null, 
  iconLeft = true, 
  iconRight = true, 
  label = "Label", 
  size = "Large", 
  startIcon = false, 
  startIcon1 = null, 
  state = "Enabled", 
  variant = "Contained" 
}: ButtonProps) {
  return (
    <div 
      className={className || "bg-[var(--good-sage-\\(success\\)\\/sage-1,#637058)] content-stretch flex flex-col h-[44px] items-center justify-center overflow-clip px-[20px] py-[10px] relative rounded-[var(--radius\\/button,6px)]"} 
      data-node-id="6543:36755"
    >
      <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-node-id="15667:32056">
        {iconLeft && (
          <div className="relative shrink-0 size-[14px]" data-node-id="15667:36349" data-name="sentiment_calm">
            <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" data-node-id="I15667:36349;1:30768" style={{ maskImage: `url('${imgSentimentCalm}')` }} data-name="sentiment_calm">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSentimentCalm1} />
            </div>
          </div>
        )}
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="9974:114007" data-name="Base">
          {startIcon &&
            (startIcon1 || (
              <div className="overflow-clip relative shrink-0 size-[22px]" data-node-id="9974:114010" data-name="Icon Left">
                <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-node-id="I9974:114010;7475:54236" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
                </div>
              </div>
            ))}
          <p className="font-[family-name:var(--font\/family\/body,'Lato:Bold',sans-serif)] leading-[normal] not-italic relative shrink-0 text-[color:var(--primary\/clear-dust,#fbf9f7)] text-[length:var(--font\/size\/overline,11px)] tracking-[1.98px] uppercase whitespace-nowrap" data-node-id="9974:114011">
            {label}
          </p>
          {endIcon &&
            (endIcon1 || (
              <div className="overflow-clip relative shrink-0 size-[22px]" data-node-id="9974:114013" data-name="Icon Right">
                <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-node-id="I9974:114013;7475:54247" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
              </div>
            ))}
        </div>
        {iconRight && (
          <div className="relative shrink-0 size-[14px]" data-node-id="15667:30235" data-name="sentiment_calm">
            <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" data-node-id="I15667:30235;1:30768" style={{ maskImage: `url('${imgSentimentCalm}')` }} data-name="sentiment_calm">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSentimentCalm1} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Button;
