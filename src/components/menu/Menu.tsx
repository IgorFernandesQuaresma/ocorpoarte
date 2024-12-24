import Link from 'next/link';

export default function Menu() {
  return (
    <div className="menu fixed top-0 left-0 h-screen w-14 bg-white border-r border-gray-300">
      <ul className=' menu__ul flex flex-col items-center justify-center h-screen space-y-32'>
        <li className='menu__ul__li decoration-transparent my-4 transform rotate-[270deg] font-semibold  hover:border-b-2 hover:border-black'>      
          <Link href="/">Home</Link>  
        </li>
        <li className=' menu__ul__li decoration-transparent my-4 transform rotate-[270deg] font-semibold hover:border-b-2 hover:border-black'>
          <Link href="/aulas">Aulas</Link>
        </li>
        <li className=' menu__ul__li decoration-transparent my-4 transform rotate-[270deg] font-semibold hover:border-b-2 hover:border-black'>
          <Link href="/eventos">Eventos</Link>
        </li>
      </ul>
    </div>
  );
}
