import { useLoginForm } from "@/hooks/login-form";
import AuthForm from "./form";

export default function LoginForm({ closeDialog }: { closeDialog: () => void }) {
    const { form, onSubmit } = useLoginForm();

    return <AuthForm title="Login" form={form} onSubmit={onSubmit} closeDialog={closeDialog} />;
}
