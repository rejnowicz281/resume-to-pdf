import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SelectProps } from "@radix-ui/react-select";

export const LanguageSelect = ({
    placeholder,
    clearable = false,
    ...props
}: SelectProps & {
    placeholder?: string;
    clearable?:
        | boolean
        | {
              placeholder?: string;
              value?: string;
          };
}) => {
    const isClearable = typeof clearable === "object" ? clearable.value !== undefined : clearable;
    const clearPlaceholder = typeof clearable === "object" ? clearable.placeholder || placeholder : placeholder;
    const clearableValue = typeof clearable === "object" ? clearable.value || "default" : "inherit";

    return (
        <Select {...props}>
            <SelectTrigger className="flex gap-3">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {isClearable && (
                    <SelectItem value={clearableValue} className="text-muted-foreground">
                        {clearPlaceholder || "Select language"}
                    </SelectItem>
                )}
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="pl-PL">Polski</SelectItem>
            </SelectContent>
        </Select>
    );
};
