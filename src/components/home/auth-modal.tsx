"use client";

import { facebookSignIn, googleSignIn, login, signup } from "@/firebase/api";
import { X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaFacebook, FaGoogle } from "react-icons/fa";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(loginData);
      toast.success("Login successful!");
      onClose();
      router.push("/");
    } catch (error) {
      // Error is handled in the login function
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      await signup({
        email: registerData.email,
        password: registerData.password,
        name: registerData.name,
      });
      toast.success(
        "Registration successful! Please check your email for verification."
      );
      onClose();
      router.push("/login");
    } catch (error) {
      // Error is handled in the signup function
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await googleSignIn();
      toast.success("Login successful!");
      onClose();
      router.push("/");
    } catch (error) {
      toast.error("Google login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleFacebookLogin = async () => {
    setLoading(true);
    try {
      await facebookSignIn();
      toast.success("Login successful!");
      onClose();
      router.push("/");
    } catch (error) {
      toast.error("Facebook login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed z-999 inset-0 bg-black/50 transition-opacity duration-300"
          style={{ zIndex: 9998 }}
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-screen w-full max-w-md bg-gray-50 shadow-2xl rounded-l-3xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 9999 }}
      >
        {/* Header with close button */}
        <div className="flex items-center rounded-tl-3xl justify-between p-6 border-b border-gray-200 bg-white">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab("login")}
              className={`text-base font-semibold pb-2 border-b-2 transition-colors ${
                activeTab === "login"
                  ? "text-gray-900 border-blue-600"
                  : "text-gray-600 border-transparent hover:text-gray-900"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`text-base font-semibold pb-2 border-b-2 transition-colors ${
                activeTab === "register"
                  ? "text-gray-900 border-blue-600"
                  : "text-gray-600 border-transparent hover:text-gray-900"
              }`}
            >
              Register
            </button>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X size={24} className="text-gray-700" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto h-[calc(100vh-80px)]">
          {activeTab === "login" ? (
            // Login Form
            <div className="px-6 py-6 bg-white">
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email ID / Username
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your active Email ID / Username"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    value={loginData.email}
                    onChange={(e) =>
                      setLoginData({ ...loginData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                    required
                  />
                  <Link
                    href="/reset-password"
                    className="mt-2 text-blue-600 text-sm font-semibold hover:text-blue-700 inline-block"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="block w-full px-6 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-semibold text-center text-sm mt-4 disabled:opacity-50"
                >
                  {loading ? "Logging in..." : "Login"}
                </button>

                <div className="relative flex items-center my-4">
                  <div className="flex-1 border-t border-gray-300" />
                  <span className="px-2 text-xs text-gray-500">Or</span>
                  <div className="flex-1 border-t border-gray-300" />
                </div>

                <button
                  onClick={handleGoogleLogin}
                  disabled={loading}
                  className="w-full border border-gray-300 hover:border-blue-600 text-gray-700 font-semibold py-2.5 rounded-full transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <FaGoogle className="w-5 h-5 text-red-500" />
                  Sign in with Google
                </button>

                <button
                  onClick={handleFacebookLogin}
                  disabled={loading}
                  className="w-full border border-gray-300 hover:border-blue-600 text-gray-700 font-semibold py-2.5 rounded-full transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <FaFacebook className="w-5 h-5 text-blue-600" />
                  Sign in with Facebook
                </button>
              </form>
            </div>
          ) : (
            // Register Form
            <div className="px-6 py-6 bg-white">
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    value={registerData.name}
                    onChange={(e) =>
                      setRegisterData({ ...registerData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    value={registerData.email}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        email: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Create a password"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    value={registerData.password}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        password: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    value={registerData.confirmPassword}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        confirmPassword: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <label className="flex items-start gap-2 text-sm">
                  <input type="checkbox" className="w-4 h-4 mt-0.5" />
                  <span className="text-gray-600">
                    I agree to the Terms & Conditions
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="block w-full px-6 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-semibold text-center text-sm mt-4 disabled:opacity-50"
                >
                  {loading ? "Registering..." : "Register"}
                </button>

                <div className="relative flex items-center my-4">
                  <div className="flex-1 border-t border-gray-300" />
                  <span className="px-2 text-xs text-gray-500">Or</span>
                  <div className="flex-1 border-t border-gray-300" />
                </div>

                <button
                  onClick={handleGoogleLogin}
                  disabled={loading}
                  className="w-full border border-gray-300 hover:border-blue-600 text-gray-700 font-semibold py-2.5 rounded-full transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <FaGoogle className="w-5 h-5 text-red-500" />
                  Sign up with Google
                </button>

                <button
                  onClick={handleFacebookLogin}
                  disabled={loading}
                  className="w-full border border-gray-300 hover:border-blue-600 text-gray-700 font-semibold py-2.5 rounded-full transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <FaFacebook className="w-5 h-5 text-blue-600" />
                  Sign up with Facebook
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AuthModal;
