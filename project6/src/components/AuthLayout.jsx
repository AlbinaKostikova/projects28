import AuthRight from './AuthRight'
import AuthLeft from './AuthLeft'

function AuthLayout() {
  return (
    <div className='flex w-screen h-screen'>
      <div className="relative z-9 bg-[url('../public/buildings.avif')] bg-no-repeat bg-center bg-cover flex flex-col w-1/2 h-full px-[50px] py-5 justify-center items-center">
        <div className="x-10 absolute inset-0 bg-blue-500/40"></div>
        <AuthLeft/>
      </div>
      <div className="flex flex-col w-1/2 h-full px-[50px] py-5">
        <AuthRight />
      </div>
    </div>
  )
}
export default AuthLayout