import LoginForm from "./login-form";
import RegisterForm from "./register-form";

export default function AuthContainer({
    action = "login",
    closeDialog
}: {
    action: "login" | "register";
    closeDialog: () => void;
}) {
    return action === "login" ? <LoginForm closeDialog={closeDialog} /> : <RegisterForm closeDialog={closeDialog} />;
}
