import { useState, useCallback } from "react";

/**
 * useMultiStepForm
 * Simple step controller for multi-step flows.
 *
 * @param {number} totalSteps total number of steps
 * @param {number} initial starting step index (default 0)
 */
export default function useMultiStepForm(totalSteps = 1, initial = 0) {
  const [step, setStep] = useState(Math.max(0, Math.min(initial, totalSteps - 1)));

  const nextStep = useCallback(() => {
    setStep((s) => Math.min(s + 1, totalSteps - 1));
  }, [totalSteps]);

  const prevStep = useCallback(() => {
    setStep((s) => Math.max(s - 1, 0));
  }, []);

  const goTo = useCallback(
    (index) => {
      const i = Math.max(0, Math.min(index, totalSteps - 1));
      setStep(i);
    },
    [totalSteps]
  );

  const isFirst = step === 0;
  const isLast = step === totalSteps - 1;

  return { step, nextStep, prevStep, goTo, isFirst, isLast, totalSteps };
}
