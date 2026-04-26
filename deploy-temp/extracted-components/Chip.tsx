/**
 * Chip Component - Extracted from Figma via MCP
 * 100% Accurate to Figma Design
 * 
 * Documentation: https://mui.com/api/chip
 * Node ID: 6588:47683
 * 
 * Usage:
 * import Chip from '@mui/material/Chip';
 * <Chip label="Chip" color="primary" size="small" variant="outlined" />
 */

const imgIcon = "https://www.figma.com/api/mcp/asset/a6d749d3-e68e-4996-816d-0f22b7a58fb8";

type ChipProps = {
  className?: string;
  color?: "Primary" | "Secondary" | "Success" | "Error" | "Info" | "Warning";
  label?: string;
  leftIcon?: boolean;
  rightIcon?: boolean;
  size?: "Small" | "Medium";
  state?: "Focused" | "Enabled" | "Disabled";
  thumbnail?: boolean;
  variant?: "Outlined" | "Filled";
};

function Chip({ 
  className, 
  color = "Primary", 
  label = "Chip", 
  leftIcon = false, 
  rightIcon = false, 
  size = "Small", 
  state = "Focused", 
  thumbnail = false, 
  variant = "Outlined" 
}: ChipProps) {
  return (
    <div className={className || "bg-[var(--primary\\/light-dust,#f4efea)] border border-[var(--primary\\/dark-dust,#af9577)] border-solid content-stretch flex items-center max-h-[24px] min-h-[24px] overflow-clip px-[4px] py-[3px] relative rounded-[100px]"} data-node-id="7486:49733">
      {thumbnail && (
        <div className="bg-[var(--primary\/dark,#1565c0)] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0" data-node-id="7486:49735" data-name="<Avatar>">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] justify-center leading-[0] left-1/2 max-w-[18px] text-[color:var(--_components\/paper\/elevation-0,white)] text-[length:var(--_fontsize\/0\,625rem,10px)] text-center top-[calc(50%+1px)] w-[18px]" data-node-id="I7486:49735;1039:25273" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[10px]">OP</p>
          </div>
          <div className="flex items-center justify-center relative shrink-0 size-[18px]">
            <div className="-rotate-90 flex-none">
              <div className="size-[18px]" data-node-id="I7486:49735;1039:25274" data-name="min-width" />
            </div>
          </div>
        </div>
      )}
      {leftIcon && (
        <div className="opacity-70 overflow-clip relative rounded-[100px] shrink-0 size-[16px]" data-node-id="15825:20623" data-name="cancel">
          <div className="absolute inset-[8.33%]" data-node-id="I15825:20623;54616:25504" data-name="icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
          </div>
        </div>
      )}
      <div className="content-stretch flex flex-col items-start justify-center min-h-[24px] px-[6px] relative shrink-0" data-node-id="7486:49736" data-name="Typography">
        <p className="font-[family-name:var(--font\/family\/body,'Lato:Regular',sans-serif)] leading-[normal] not-italic relative shrink-0 text-[color:var(--primary\/dark-dust,#af9577)] text-[length:var(--font\/size\/body2,13px)] whitespace-nowrap" data-node-id="7486:49737">
          {label}
        </p>
      </div>
      {rightIcon && (
        <div className="opacity-70 overflow-clip relative rounded-[100px] shrink-0 size-[16px]" data-node-id="7486:49738" data-name="cancel">
          <div className="absolute inset-[8.33%]" data-node-id="I7486:49738;54616:25504" data-name="icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Chip;
