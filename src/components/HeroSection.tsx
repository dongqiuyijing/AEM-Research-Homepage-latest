import { FileDown } from "lucide-react";
const HeroSection = () => {
  return <section className="pb-12 pt-16 md:pb-16 md:pt-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
        {/* Venue Badge */}
        

        {/* Title */}
        {/* <h1 className="mb-6 text-3xl font-extrabold leading-tight text-foreground md:text-4xl lg:text-5xl">
          Action-Effect Memory Pretraining for{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Robot Manipulation
          </span>
        </h1> */}
        <h1 className="mb-6 text-3xl font-extrabold leading-tight text-foreground md:text-4xl lg:text-5xl">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Action-Effect Memory
          </span>{" "}
          Pretraining for Robot Manipulation
        </h1>

        {/* Authors */}
        <div className="mb-4 text-base text-muted-foreground md:text-lg">
          <span className="font-medium text-foreground">Yijing Zhou</span>
          <sup className="text-primary">*1.2</sup>,{" "}
          <span className="font-medium text-foreground">Qiwei Liang</span>
          <sup className="text-primary">*†1.2</sup>,{" "}
          <span className="font-medium text-foreground">Sitong Zhuang</span>
          <sup>2</sup>,{" "}
          <span className="font-medium text-foreground">Jiaxi Li</span>
          <sup>2</sup>,{" "}
          <span className="font-medium text-foreground">Xianpeng Wang</span>
          <sup>1</sup>,{" "}
          <span className="font-medium text-foreground">Boyang Cai</span>
          <sup>1.2</sup>,{" "}
          <span className="font-medium text-foreground">Yunyang Mo</span>
          <sup>1</sup>,{" "}
          <span className="font-medium text-foreground">Renjing Xu</span>
          <sup className="text-primary">&#167;1</sup>
        </div>

        {/* Affiliations */}
        <div className="mb-8 space-y-1 text-sm text-muted-foreground">
          <p>
            <sup>1</sup> The Hong Kong University of Science and Technology (Guangzhou)
          </p>
          <p>
            <sup>2</sup> Shenzhen University
          </p>
          <p className="mt-2 text-xs">
            <sup>*</sup> Equal contribution &nbsp;&nbsp;
            <sup>&#8224;</sup> Project leader &nbsp;&nbsp;
            <sup>&#167;</sup> Corresponding author
          </p>
        </div>

        {/* PDF Button */}
        <a href="#" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elevated)] transition-all hover:opacity-90 hover:shadow-lg">
          <FileDown className="h-4 w-4" />
          Paper (PDF)
        </a>
      </div>
    </section>;
};
export default HeroSection;