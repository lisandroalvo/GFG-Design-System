const imgVector = "https://www.figma.com/api/mcp/asset/07988a56-adb6-46e4-8eb3-b96fe9b8a4a1";

type AvatarGroupProps = {
  className?: string;
  max?: "3";
  size?: "32px";
  spacing?: "Number";
};

function AvatarGroup({ className, max = "3", size = "32px", spacing = "Number" }: AvatarGroupProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start pl-[2px] py-[2px] relative"} data-node-id="8599:89240">
      <div className="h-[36px] relative shrink-0 w-[94px]" data-node-id="8599:89241" data-name="Container">
        <div className="absolute bg-[var(--_components\/avatar\/fill,#bdbdbd)] content-stretch flex flex-col inset-[5.56%_0_5.56%_65.96%] items-center justify-center min-h-[32px] min-w-[32px] overflow-clip rounded-[100px]" data-node-id="8599:89242" data-name="<Avatar>">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] justify-center leading-[0] left-1/2 text-[color:var(--_components\/paper\/elevation-0,white)] text-[length:var(--_fontsize\/1\,25rem,20px)] text-center top-1/2 tracking-[0.14px] w-[32px]" data-node-id="I8599:89242;9914:107298" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px]">+3</p>
          </div>
          <div className="flex items-center justify-center relative shrink-0 size-[32px]">
            <div className="-rotate-90 flex-none">
              <div className="size-[32px]" data-node-id="I8599:89242;899:95410" data-name="min-width" />
            </div>
          </div>
        </div>
        <div className="absolute bg-[var(--_components\/avatar\/fill,#bdbdbd)] border-2 border-[var(--_components\/paper\/elevation-0,white)] border-solid content-stretch flex flex-col inset-[5.56%_31.91%_5.56%_34.04%] items-center justify-center min-h-[32px] min-w-[32px] overflow-clip rounded-[100px]" data-node-id="8599:89243" data-name="<Avatar>">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-start left-1/2 top-1/2" data-node-id="I8599:89243;9914:107308" data-name="<Icon>">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I8599:89243;9914:107308;6594:47652" data-name="PersonFilled">
              <div className="absolute inset-[16.67%]" data-node-id="I8599:89243;9914:107308;6594:47652;7475:50710" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center relative shrink-0 size-[32px]">
            <div className="-rotate-90 flex-none">
              <div className="size-[32px]" data-node-id="I8599:89243;899:95494" data-name="min-width" />
            </div>
          </div>
        </div>
        <div className="absolute bg-[var(--_components\/avatar\/fill,#bdbdbd)] border-2 border-[var(--_components\/paper\/elevation-0,white)] border-solid content-stretch flex flex-col inset-[5.56%_63.83%_5.56%_2.13%] items-center justify-center min-h-[32px] min-w-[32px] overflow-clip rounded-[100px]" data-node-id="8599:89244" data-name="<Avatar>">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-start left-1/2 top-1/2" data-node-id="I8599:89244;9914:107308" data-name="<Icon>">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I8599:89244;9914:107308;6594:47652" data-name="PersonFilled">
              <div className="absolute inset-[16.67%]" data-node-id="I8599:89244;9914:107308;6594:47652;7475:50710" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center relative shrink-0 size-[32px]">
            <div className="-rotate-90 flex-none">
              <div className="size-[32px]" data-node-id="I8599:89244;899:95494" data-name="min-width" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvatarGroup;
