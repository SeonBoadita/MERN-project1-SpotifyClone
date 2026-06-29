import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Auth = ({ defaultIsLogin = true }) => {
    const [isLogin, setIsLogin] = useState(defaultIsLogin);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock authentication, redirect to home
        navigate('/');
    };

    return (
        <div className="w-full h-full rounded-2xl overflow-hidden flex font-sans relative"
            style={{
                background: 'linear-gradient(110deg, #ffffff 35%, #050505 35%)',
            }}
        >
            {/* Back Button */}
            <div className="absolute top-8 left-8 z-20">
                <button onClick={() => navigate('/')} className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white cursor-pointer hover:bg-gray-900 transition-colors shadow-lg">
                    <i className="fa-solid fa-arrow-left text-xl"></i>
                </button>
            </div>

            {/* Left Side (Decorative) */}
            <div className="w-[45%] h-full flex flex-col items-center justify-center relative p-12">
                <div className="absolute w-[300px] h-[40px] bg-(--green) opacity-80 blur-sm transform -rotate-45 top-1/4 left-1/4 mix-blend-multiply"></div>
                <div className="absolute w-[200px] h-[30px] bg-(--green) opacity-80 blur-sm transform -rotate-45 bottom-1/4 left-1/3 mix-blend-multiply"></div>

                <div className="relative z-10 text-center flex flex-col items-center">
                    <div className="w-24 h-24 bg-black rounded-full mb-8 flex items-center justify-center shadow-[0_0_40px_rgba(187,252,7,0.4)]">
                        <i className="fa-solid fa-headphones text-5xl text-(--green)"></i>
                    </div>
                    <h1 className="text-6xl font-bold uppercase tracking-tighter text-black mb-4" style={{ fontFamily: 'impact, sans-serif' }}>
                        LISTENER<br />HUB
                    </h1>
                    <p className="text-gray-600 font-medium tracking-wide">
                        Discover new music, create playlists, and vibe to your favorite artists.
                    </p>
                </div>
            </div>

            {/* Right Side (Form) */}
            <div className="w-[55%] h-full flex items-center justify-center relative z-10 p-16">
                <div className="w-full max-w-md">
                    {/* Header */}
                    <div className="mb-10">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-(--green) text-xs font-semibold tracking-widest mb-4">
                                <div className="w-2 h-2 rounded-full bg-(--green)"></div>
                                <span>{isLogin ? 'WELCOME BACK' : 'JOIN THE VIBE'}</span>
                            </div>
                            <Link to="/author-login" className="text-xs text-gray-500 hover:text-white transition-colors">
                                Are you an Creator? <span className="text-(--green) underline underline-offset-2">Go to Creator Hub</span>
                            </Link>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-2">
                            {isLogin ? 'Log In to ' : 'Sign Up for '}
                            <span className="text-(--green)">Users</span>
                        </h2>
                        <p className="text-gray-400 text-sm">
                            {isLogin ? 'Enter your details to access your account.' : 'Create an account to start your musical journey.'}
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        {!isLogin && (
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-semibold tracking-widest text-gray-400">FULL NAME</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <i className="fa-regular fa-user text-gray-500"></i>
                                    </div>
                                    <input
                                        type="text"
                                        required
                                        placeholder="John Doe"
                                        className="w-full bg-[#111111] border border-gray-800 text-white rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-(--green) transition-colors"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-semibold tracking-widest text-gray-400">EMAIL ADDRESS</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <i className="fa-regular fa-envelope text-gray-500"></i>
                                </div>
                                <input
                                    type="email"
                                    required
                                    placeholder="hello@example.com"
                                    className="w-full bg-[#111111] border border-gray-800 text-white rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-(--green) transition-colors"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-semibold tracking-widest text-gray-400">PASSWORD</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <i className="fa-solid fa-lock text-gray-500"></i>
                                </div>
                                <input
                                    type="password"
                                    required
                                    placeholder="••••••••"
                                    className="w-full bg-[#111111] border border-gray-800 text-white rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-(--green) transition-colors"
                                />
                            </div>
                        </div>

                        {isLogin && (
                            <div className="flex justify-end">
                                <a href="#" className="text-xs text-gray-500 hover:text-(--green) transition-colors">Forgot password?</a>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-(--green) text-black font-bold py-4 rounded-lg mt-4 hover:shadow-[0_0_20px_rgba(187,252,7,0.3)] transition-all flex items-center justify-center gap-2 group"
                        >
                            {isLogin ? 'SIGN IN' : 'CREATE ACCOUNT'}
                            <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </form>

                    {/* Footer Toggle */}
                    <div className="mt-8 text-center text-sm text-gray-500">
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-white font-semibold hover:text-(--green) transition-colors"
                        >
                            {isLogin ? 'Sign up' : 'Log in'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
