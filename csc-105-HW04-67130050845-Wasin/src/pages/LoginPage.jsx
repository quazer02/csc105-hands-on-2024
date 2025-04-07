import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

const LoginPage = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data) => {
        console.log("Login successful", data);
        navigate("/"); // Redirect to Home Page
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Email:</label>
                    <input type="email" {...register("email")} />
                    {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" {...register("password")} />
                    {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
                </div>
                <button type="submit">Login</button>
            </form>
            <p>
                Don't have an account? <button onClick={() => navigate("/signup")}>Sign Up</button>
            </p>
        </div>
    );
};

export default LoginPage;
