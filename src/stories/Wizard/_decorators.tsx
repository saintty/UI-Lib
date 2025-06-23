import { useState } from "react";

import { Step, Wizard } from "./Wizard";

const steps: Step[] = [
  { id: "info", label: "Информация", content: <p>Шаг 1: Информация</p> },
  { id: "details", label: "Детали", content: <p>Шаг 2: Детали</p> },
  { id: "confirm", label: "Подтверждение", content: <p>Шаг 3: Подтвердите</p> },
];

export const WizardDecorator = () => {
  const [active, setActive] = useState(0);

  return <Wizard steps={steps} activeStep={active} onStepChange={setActive} />;
};
