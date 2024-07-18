import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSkillForm } from "@/hooks/step-three-forms";
import { Plus } from "lucide-react";

export default function SkillForm() {
    const { form, onSubmit } = useSkillForm();

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Skill *</FormLabel>
                            <FormControl>
                                <Input placeholder="React" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className="flex gap-2 self-center" type="submit">
                    <Plus />
                    Submit
                </Button>
            </form>
        </Form>
    );
}
