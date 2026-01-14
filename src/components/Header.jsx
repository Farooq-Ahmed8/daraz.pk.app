import React, { useState } from "react";
import Logo from "../assets/daraz-logo.png"
function Header() {
  let [open, setOpen] = useState(false);
  let [showLogin, setShowLogin] = useState(false);
  let [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <div className="w-full bg-[#F85606]">
        <div className="flex justify-end px-4 py-2 text-white md:hidden">
          <button onClick={() => setOpen(!open)} className="text-2xl">
            {open ? "✕" : "☰"}
          </button>
        </div>

        <div className={`w-full flex justify-end pr-20 items-center py-2 px-4 text-white text-sm font-mono ${open ? "flex flex-col md:flex-row" : "hidden"} md:flex`}>
          <a className="mb-2 md:mb-0 md:mr-10 cursor-pointer">SAVE MORE ON APP</a>
          <a className="mb-2 md:mb-0 md:mr-10 cursor-pointer">SELL ON DARAZ</a>
          <a className="mb-2 md:mb-0 md:mr-10 cursor-pointer">HELP & SUPPORT</a>

          <button onClick={() => setShowLogin(true)} className="mb-2 md:mb-0 md:mr-10 hover:text-gray-200">
            LOGIN
          </button>

          <button onClick={() => setShowSignup(true)} className="hover:text-gray-200">
            SIGN UP
          </button>
        </div>

  <div className="w-full min-h-[64px] flex items-center gap-3 sm:gap-4
  px-3 sm:px-4 md:px-6 lg:px-8 xl:px-24
  py-2 md:py-3 border-b border-orange-400 bg-[#F85606]">

  <div className="flex-shrink-0">
    <img src={Logo}alt="Daraz" className="w-20 sm:w-24 md:w-28 lg:w-32 cursor-pointer"/>
  </div>

  <div className="flex flex-1 items-center min-w-0">
    <div className="flex w-full max-w-3xl mx-auto items-center gap-2">

      <div className="flex flex-1">
        <input type="text" placeholder="Search in Daraz..." className="flex-1 h-9 sm:h-10 bg-white pl-3 sm:pl-4 text-sm sm:text-base rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#F85606] focus:ring-opacity-70 placeholder:text-gray-500"/>
        <button className="w-9 sm:w-10 h-9 sm:h-10 bg-[#FF9B4A] hover:bg-[#F85606] rounded-r-md flex items-center justify-center transition-colors duration-200">
          <svg className="w-4 h-4 cursor-pointer sm:w-5 sm:h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 550" fill="#fff"><path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"/></svg>
        </button>
      </div>

      <button className="relative flex-shrink-0 w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center rounded-md transition">
        <svg className="w-7 h76 cursor-pointer sm:w-7 sm:h-7 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 550" fill="currentColor">< path d="M0 72C0 58.7 10.7 48 24 48L69.3 48C96.4 48 119.6 67.4 124.4 94L124.8 96L312 96L312 198.1L281 167.1C271.6 157.7 256.4 157.7 247.1 167.1C237.8 176.5 237.7 191.7 247.1 201L319.1 273C328.5 282.4 343.7 282.4 353 273L425 201C434.4 191.6 434.4 176.4 425 167.1C415.6 157.8 400.4 157.7 391.1 167.1L360.1 198.1L360.1 96L537.5 96C557.5 96 572.6 114.2 568.9 133.9L537.8 299.8C532.1 330.1 505.7 352 474.9 352L171.3 352L176.4 380.3C178.5 391.7 188.4 400 200 400L456 400C469.3 400 480 410.7 480 424C480 437.3 469.3 448 456 448L200.1 448C165.3 448 135.5 423.1 129.3 388.9L77.2 102.6C76.5 98.8 73.2 96 69.3 96L24 96C10.7 96 0 85.3 0 72zM160 528C160 501.5 181.5 480 208 480C234.5 480 256 501.5 256 528C256 554.5 234.5 576 208 576C181.5 576 160 554.5 160 528zM384 528C384 501.5 405.5 480 432 480C458.5 480 480 501.5 480 528C480 554.5 458.5 576 432 576C405.5 576 384 554.5 384 528z"/></svg>
      </button>

    </div>
  </div>
</div>


      </div>

      {showLogin && (
        <Modal title="Welcome to Daraz" onClose={() => setShowLogin(false)}>
          <LoginForm onSwitchToSignup={() => {
              setShowLogin(false);
              setShowSignup(true);
            }}/>
        </Modal>
      )}

      {showSignup && (
        <Modal title="Create your Daraz Account" onClose={() => setShowSignup(false)}>
          <SignupForm onSwitchToLogin={() => {
              setShowSignup(false);
              setShowLogin(true);
            }}/>
        </Modal>
      )}
    </>
  );
}

function Modal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] md:w-[420px] p-6 rounded-lg relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-xl text-gray-500 hover:text-gray-700">✕</button>
        <h2 className="text-lg font-semibold mb-6 text-gray-800">{title}</h2>
        {children}
      </div>
    </div>
  );
}

