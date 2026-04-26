type SnackbarProps = {
  className?: string;
  action?: "False";
  anchorOrigin?: "Bottom Left";
  autoHideDuration?: "Number";
  message?: string;
};

function Snackbar({ className, action = "False", anchorOrigin = "Bottom Left", autoHideDuration = "Number", message = "I love snacks." }: SnackbarProps) {
  return (
    <div className={className || "content-stretch flex items-start relative"} data-node-id="6562:38674">
      <div className="bg-[var(--_components\/snackbar\/fill,#323232)] content-stretch flex items-start max-w-[672px] min-w-[344px] overflow-clip p-[6px_16px] relative rounded-[var(--borderradius,4px)] shadow-[0px_3px_5px_-1px_rgba(0,0,0,0.2),0px_6px_10px_0px_rgba(0,0,0,0.14),0px_1px_18px_0px_rgba(0,0,0,0.12)] shrink-0" data-node-id="6562:38675" data-name="<Paper>">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px py-[8px] relative" data-node-id="6562:38676" data-name="Message">
          <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.43] relative shrink-0 text-[color:var(--_components\/snackbar\/color,white)] text-[length:var(--typography\/body2,14px)] tracking-[0.17px] w-full" data-node-id="6562:38677" style={{ fontVariationSettings: "'wdth' 100" }}>
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Snackbar;
