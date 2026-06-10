import SectionWrapper from "./SectionWrapper";
import FigureDisplay from "./FigureDisplay";

const SimResultsSection = () => {
  return (
    <SectionWrapper id="results-sim" title="Results — Simulation">
      <p className="mb-6 text-sm leading-relaxed text-foreground md:text-base">
        We evaluate AEM on <strong>11 diverse manipulation tasks</strong> spanning 
        single-arm and bimanual setups, testing both standard and randomized 
        scene conditions. AEM consistently improves performance when integrated 
        with Diffusion Policy (DP) and ManiFlow baselines.
      </p>

      <FigureDisplay
        src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100081286/a0ba1200-0789-47.png"
        caption="Simulation benchmark overview covering eleven diverse manipulation tasks with both single-arm and bimanual configurations."
        figNumber={3}
      />

      {/* Key Results Table */}
      <div className="my-8 overflow-x-auto rounded-xl border border-border bg-card shadow-[var(--shadow-card)]">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-accent/50">
              <th className="px-4 py-3 text-left font-semibold text-foreground">Method</th>
              <th className="px-4 py-3 text-center font-semibold text-foreground">Average Success Rate</th>
              <th className="px-4 py-3 text-center font-semibold text-foreground">Improvement</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="px-4 py-3 text-muted-foreground">Diffusion Policy (DP)</td>
              <td className="px-4 py-3 text-center">29.8%</td>
              <td className="px-4 py-3 text-center text-muted-foreground">—</td>
            </tr>
            <tr className="border-b border-border bg-accent/30">
              <td className="px-4 py-3 font-medium text-primary">DP + AEM</td>
              <td className="px-4 py-3 text-center font-semibold">50.5%</td>
              <td className="px-4 py-3 text-center font-semibold text-secondary">+20.7%</td>
            </tr>
            <tr className="border-b border-border">
              <td className="px-4 py-3 text-muted-foreground">ManiFlow</td>
              <td className="px-4 py-3 text-center">9.8%</td>
              <td className="px-4 py-3 text-center text-muted-foreground">—</td>
            </tr>
            <tr className="bg-accent/30">
              <td className="px-4 py-3 font-medium text-primary">ManiFlow + AEM</td>
              <td className="px-4 py-3 text-center font-semibold">29.1%</td>
              <td className="px-4 py-3 text-center font-semibold text-secondary">+19.3%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <FigureDisplay
        src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100081286/df8a63bd-4d83-4d.png"
        caption="Randomized-scene evaluation. AEM significantly improves robustness when the scene is cluttered with novel distractor objects and randomized layouts."
        figNumber={4}
        imgClassName="px-[100pt]"
      />

      <FigureDisplay
        src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100081286/f9ab7e35-a81a-48.png"
        caption="Memory-dependent RMBench evaluation on non-Markovian manipulation tasks (Swap_Blocks and Put_Back_Block), where temporal history is essential for correct behavior."
        figNumber={5}
        imgClassName="px-[100pt]"
      />
    </SectionWrapper>
  );
};

export default SimResultsSection;
