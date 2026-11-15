'use client'

import { CheckCircle2 } from 'lucide-react'

interface BookingProgressProps {
  currentStep: number
  totalSteps: number
  steps: string[]
}

export default function BookingProgress({ currentStep, totalSteps, steps }: BookingProgressProps) {
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100

  return (
    <div className="w-full">
      {/* Step labels - desktop */}
      <div className="hidden sm:flex items-center justify-between mb-3 gap-1">
        {steps.map((step, i) => {
          const stepNum = i + 1
          const isCompleted = stepNum < currentStep
          const isActive = stepNum === currentStep
          return (
            <div
              key={step}
              className="flex flex-col items-center gap-1 flex-1"
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300 ${
                  isCompleted
                    ? 'bg-[#F97316] text-white'
                    : isActive
                    ? 'bg-[#F97316] text-white ring-4 ring-[#F97316]/20'
                    : 'bg-[#F5F5F4] text-[#78716C] border border-[#E7E5E4]'
                }`}
                aria-current={isActive ? 'step' : undefined}
              >
                {isCompleted ? (
                  <CheckCircle2 size={14} aria-hidden="true" />
                ) : (
                  <span>{String(stepNum).padStart(2, '0')}</span>
                )}
              </div>
              <span
                className={`text-[10px] font-medium text-center leading-tight ${
                  isActive ? 'text-[#F97316]' : isCompleted ? 'text-[#57534E]' : 'text-[#A8A29E]'
                }`}
              >
                {step}
              </span>
            </div>
          )
        })}
      </div>

      {/* Progress bar */}
      <div className="relative h-1 bg-[#E7E5E4] rounded-full overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 bg-[#F97316] rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{ width: `${progress}%`, transform: 'scaleX(1)', transformOrigin: 'left' }}
          role="progressbar"
          aria-valuenow={currentStep}
          aria-valuemin={1}
          aria-valuemax={totalSteps}
          aria-label={`Step ${currentStep} of ${totalSteps}`}
        />
      </div>

      {/* Mobile label */}
      <div className="sm:hidden mt-2 flex items-center justify-between">
        <span className="text-xs font-medium text-[#F97316]">
          Step {currentStep}: {steps[currentStep - 1]}
        </span>
        <span className="text-xs text-[#78716C]">{currentStep}/{totalSteps}</span>
      </div>
    </div>
  )
}
