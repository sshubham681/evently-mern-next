import Image from "next/image"
import Link from "next/link"
import logo from '../../../public/assets/images/logo.svg'

const Footer = () => {
  const getCurrentYear: number = new Date().getFullYear()
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image src={logo} alt="logo" height={38} width={128}/>
        </Link>
        <p>{getCurrentYear} Evently. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer