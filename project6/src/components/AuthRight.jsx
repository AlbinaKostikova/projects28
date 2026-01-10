import { useState } from "react"
import LoginForm from "./LoginForm"
import IndividualSignupForm from "./IndividualsSignUpForm"
import BusinessSignupForm from "./BusinessSugnUpForm"


function AuthRight() {
  const [mode, setMode] = useState("signup")
  const [accountType, setAccountType] = useState("individual")

  const showLogin = mode === "login"
  const showCards = mode === "signup"
  const showForm = mode === "form" 

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex justify-end items-center gap-2 mb-6 text-sm">
        <span className="text-gray-500">Already have an account?</span>
        <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors" onClick={() => setMode("login")}>Sign in</button>
      </div>
      {showLogin ? (
        <LoginForm onBackToSignUp={() => setMode("signup")} />
      ) : showCards ? (

        <div className="flex flex-col gap-6">
          <div className="rs-main">
            <h2 className="text-2xl font-semibold mb-2">Join Us!</h2>
            <p className="text-sm text-gray-600">
              To begin this journey, tell us what type of account you'd be opening.
            </p>

            <button type="button" onClick={() => {
                setAccountType("individual")
                setMode("form")
              }}
              className={`mt-4 flex items-center justify-start w-full px-4 py-3 rounded-lg border transition-colors 
                ${accountType === "individual"
                  ? "border-[#3a3aef] bg-blue-50"
                  : "border-gray-200 hover:border-[#3a3aef]"
                }`}
            >
              <div className="rs-individuals__logo w-10 h-10 bg-gray-200 rounded-full mr-3" />
              <div className="rs-individuals__text text-left">
                <h4 className="font-medium text-sm">Individual</h4>
                <p className="text-xs text-gray-500">
                  Personal account to manage all your activities.
                </p>
              </div>
            </button>

            <button type="button" onClick={() => {
                setAccountType("business")
                setMode("form")
              }}
              className={`mt-3 flex items-center justify-start w-full px-4 py-3 rounded-lg border transition-colors 
                ${accountType === "business"
                  ? "border-[#3a3aef] bg-blue-50"
                  : "border-gray-200 hover:border-[#3a3aef]"
                }`}>
              <div className="rs-business__logo w-10 h-10 bg-gray-200 rounded-full mr-3" />
              <div className="rs-business__text text-left">
                <h4 className="font-medium text-sm">Business</h4>
                <p className="text-xs text-gray-500">Own or belong to a company, this is for you.</p>
              </div>
            </button>
          </div>
        </div>
      ) : (


        <div className="flex flex-col gap-6">
          {accountType === "individual" && (
            <IndividualSignupForm onBack={() => setMode("signup")} />
          )}
          {accountType === "business" && (
            <BusinessSignupForm onBack={() => setMode("signup")} />
          )}
        </div>
      )}
    </div>
  );
}
export default AuthRight