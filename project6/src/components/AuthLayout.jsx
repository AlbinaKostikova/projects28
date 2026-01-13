import AuthRight from './AuthRight'
import AuthLeft from './AuthLeft'

function AuthLayout() {
  return (
    <div className="flex w-screen h-screen">
      <div className="relative w-1/2 h-full flex flex-col px-[50px] py-5 justify-center items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('../public/buildings.avif')] bg-no-repeat bg-center bg-cover z-0" />
        <div className="absolute inset-0 bg-blue-700/40 z-10" />
        <div className="relative z-20 flex flex-col">
          <AuthLeft />
        </div>
      </div>

      <div className="flex flex-col w-1/2 h-full px-[50px] py-5">
        <AuthRight />
      </div>
    </div>
  )
}

export default AuthLayout
