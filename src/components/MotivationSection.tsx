import SectionWrapper from "./SectionWrapper";
import FigureDisplay from "./FigureDisplay";

const MotivationSection = () => {
  return (
    <SectionWrapper id="motivation" title="Motivation">
      <p className="mb-6 text-sm leading-relaxed text-foreground md:text-base">
        Conventional visuomotor policies process only the current observation to 
        predict actions, losing critical temporal context. Many manipulation tasks 
        are inherently <em>non-Markovian</em> — the correct action depends on what 
        happened before (e.g., which object was already picked, or what phase of a 
        multi-step task is active). AEM addresses this by pretraining an encoder 
        that summarizes the entire action-effect history into a single compact 
        memory token, enabling any downstream policy to reason about temporal context 
        without architectural changes.
      </p>

      <FigureDisplay
        src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100081286/595f94f1-613d-46.png"
        caption="Comparison between (a) conventional visuomotor policies that process single observations, and (b) our memory-aware policy that leverages a pretrained AEM encoder to summarize the full action-effect history into a single token."
        figNumber={1}
        imgClassName="px-[100pt]"
      />
    </SectionWrapper>
  );
};

export default MotivationSection;
