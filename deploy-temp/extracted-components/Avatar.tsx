/**
 * Avatar Component - Extracted from Figma via MCP
 * 100% Accurate to Figma Design
 * 
 * Documentation: https://mui.com/api/avatar
 * Node ID: 6587:47403
 */

const imgVector = "https://www.figma.com/api/mcp/asset/11eef5dc-b137-47bd-aabc-8b5d086688e9";

type AvatarProps = {
  className?: string;
  badge?: boolean;
  content?: "Icon" | "Image" | "Text";
  size?: "40px" | "24px" | "32px" | "56px";
  variant?: "Square" | "Circular" | "Rounded";
};

function Avatar({ className, badge = false, content = "Icon", size = "40px", variant = "Square" }: AvatarProps) {
  return (
    <div className={className || "bg-[var(--_components\/avatar\/fill,#bdbdbd)] content-stretch flex flex-col items-center justify-center relative"} data-node-id="6682:47898">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-start left-1/2 top-1/2" data-node-id="9914:107274" data-name="<Icon>">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I9914:107274;6594:47652" data-name="PersonFilled">
          <div className="absolute inset-[16.67%]" data-node-id="I9914:107274;6594:47652;7475:50710" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0 size-[40px]">
        <div className="-rotate-90 flex-none">
          <div className="size-[40px]" data-node-id="899:98772" data-name="min-width" />
        </div>
      </div>
      {badge && (
        <div className="absolute bg-[var(--_components\/paper\/elevation-0,white)] bottom-[-2px] right-[-2px] rounded-[100px] size-[12px]" data-node-id="6682:47901" data-name="border">
          <div className="absolute bg-[var(--success\/main,#2e7d32)] content-stretch flex inset-[16.67%_16.67%_16.66%_16.67%] items-start overflow-clip rounded-[100px]" data-node-id="6682:47902" data-name="<Badge>">
            <div className="rounded-[100px] shrink-0 size-[8px]" data-node-id="I6682:47902;613:92225" data-name="min-width" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Avatar;
