import Logo from '../assets/logo-text.png'


export function Nav() {
    
    return (
    <section className='bg-[#ffffff] '>
        <nav className=" container mx-auto flex justify-between items-center m-4">
                <a href="">
                    <img src={Logo} alt="" />
                </a>
                <div>
                    <ul className='flex justify-between gap-4 items-center'>
                        <li className='text-[#DB2777]'>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='flex justify-between items-center gap-4'>
                    <div className='btn'>Sign in</div>
                    <div className='btn bg-[#d91b7e] text-white rounded-full px-4 p-2'>Sign up</div>
                </div>
            </nav>
    </section>
    )
}


            