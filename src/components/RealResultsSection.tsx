import SectionWrapper from "./SectionWrapper";
import FigureDisplay from "./FigureDisplay";

const RealResultsSection = () => {
  return (
    <SectionWrapper id="results-real" title="Results — Real World">
      <p className="mb-6 text-sm leading-relaxed text-foreground md:text-base">
        We validate AEM on a <strong>Franka Emika</strong> robot arm with an
        exocentric Intel RealSense D435 camera across three real-world tasks.
        We evaluate under both a standard tabletop setting and a more challenging
        condition with task-irrelevant distractor objects (fruits, sponge, extra block)
        placed on the table.
      </p>

      <FigureDisplay
        src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100081286/c6c6c996-4bdc-40.png"
        caption="Real-world setup with a Franka Emika arm and an exocentric RealSense D435 view (left), together with demonstrations of the three evaluation tasks: Place Corn to Plate, Rotate Mouse Forward, and Put Block into Drawer."
        figNumber={7}
      />

      {/* Real-world Results Table V */}
      <div className="my-8 overflow-x-auto rounded-xl border border-border bg-card shadow-[var(--shadow-card)]">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-accent/50">
              <th className="px-4 py-3 text-left font-semibold text-foreground">Task</th>
              <th className="px-4 py-3 text-center font-semibold text-foreground" colSpan={2}>Standard</th>
              <th className="px-4 py-3 text-center font-semibold text-foreground" colSpan={2}>w/ Distractors</th>
            </tr>
            <tr className="border-b border-border bg-accent/30">
              <th className="px-4 py-2 text-left text-xs text-muted-foreground"></th>
              <th className="px-4 py-2 text-center text-xs text-muted-foreground">DP</th>
              <th className="px-4 py-2 text-center text-xs font-semibold text-primary">DP+AEM</th>
              <th className="px-4 py-2 text-center text-xs text-muted-foreground">DP</th>
              <th className="px-4 py-2 text-center text-xs font-semibold text-primary">DP+AEM</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="px-4 py-3">Place Corn to Plate</td>
              <td className="px-4 py-3 text-center">60.0</td>
              <td className="px-4 py-3 text-center font-semibold text-secondary">95.0</td>
              <td className="px-4 py-3 text-center">25.0</td>
              <td className="px-4 py-3 text-center font-semibold text-secondary">85.0</td>
            </tr>
            <tr className="border-b border-border">
              <td className="px-4 py-3">Rotate Mouse Forward</td>
              <td className="px-4 py-3 text-center">50.0</td>
              <td className="px-4 py-3 text-center font-semibold text-secondary">80.0</td>
              <td className="px-4 py-3 text-center">20.0</td>
              <td className="px-4 py-3 text-center font-semibold text-secondary">75.0</td>
            </tr>
            <tr className="border-b border-border">
              <td className="px-4 py-3">Put Block into Drawer</td>
              <td className="px-4 py-3 text-center">20.0</td>
              <td className="px-4 py-3 text-center font-semibold text-secondary">70.0</td>
              <td className="px-4 py-3 text-center">0.0</td>
              <td className="px-4 py-3 text-center font-semibold text-secondary">45.0</td>
            </tr>
            <tr className="bg-accent/30">
              <td className="px-4 py-3 font-semibold">Average</td>
              <td className="px-4 py-3 text-center">43.3</td>
              <td className="px-4 py-3 text-center font-bold text-secondary">81.7</td>
              <td className="px-4 py-3 text-center">15.0</td>
              <td className="px-4 py-3 text-center font-bold text-secondary">68.3</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-sm text-muted-foreground md:text-base">
        AEM improves the average success rate from <strong>43.3%</strong> to{" "}
        <strong className="text-secondary">81.7%</strong> under standard conditions,
        and from <strong>15.0%</strong> to{" "}
        <strong className="text-secondary">68.3%</strong> with distractor objects present.
        The gains are most noticeable on <em>Rotate Mouse Forward</em> and{" "}
        <em>Put Block into Drawer</em>, where reorientation and drawer closure require
        tracking short-term interaction history beyond the current frame.
      </p>
    </SectionWrapper>
  );
};

export default RealResultsSection;
