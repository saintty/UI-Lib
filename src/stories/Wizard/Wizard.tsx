import { ReactNode } from "react";

import s from "./Wizard.module.scss";
import { Meter } from "../Meter/Meter";

export type Step = {
  id: string;
  label: string;
  content: ReactNode;
};

export type Props = {
  steps: Step[];
  activeStep: number;
  onStepChange: (index: number) => void;
};

export const Wizard = ({ steps, activeStep, onStepChange }: Props) => {
  const goPrev = () => {
    if (activeStep > 0) onStepChange(activeStep - 1);
  };

  const goNext = () => {
    if (activeStep < steps.length - 1) onStepChange(activeStep + 1);
  };

  return (
    <div className={s.root}>
      <div className={s.header}>
        <button
          type="button"
          className={s.button}
          onClick={goPrev}
          disabled={activeStep === 0}
        >
          {"<"}
        </button>
        <ul className={s.nav} aria-label="Прогресс пошаговой формы">
          {steps.map((step, index) => (
            <li key={step.id} role="presentation">
              <button
                id={`step-${step.id}`}
                className={s.tab}
                type="button"
                aria-current={activeStep === index ? "step" : undefined}
                tabIndex={activeStep === index ? 0 : -1}
              >
                {step.label}
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className={s.button}
          onClick={goNext}
          disabled={activeStep === steps.length - 1}
        >
          {">"}
        </button>
      </div>
      <Meter max={steps.length} min={0} now={activeStep + 1} title="" />
      {steps.map((step, index) => (
        <div
          key={step.id}
          id={`panel-${step.id}`}
          className={s.panel}
          aria-labelledby={`step-${step.id}`}
          hidden={activeStep !== index}
          aria-hidden={activeStep !== index}
          aria-live="polite"
        >
          {step.content}
        </div>
      ))}
    </div>
  );
};
