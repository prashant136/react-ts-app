import { ReactNode, createContext, useContext } from "react";

type Timer = {
    name: string;
    duration: number;
};

// breaking down context states and function into saperate types
type TimerState = {
    isRunning: boolean;
    timer: Timer[];
};

type TimerContextValue = TimerState & {
    addTimer: (timerData: Timer) => void;
    startTimer: () => void;
    stopTimer: () => void;
};

type TimerContextProviderProps = {
    children: ReactNode
}

export const TimerContext = createContext<TimerContextValue | null>(null);

export const TimerContextProvider = ({ children }: TimerContextProviderProps) => {
    const ctx: TimerContextValue = {
        timer: [],
        isRunning: false,
        addTimer(timerData) {
            
        },
        startTimer() {
            
        },
        stopTimer() {
            
        },
    }

    return (
        <TimerContext.Provider value={ctx}>
            {children}
        </TimerContext.Provider>
    )
}

// Context Type-Safe With A Custom Hook (if context is not wrapped then give an error)
export const useTimerContext = () => {
    const timerCtx = useContext(TimerContext)
    if (!timerCtx) {
        throw new Error('TimerContext is null - that should not be case')
    }
    
    return timerCtx;
}