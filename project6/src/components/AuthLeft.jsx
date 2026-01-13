function AuthLeft() {
  return (
    <div className="relative h-screen w-full flex flex-col justify-center">
    <img src="/logo.jpeg" alt="Logo" className="fixed left-4 top-4 w-16 h-8 object-contain z-50" />
    <div className="relative z-10 flex flex-col justify-center items-center w-full">
      <div className="flex flex-col max-w-[400px] gap-4 leading-8 text-white">
        <p>
          The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer
          sheets, and again during the 90s.
        </p>

        <p className="flex items-center gap-3">
          Vincent Obi
          <img src="/ok.png" alt="ok" className="w-5 h-5 z-5" />
        </p>
      </div>

      <div className="absolute -bottom-8 left-0 right-0 h-8 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent opacity-80" />
    </div>
    </div>
  )
}
export default AuthLeft
