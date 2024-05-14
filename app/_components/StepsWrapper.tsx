import { StepProps } from "../_types/stepprops-interface";
import Step from "./Step";

const steps: StepProps[] = [
  {
    id: "F",
    name: "Findable",
    href: "#",
    status: "current",
    color: "dark_blue",
  },
  {
    id: "A",
    name: "Accessible",
    href: "#",
    status: "upcoming",
    color: "yellow",
  },
  {
    id: "I",
    name: "Interoperable",
    href: "#",
    status: "upcoming",
    color: "light_blue",
  },
  {
    id: "R",
    name: "Reusable",
    href: "#",
    status: "upcoming",
    color: "blue",
  },
];

const StepsWrapper = () => {
  return (
    <nav
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-label="Progress"
    >
      <ol
        role="list"
        className="overflow-hidden rounded-md lg:flex lg:rounded-none lg:border lg:border-gray-200"
      >
        {steps.map((step, stepIdx) => (
          <li key={step.id} className="relative overflow-hidden lg:flex-1">
            <div
              className={`${stepIdx === 0 ? "rounded-t-md border-b-0" : ""} ${
                stepIdx === steps.length - 1 ? "rounded-b-md border-t-0" : ""
              } overflow-hidden border border-gray-200 lg:border-0`}
            >
              {step.status === "complete" ? (
                <Step step={step} index={stepIdx} />
              ) : step.status === "current" ? (
                <Step step={step} index={stepIdx} />
              ) : (
                <Step step={step} index={stepIdx} />
              )}

              {stepIdx !== 0 ? (
                <>
                  <div
                    className="absolute inset-0 left-0 top-0 hidden w-3 lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-full w-full text-gray-300"
                      viewBox="0 0 12 82"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0.5 0V31L10.5 41L0.5 51V82"
                        stroke="currentcolor"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                  </div>
                </>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default StepsWrapper;
