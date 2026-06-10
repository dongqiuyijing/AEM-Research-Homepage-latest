import SectionWrapper from "./SectionWrapper";

const AbstractSection = () => {
  return (
    <SectionWrapper id="abstract" title="Abstract">
      <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:p-8">
        <p className="text-sm leading-relaxed text-foreground md:text-base">
          The increasing use of imitation learning in robotic manipulation highlights 
          the need for policies that account for temporal context. Conventional 
          visuomotor policies often map individual observations directly to actions, 
          overlooking the sequential nature of manipulation tasks. In this work, we 
          propose <strong className="text-primary">Action-Effect Memory (AEM)</strong>, 
          a self-supervised pretraining framework that equips visuomotor policies with 
          structured temporal awareness. AEM constructs interleaved sequences of visual 
          observations and robot actions, applies temporally-aligned masking, and trains 
          a Mamba-based encoder to reconstruct masked content from context. This process 
          yields a compact memory token that captures how past actions have transformed 
          the environment. The resulting memory representation integrates seamlessly 
          with downstream policies such as Diffusion Policy and flow-matching-based 
          policies, requiring no architectural changes to the base policy. Experiments 
          across 11 simulated tasks and 3 real-world manipulation scenarios demonstrate 
          that AEM consistently improves policy performance, particularly in 
          history-dependent and visually cluttered settings. Compared to baseline 
          Diffusion Policy, AEM achieves a <strong className="text-secondary">+20.7%</strong> average 
          improvement in simulation and <strong className="text-secondary">+38.4%</strong> in 
          real-world tasks.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default AbstractSection;
