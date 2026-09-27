import { Lottie } from "lottie-react";
import { Link } from "react-router";
// import Swal from "sweetalert2";
import useAuth from "../Hooks/UseAuth";

import loginAnimation from "../assets/lotties/Login (1).json";

const Login = () => {
    const { loginUser, googleLogin } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        loginUser(email, password)
            .then((res) => {
                console.log(res.user);
            })
            .catch((error) => console.log(error));
    };

    const handleGoogleLogin = () => {
    googleLogin()
    .then(result=>{
      console.log(result.user);
    })
    .catch(error=>console.log(error))
    };


    return (
        <div className="min-h-screen bg-green-50 px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
                <div className="grid w-full overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">
                    {/* ================= LEFT SIDE ================= */}
                    <div className="hidden items-center justify-center bg-green-50 p-8 md:flex lg:p-12">
                        <div className="w-full max-w-md">
                            <Lottie
                                src={loginAnimation}
                                loop={true}
                                autoplay
                                className="mx-auto w-full"
                            />

                            <div className="text-center">
                                <h2 className="mt-4 text-2xl font-bold text-green-800 lg:text-3xl">
                                    Welcome Back
                                </h2>

                                <p className="mt-2 text-sm leading-6 text-gray-600">
                                    Manage your agricultural products, explore
                                    farming resources and discover useful
                                    agriculture services.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ================= RIGHT SIDE ================= */}
                    <div className="flex items-center justify-center p-6 sm:p-10 lg:p-12">
                        <div className="w-full max-w-md">
                            {/* Mobile Logo */}
                            <div className="mb-8 text-center md:hidden">
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-3xl">
                                    🌱
                                </div>

                                <h1 className="mt-3 text-2xl font-bold text-green-800">
                                    Agri
                                    <span className="text-lime-600">Care</span>
                                </h1>
                            </div>

                            {/* Heading */}
                            <div className="mb-7">
                                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                                    Welcome Back
                                </h1>

                                <p className="mt-2 text-sm text-gray-500">
                                    Login to continue to your account
                                </p>
                            </div>

                            {/* ================= FORM ================= */}
                            <form onSubmit={handleLogin} className="space-y-5">
                                {/* Email */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-medium text-gray-700"
                                    >
                                        Email
                                    </label>

                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        required
                                        className="w-full rounded-xl border border-gray-200
                    bg-gray-50 px-4 py-3 text-sm outline-none
                    transition focus:border-green-500 focus:bg-white
                    focus:ring-2 focus:ring-green-100"
                                    />
                                </div>

                                {/* Password */}
                                <div>
                                    <div className="mb-2 flex items-center justify-between">
                                        <label
                                            htmlFor="password"
                                            className="text-sm font-medium text-gray-700"
                                        >
                                            Password
                                        </label>
                                    </div>

                                    <input
                                        name="password"
                                        type="password"
                                        placeholder="Enter your password"
                                        required
                                        className="w-full rounded-xl border border-gray-200
                    bg-gray-50 px-4 py-3 text-sm outline-none
                    transition focus:border-green-500 focus:bg-white
                    focus:ring-2 focus:ring-green-100"
                                    />

                                    <button
                                        type="button"
                                        className="text-xs font-medium text-green-700 hover:text-green-800"
                                    >
                                        Forgot Password?
                                    </button>
                                </div>

                                {/* Login Button */}
                                <button
                                    type="submit"
                                    className="w-full rounded-xl bg-green-700 py-3
                  text-sm font-semibold text-white shadow-md
                  shadow-green-100 transition hover:bg-green-800
                  active:scale-[0.98] sm:text-base"
                                >
                                    Login
                                </button>
                            </form>

                            {/* ================= DIVIDER ================= */}
                            <div className="my-6 flex items-center gap-3">
                                <div className="h-px flex-1 bg-gray-200" />

                                <span className="text-xs text-gray-400">
                                    OR
                                </span>

                                <div className="h-px flex-1 bg-gray-200" />
                            </div>

                            {/* ================= GOOGLE LOGIN ================= */}
                            <button
                                type="button"
                                onClick={handleGoogleLogin}
                                className="flex w-full items-center justify-center
                gap-3 rounded-xl border border-gray-200 bg-white
                py-3 text-sm font-semibold text-gray-700
                transition hover:bg-gray-50 hover:shadow-sm
                active:scale-[0.98] sm:text-base"
                            >
                                <img
                                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                                    alt="Google"
                                    className="h-5 w-5"
                                />
                                Continue with Google 
                            </button>

                            {/* ================= REGISTER ================= */}
                            <p className="mt-7 text-center text-sm text-gray-500">
                                Don't have an account?{" "}
                                <Link
                                    to="/register"
                                    className="font-semibold text-green-700 hover:text-green-800"
                                >
                                    Register
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
