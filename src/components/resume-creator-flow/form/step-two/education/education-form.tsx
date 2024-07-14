import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEducationForm } from "@/hooks/step-two-forms";
import { Education } from "@/providers/resume-creator-provider";

export default function EducationForm({ education, afterSubmit }: { education?: Education; afterSubmit?: () => void }) {
    const { form, onSubmit } = useEducationForm(education);

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
                    name="institution"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Institution *</FormLabel>
                            <FormControl>
                                <Input
                                    defaultValue={education?.institution}
                                    placeholder="University of California"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="level"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Level *</FormLabel>
                            <FormControl>
                                <Input defaultValue={education?.level} placeholder="Bachelor's" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="specialization"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Specialization</FormLabel>
                            <FormControl>
                                <Input
                                    defaultValue={education?.specialization}
                                    placeholder="Computer Science"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Start Date *</FormLabel>
                            <FormControl>
                                <Input defaultValue={education?.startDate} type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="endDate"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>End Date</FormLabel>
                            <FormControl>
                                <Input defaultValue={education?.endDate} type="date" {...field} />
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
                                    defaultValue={education?.description}
                                    placeholder="Describe your education"
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
