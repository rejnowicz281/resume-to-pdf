import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTrainingForm } from "@/hooks/step-two-forms";
import { Training } from "@/providers/resume-creator-provider";

export default function TrainingForm({ training, afterSubmit }: { training?: Training; afterSubmit?: () => void }) {
    const { form, onSubmit } = useTrainingForm(training);

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit((e) => {
                    onSubmit(e);
                    if (afterSubmit) afterSubmit();
                })}
                className="space-y-8"
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name *</FormLabel>
                            <FormControl>
                                <Input defaultValue={training?.name} placeholder="Node.js Course" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="organization"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Organization *</FormLabel>
                            <FormControl>
                                <Input defaultValue={training?.organization} placeholder="Coursera" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="issueDate"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Issue Date *</FormLabel>
                            <FormControl>
                                <Input defaultValue={training?.issueDate} placeholder="02.2024" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea
                                    defaultValue={training?.description}
                                    placeholder="Describe your training experience"
                                    {...field}
                                />
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
