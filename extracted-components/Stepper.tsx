type StepperProps = {
  className?: string;
  activeStep?: "0";
  alternativeLabel?: "False";
  nonLinear?: "False";
  orientation?: "Horizontal";
};

function Stepper({ className, activeStep = "0", alternativeLabel = "False", nonLinear = "False", orientation = "Horizontal" }: StepperProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start p-[24px] relative w-[400px]"} data-node-id="11436:165292">
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="11436:165293" data-name="<Step>">
        <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="I11436:165293;11436:165294" data-name="<StepLabel>">
          <div className="content-stretch flex items-start relative shrink-0" data-node-id="I11436:165293;11436:165295" data-name="<StepIcon>">
            <div className="bg-[var(--primary\/main,#1976d2)] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[24px]" data-node-id="I11436:165293;11436:165295;11436:165296" data-name="Circle">
              <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1] relative shrink-0 text-[color:var(--_components\/stepper\/connector-text,white)] text-[length:var(--typography\/caption,12px)] tracking-[0.4px] whitespace-nowrap" data-node-id="I11436:165293;11436:165295;11436:165297" style={{ fontVariationSettings: "'wdth' 100" }}>
                1
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start mt-[8px] relative shrink-0" data-node-id="I11436:165293;11436:165298" data-name="<Typography>">
            <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.43] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body2,14px)] tracking-[0.17px] whitespace-nowrap" data-node-id="I11436:165293;11436:165298;899:99868" style={{ fontVariationSettings: "'wdth' 100" }}>
              Step 1
            </p>
          </div>
        </div>
        <div className="bg-[var(--action\/disabled,rgba(0,0,0,0.12))] flex-[1_0_0] h-[1px] min-w-px mt-[12px] relative" data-node-id="I11436:165293;11436:165299" data-name="<StepConnector>" />
      </div>
    </div>
  );
}

export default Stepper;
