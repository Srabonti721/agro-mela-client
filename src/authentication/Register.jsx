import { Lottie } from "lottie-react";
import { useState } from "react";
import { Link } from "react-router";
import registerAnimation from "../assets/lotties/Register (2).json";
import useAuth from "../Hooks/UseAuth";
import { Eye, EyeOff, Phone } from "lucide-react";

const Register = () => {
    const { createUser,updateUserProfile } = useAuth();
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const role = form.role.value;

        const userData = {
            name,
            photo,
            email,
            password,
            role,
        };
        console.log(userData);
        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                updateUserProfile(name, photo)
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="min-h-screen from-green-50 via-white to-emerald-50 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* ================= LEFT SIDE ================= */}
                    <div className="hidden lg:flex bg-green-600 items-center justify-center p-10">
                        <div className="text-center text-white">
                            <Lottie
                                src={registerAnimation}
                                loop={true}
                                autoplay
                                className="w-full max-w-sm mx-auto"
                            />

                            <h2 className="text-3xl font-bold mt-4">
                                Join Our Agriculture Community
                            </h2>

                            <p className="mt-3 text-green-100 max-w-md mx-auto">
                                Connect with farmers, buyers and agriculture
                                lovers from one simple platform.
                            </p>
                        </div>
                    </div>

                    {/* ================= RIGHT SIDE ================= */}
                    <div className="p-6 sm:p-10 lg:p-12">
                        {/* Mobile Animation */}
                        <div className="lg:hidden flex justify-center mb-5">
                            <Lottie
                                src={registerAnimation}
                                loop={true}
                                autoplay
                                className="w-52 sm:w-64"
                            />
                        </div>

                        {/* Heading */}
                        <div className="text-center lg:text-left mb-8">
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
                                Create Account
                            </h1>

                            <p className="text-gray-500 mt-2">
                                Create your account and start your agriculture
                                journey.
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleRegister} className="space-y-5">
                            {/* Name */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your full name"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                                />
                            </div>
                            {/* Name */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                   Photo Url
                                </label>

                                <input
                                    type="url"
                                    name="photo"
                                    placeholder="Enter your photo url"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Password
                                </label>

                                <div className="relative">
                                    <input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        name="password"
                                        placeholder="Enter your password"
                                        required
                                        minLength={6}
                                        className="w-full px-4 py-3 pr-16 rounded-xl border border-gray-300 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-green-600 hover:text-green-700"
                                    >
                                        {showPassword ?  <Eye />: <EyeOff />}
                                    </button>
                                </div>
                            </div>

                            {/* Role */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Select Role
                                </label>

                                <select
                                    name="role"
                                    required
                                    defaultValue=""
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                                >
                                    <option value="" disabled>
                                        Select your role
                                    </option>

                                    <option value="farmer">Farmer</option>

                                    <option value="buyer">Buyer</option>
                                    <option value="buyer">Admin</option>
                                </select>
                            </div>

                            {/* Terms */}
                            <div className="flex items-start gap-2">
                                <input
                                    type="checkbox"
                                    required
                                    className="mt-1 accent-green-600"
                                />

                                <p className="text-sm text-gray-500">
                                    I agree to the{" "}
                                    <span className="text-green-600 font-medium">
                                        Terms & Conditions
                                    </span>
                                </p>
                            </div>

                            {/* Register Button */}
                            <button
                                type="submit"
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3.5 rounded-xl transition duration-300 shadow-md hover:shadow-lg"
                            >
                                Create Account
                            </button>
                        </form>

                        {/* Login */}
                        <p className="text-center text-gray-500 mt-7">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="text-green-600 font-semibold hover:text-green-700"
                            >
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
