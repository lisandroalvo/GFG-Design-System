const imgVector = "https://www.figma.com/api/mcp/asset/c7c4e4f7-d6b6-4e5d-8a8e-d2c0e7b5e4f7";

type IconProps = {
  className?: string;
  color?: "Inherit";
  fontSize?: "Medium";
  iconName?: string;
};

function Icon({ className, color = "Inherit", fontSize = "Medium", iconName = "HomeFilled" }: IconProps) {
  return (
    <div className={className || "content-stretch flex items-start relative"} data-node-id="6594:47651">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="6594:47652" data-name="HomeFilled">
        <div className="absolute inset-[8.33%]" data-node-id="I6594:47652;7475:54429" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
        </div>
      </div>
    </div>
  );
}

export default Icon;
