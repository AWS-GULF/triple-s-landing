import logo from "../assets/images/logo.svg"

export default function NavBar() {
  return (
    <div className="flex justify-between items-center py-6">
      <img src={logo} alt="logo" />
      <button className="px-6 py-3 bg-[#203B72] text-white rounded-full hover:bg-blue-700 transition-colors">
        Get Notified
      </button>
    </div>
  )
}
