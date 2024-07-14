import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useWorkExperienceForm } from "@/hooks/step-two-forms";

export default function ExperienceForm({
    experienceId,
    afterSubmit
}: {
    experienceId?: string;
    afterSubmit?: () => void;
}) {
    const { form, onSubmit, defaultValues } = useWorkExperienceForm(experienceId);

    return (
        <div>
            <h2 className="mb-6 text-3xl font-bold">Experience</h2>
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
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title *</FormLabel>
                                <FormControl>
                                    <Input
                                        defaultValue={defaultValues?.title}
                                        placeholder="Software Developer"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Company</FormLabel>
                                <FormControl>
                                    <Input defaultValue={defaultValues?.company} placeholder="Google" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Location</FormLabel>
                                <FormControl>
                                    <Input
                                        defaultValue={defaultValues?.location}
                                        placeholder="Mountain View, CA"
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
                                    <Input defaultValue={defaultValues?.startDate} type="date" {...field} />
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
                                    <Input defaultValue={defaultValues?.endDate} type="date" {...field} />
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
                                        defaultValue={defaultValues?.description}
                                        placeholder="Describe your responsibilities and achievements"
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
        </div>
    );
}
