import SectionWrapper from "./SectionWrapper";
import FigureDisplay from "./FigureDisplay";

const AblationSection = () => {
  return (
    <SectionWrapper id="analysis" title="Analysis & Ablations">
      {/* Figure 6 - Why AEM works */}
      <h3 className="mb-3 text-lg font-semibold text-foreground">Can a Single Final Token Preserve Temporal Information?</h3>
      <p className="mb-6 text-sm leading-relaxed text-foreground md:text-base">
        To verify <em>why</em> AEM succeeds, we visualize whether the final-token
        bottleneck still preserves position-specific temporal information. On held-out
        trajectories, we mask a batch of visual features, decode them from the AEM
        memory token, and compute cosine similarity between the decoded outputs and
        ground-truth features. The resulting similarity matrices confirm that the
        single final token encodes rich action-vision correspondences — it has learned
        meaningful temporal structure that supports accurate reconstruction.
      </p>

      <FigureDisplay
        src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100081286/eecb49e4-252c-49.png"
        caption="As training progresses, the single final token decodes increasingly accurate visual and action information. Strong diagonal patterns in cosine similarity matrices confirm the memory token preserves position-specific temporal information."
        figNumber={6}
        imgClassName="px-[100pt]"
      />

      {/* TABLE III - Fusion, Pretraining, and Memory-Usage Ablations */}
      <h3 className="mb-3 mt-12 text-lg font-semibold text-foreground">How Should AEM Memory Be Fused, Pretrained, and Used?</h3>
      <p className="mb-4 text-sm leading-relaxed text-foreground md:text-base">
        We ablate AEM design choices on Handover Block and Place Object Basket.
        Our full setting concatenates pretrained AEM memory with the current visual
        feature, pretrains on both observation and action, and feeds memory jointly
        with the current observation. Table III compares against four variants:
        <strong> Feature Add</strong> (sums rather than concatenates),
        <strong> Joint Mamba</strong> (trains memory encoder with policy without pretraining),
        <strong> Only Memory</strong> (removes current observation), and
        <strong> Obs Only</strong> (pretrains on observations alone without actions).
      </p>

      <div className="my-6 overflow-x-auto rounded-xl border border-border bg-card shadow-[var(--shadow-card)]">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-accent/50">
              <th className="px-4 py-3 text-left font-semibold text-foreground">Task</th>
              <th className="px-4 py-3 text-center font-semibold text-foreground">Feature Add</th>
              <th className="px-4 py-3 text-center font-semibold text-foreground">Joint Mamba</th>
              <th className="px-4 py-3 text-center font-semibold text-foreground">Only Memory</th>
              <th className="px-4 py-3 text-center font-semibold text-foreground">Obs Only</th>
              <th className="px-4 py-3 text-center font-semibold text-primary">Ours</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="px-4 py-3">Handover Block</td>
              <td className="px-4 py-3 text-center">0.88</td>
              <td className="px-4 py-3 text-center">0.60</td>
              <td className="px-4 py-3 text-center">0.44</td>
              <td className="px-4 py-3 text-center">0.68</td>
              <td className="px-4 py-3 text-center font-bold text-secondary">0.96</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Place Object Basket</td>
              <td className="px-4 py-3 text-center">0.52</td>
              <td className="px-4 py-3 text-center">0.60</td>
              <td className="px-4 py-3 text-center">0.36</td>
              <td className="px-4 py-3 text-center">0.44</td>
              <td className="px-4 py-3 text-center font-bold text-secondary">0.76</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* TABLE IV - Visual Encoder Ablation */}
      <h3 className="mb-3 mt-12 text-lg font-semibold text-foreground">Which Visual Encoder Works Best for AEM Pretraining?</h3>
      <p className="mb-4 text-sm leading-relaxed text-foreground md:text-base">
        We compare different visual encoders for AEM pretraining, testing DINOv2, DINOv3,
        and CLIP with both pooled and CLS token features. DINOv2 CLS achieves the best
        performance across both tasks.
      </p>

      <div className="my-6 overflow-x-auto rounded-xl border border-border bg-card shadow-[var(--shadow-card)]">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-accent/50">
              <th className="px-4 py-3 text-left font-semibold text-foreground">Task</th>
              <th className="px-4 py-3 text-center font-semibold text-foreground">DINOv2 Pool</th>
              <th className="px-4 py-3 text-center font-semibold text-primary">DINOv2 CLS</th>
              <th className="px-4 py-3 text-center font-semibold text-foreground">DINOv3 Pool</th>
              <th className="px-4 py-3 text-center font-semibold text-foreground">DINOv3 CLS</th>
              <th className="px-4 py-3 text-center font-semibold text-foreground">CLIP CLS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="px-4 py-3">Handover Block</td>
              <td className="px-4 py-3 text-center">0.84</td>
              <td className="px-4 py-3 text-center font-bold text-secondary">0.96</td>
              <td className="px-4 py-3 text-center">0.72</td>
              <td className="px-4 py-3 text-center">0.76</td>
              <td className="px-4 py-3 text-center">0.84</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Place Object Basket</td>
              <td className="px-4 py-3 text-center">0.48</td>
              <td className="px-4 py-3 text-center font-bold text-secondary">0.76</td>
              <td className="px-4 py-3 text-center">0.40</td>
              <td className="px-4 py-3 text-center">0.52</td>
              <td className="px-4 py-3 text-center">0.44</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Figure 8 - Mask Ratio & History Length */}
      <h3 className="mb-3 mt-12 text-lg font-semibold text-foreground">Mask Ratio and History Length</h3>
      <p className="mb-4 text-sm leading-relaxed text-foreground md:text-base">
        We study how mask ratio and the interaction between pretraining/inference history
        lengths affect downstream performance. A mask ratio of 0.7 works best, and a
        32-step pretraining window with a 16-step inference horizon achieves the optimal
        balance.
      </p>

      <FigureDisplay
        src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100081286/d6130cb5-8bf3-41.png"
        caption="(a) Effect of mask ratio on downstream success for Handover Block and Place Object Basket. Higher masking (0.7) yields the best performance. (b) Interaction between AEM pretraining length (y-axis) and downstream memory length (x-axis). The best setting uses a 32-step pretraining window and 16-step inference window."
        figNumber={8}
        imgClassName="px-[100pt]"
      />
    </SectionWrapper>
  );
};

export default AblationSection;
