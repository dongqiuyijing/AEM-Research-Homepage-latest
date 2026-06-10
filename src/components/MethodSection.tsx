import SectionWrapper from "./SectionWrapper";
import FigureDisplay from "./FigureDisplay";

const MethodSection = () => {
  return (
    <SectionWrapper id="method" title="Method">
      <FigureDisplay
        src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100081286/f612f596-2469-4a.png"
        caption="Overview of the AEM framework. Left: During pretraining, interleaved vision-action sequences are masked and processed by a Mamba encoder; a single memory token is appended and trained to support reconstruction via a mask decoder. Right: During downstream policy integration, the frozen pretrained encoder produces the memory token which is concatenated with current observation features as input to the policy."
        figNumber={2}
      />

      <div className="mt-8 space-y-4 text-sm leading-relaxed text-foreground md:text-base">
        <p>
          AEM operates in two stages: <strong className="text-primary">self-supervised pretraining</strong> and{" "}
          <strong className="text-primary">downstream policy integration</strong>.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-4 shadow-[var(--shadow-card)]">
            <h4 className="mb-2 font-semibold text-primary">Interleaved Sequences</h4>
            <p className="text-sm text-muted-foreground">
              Vision features and action vectors are arranged in temporally-aligned pairs, 
              preserving the causal structure of manipulation trajectories.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 shadow-[var(--shadow-card)]">
            <h4 className="mb-2 font-semibold text-primary">Masked Autoencoding</h4>
            <p className="text-sm text-muted-foreground">
              Random masking forces the Mamba encoder to infer missing observations 
              and actions from context, learning rich temporal dependencies.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 shadow-[var(--shadow-card)]">
            <h4 className="mb-2 font-semibold text-primary">Final-Token Bottleneck</h4>
            <p className="text-sm text-muted-foreground">
              A single appended memory token compresses the entire history, providing a 
              lightweight yet information-rich signal for downstream policies.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default MethodSection;
