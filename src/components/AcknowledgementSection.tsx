import SectionWrapper from "./SectionWrapper";
const AcknowledgementSection = () => {
  return <SectionWrapper id="acknowledgement" title="Acknowledgement">
      <div className="rounded-xl border border-border bg-accent/40 p-6 md:p-8">
        <p className="mb-6 text-sm leading-relaxed text-foreground md:text-base">
          The computation and experimental validation in this paper were proudly
          sponsored and supported by Beijing Suanli Ziyou Technology Co., Ltd.
          (gpufree.cn). Thanks to the stable GPU resources they provided, the
          complex neural network pre-training and embodied task evaluations involved
          in this study were completed efficiently. We extend our deepest
          appreciation for their support.
        </p>

        <div className="flex flex-col items-center gap-4">
          <a href="https://gpufree.cn" target="_blank" rel="noopener noreferrer" className="block">
            <img src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100081286/9eb59892-0fc1-42.png" alt="Computational Freedom - gpufree.cn" className="h-20 w-auto md:h-24" crossOrigin="anonymous" />
          </a>
          <a href="https://gpufree.cn" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-full border border-secondary/30 bg-secondary/10 px-5 py-2 text-sm font-semibold text-secondary transition-colors hover:bg-secondary/20">
            gpufree.cn
          </a>
        </div>
      </div>
    </SectionWrapper>;
};
export default AcknowledgementSection;