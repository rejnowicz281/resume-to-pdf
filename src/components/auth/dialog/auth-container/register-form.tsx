import { useRegisterForm } from "@/hooks/register-form";
import AuthForm from "./form";

export default function RegisterForm({ closeDialog }: { closeDialog: () => void }) {
    const { form, onSubmit } = useRegisterForm();

    return <AuthForm title="Register" form={form} onSubmit={onSubmit} closeDialog={closeDialog} />;
}
