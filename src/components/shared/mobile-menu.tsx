import {
    Drawer,
    DrawerContent,
    DrawerTitle,
} from "@/components/ui/drawer"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

interface MobileMenuProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function MobileMenu({ open, onOpenChange }: MobileMenuProps) {
    return (
        <Drawer direction="top" open={open} onOpenChange={onOpenChange}>
            <DrawerContent className="bg-[#141414] border-neutral-800 text-white rounded-none h-[50vh] focus:outline-none">
                {/* Accessibility: Drawer must have a title */}
                <VisuallyHidden>
                    <DrawerTitle>Mobile Navigation Menu</DrawerTitle>
                </VisuallyHidden>

                <div className="flex flex-col items-center justify-center h-full gap-4">
                    <h1 className="text-3xl font-bold font-sans">Hello World</h1>
                    <p className="text-neutral-400">Navigation coming soon...</p>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
