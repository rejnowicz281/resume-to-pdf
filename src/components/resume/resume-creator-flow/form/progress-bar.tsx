import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils/general";
import { useResumeCreator } from "@/providers/resume-creator-provider";

export default function ProgressBar() {
    const { step, setStep } = useResumeCreator();

    return (
        <div className="relative">
            <div className="flex items-center justify-center gap-4 md:justify-between absolute z-10 inset-0">
                <button
                    onClick={() => setStep(1)}
                    className={cn(
                        step >= 1
                            ? "dark:hover:bg-zinc-200 hover:bg-zinc-700 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 border-zinc-800 dark:border-zinc-200"
                            : "dark:hover:bg-zinc-600 hover:bg-zinc-100 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 border-zinc-200 dark:border-zinc-800",
                        "md:w-10 md:h-10 sm:w-5 sm:h-5 h-4 w-4 transition-colors border flex items-center justify-center rounded-full flex-shrink-0"
                    )}
                >
                    <span className="hidden md:inline">1</span>
                </button>

                <button
                    onClick={() => setStep(2)}
                    className={cn(
                        step >= 2
                            ? "dark:hover:bg-zinc-200 hover:bg-zinc-700 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 border-zinc-800 dark:border-zinc-200"
                            : "dark:hover:bg-zinc-600 hover:bg-zinc-100 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 border-zinc-200 dark:border-zinc-800",
                        "md:w-10 md:h-10 sm:w-5 sm:h-5 h-4 w-4 transition-colors border flex items-center justify-center rounded-full flex-shrink-0"
                    )}
                >
                    <span className="hidden md:inline">2</span>
                </button>

                <button
                    onClick={() => setStep(3)}
                    className={cn(
                        step >= 3
                            ? "dark:hover:bg-zinc-200 hover:bg-zinc-700 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 border-zinc-800 dark:border-zinc-200"
                            : "dark:hover:bg-zinc-600 hover:bg-zinc-100 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 border-zinc-200 dark:border-zinc-800",
                        "md:w-10 md:h-10 sm:w-5 sm:h-5 h-4 w-4 transition-colors border flex items-center justify-center rounded-full flex-shrink-0"
                    )}
                >
                    <span className="hidden md:inline">3</span>
                </button>

                <button
                    onClick={() => setStep(4)}
                    className={cn(
                        step >= 4
                            ? "dark:hover:bg-zinc-200 hover:bg-zinc-700 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 border-zinc-800 dark:border-zinc-200"
                            : "dark:hover:bg-zinc-600 hover:bg-zinc-100 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 border-zinc-200 dark:border-zinc-800",
                        "md:w-10 md:h-10 sm:w-5 sm:h-5 h-4 w-4 transition-colors border flex items-center justify-center rounded-full flex-shrink-0"
                    )}
                >
                    <span className="hidden md:inline">4</span>
                </button>
            </div>

            <Progress className="hidden md:block" value={(step - 1) * 33} />
        </div>
    );
}
