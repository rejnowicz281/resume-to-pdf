import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useInterestsForm } from "@/hooks/step-three-forms";

export default function InterestsForm() {
    const { form, onSubmit } = useInterestsForm();

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="interests"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                <h2 className="mb-6 text-3xl font-bold">Interests</h2>
                            </FormLabel>
                            <FormControl>
                                <Textarea placeholder="I like reading, hiking and playing guitar." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}