function LoginForm({ onSwitchToSignup }) {
  let [loginMethod, setLoginMethod] = useState("phone"); 
  let [showPassword, setShowPassword] = useState(false);
  let [phone, setPhone] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [rememberMe, setRememberMe] = useState(false);

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { loginMethod, phone, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex border-b">
        <button type="button" className={`flex-1 py-2 text-center font-medium ${loginMethod === "phone" ? "text-[#F85606] border-b-2 border-[#F85606]" : "text-gray-500"}`} onClick={() => setLoginMethod("phone")}>
          Phone Number
        </button>
        <button type="button" className={`flex-1 py-2 text-center font-medium ${loginMethod === "email" ? "text-[#F85606] border-b-2 border-[#F85606]" : "text-gray-500"}`} onClick={() => setLoginMethod("email")}>
          Email
        </button>
      </div>

      <div className="space-y-3">
        {loginMethod === "phone" ? (
          <div>
            <div className="flex items-center border rounded-md overflow-hidden">
              <div className="px-3 py-2 bg-gray-100 text-gray-600 text-sm border-r">
                +92
              </div>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number" className="flex-1 px-3 py-2 outline-none" required/>
            </div>
            <p className="text-xs text-gray-500 mt-1">Enter your 11-digit mobile number</p>
          </div>
        ) : (
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="w-full px-3 py-2 border rounded-md outline-none focus:border-[#F85606]" required/>
        )}

        <div className="relative">
          <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="w-full px-3 py-2 border rounded-md outline-none focus:border-[#F85606] pr-10" required/>
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <div className="flex justify-between items-center">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="w-4 h-4 text-[#F85606] rounded focus:ring-0"/>
            <span className="text-sm text-gray-600">Remember me</span>
          </label>
          <button type="button" className="text-sm text-[#F85606] hover:underline">
            Forgot password?
          </button>
        </div>
      </div>

      <button type="submit" className="w-full py-3 bg-[#F85606] text-white font-medium rounded-md hover:bg-[#e04e05] transition-colors">
        LOGIN
      </button>

      <div className="flex items-center my-4">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="px-3 text-sm text-gray-500">OR</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      <p className="text-center text-sm text-gray-600 mt-4">
        New to Daraz?{" "}
        <button type="button" onClick={onSwitchToSignup} className="text-[#F85606] hover:underline font-medium">
          Create Account
        </button>
      </p>

      <p className="text-xs text-gray-500 text-center mt-4">
        By logging in, you agree to Daraz's{" "}
        <a href="#" className="text-[#F85606] hover:underline">Terms of Use</a>{" "}
        and{" "}
        <a href="#" className="text-[#F85606] hover:underline">Privacy Policy</a>
      </p>
    </form>
  );
}

function SignupForm({ onSwitchToLogin }) {
  let [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  let [showPassword, setShowPassword] = useState(false);
  let [showConfirmPassword, setShowConfirmPassword] = useState(false);
  let [termsAccepted, setTermsAccepted] = useState(false);

  let handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup attempt:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-3">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full px-3 py-2 border rounded-md outline-none focus:border-[#F85606]" required/>

        <div>
          <div className="flex items-center border rounded-md overflow-hidden">
            <div className="px-3 py-2 bg-gray-100 text-gray-600 text-sm border-r">
              +88
            </div>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" className="flex-1 px-3 py-2 outline-none" required/>
          </div>
          <p className="text-xs text-gray-500 mt-1">We'll send verification code to this number</p>
        </div>

        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email (Optional)" className="w-full px-3 py-2 border rounded-md outline-none focus:border-[#F85606]"/>

        <div className="relative">
          <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} placeholder="Create Password" className="w-full px-3 py-2 border rounded-md outline-none focus:border-[#F85606] pr-10" required/>
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <div className="relative">
          <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" className="w-full px-3 py-2 border rounded-md outline-none focus:border-[#F85606] pr-10" required/>
          <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
            {showConfirmPassword ? "Hide" : "Show"}
          </button>
        </div>

      </div>

      <button type="submit" className="w-full py-3 bg-[#F85606] text-white font-medium rounded-md hover:bg-[#e04e05] transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled={!termsAccepted}>
        SIGN UP
      </button>

      <div className="bg-blue-50 border border-blue-100 p-3 rounded-md">
        <p className="text-sm text-blue-800">
          <span className="font-medium">Note:</span> You'll receive a verification code on your phone number to complete registration.
        </p>
      </div>

      <p className="text-center text-sm text-gray-600 mt-4">
        Already have an account?{" "}
        <button type="button" onClick={onSwitchToLogin} className="text-[#F85606] hover:underline font-medium">
          Login
        </button>
      </p>
    </form>
  );
}

export default Header;