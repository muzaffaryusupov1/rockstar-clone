import { PauseIcon, PlayIcon } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Progress } from "../ui/progress";
import { ProgressIndicator } from "@radix-ui/react-progress";

interface CustomPaginationProps {
    scrollSnaps: number[];
    selectedIndex: number;
    onDotButtonClick: (index: number) => void;
    autoplayIsPlaying: boolean;
    toggleAutoPlay: () => void;
    progressValue: number;
}

export default function CustomPagination({
    scrollSnaps,
    selectedIndex,
    onDotButtonClick,
    autoplayIsPlaying,
    toggleAutoPlay,
    progressValue
}: CustomPaginationProps) {
    return (
        <div className="flex flex-col gap-4 items-center">
            <div className="flex items-center gap-6">
                <Button
                    size='icon-lg'
                    variant='ghost'
                    onClick={toggleAutoPlay}
                    className="rounded-full hover:bg-white/20 text-white"
                >
                    {autoplayIsPlaying ? <PauseIcon size={20} fill="#fff" color="#fff" /> : <PlayIcon size={20} fill="#fff" color="#fff" />}
                </Button>

                <div className="flex items-center gap-3">
                    {scrollSnaps.map((_, index) => {
                        const isActive = index === selectedIndex;

                        return (
                            <button
                                key={index}
                                onClick={() => onDotButtonClick(index)}
                                className={cn(
                                    "group relative transition-all duration-300 rounded-full overflow-hidden bg-white/20 w-4 h-4",
                                    isActive ? "bg-white" : "hover:bg-white/40"
                                )}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="w-full">
                <Progress value={progressValue} className="[&>div]:bg-white bg-white/20 h-2.5 w-full transition-none rounded-full hover:bg-white/40 transition-all duration-300 ease-in-out" />
            </div>
        </div>
    )
}
