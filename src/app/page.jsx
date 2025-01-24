import Image from "next/image";
import Link from 'next/link';
import Menu from "../components/menu/Menu";
import Button from "../components/button/Button";
import Carroussel from "../components/carroussel/Carroussel";
import carinaImage from '../../public/fotos/Carina.jpeg';
import fulaninhaImage from '../../public/fotos/Eu.jpeg';

export default function Home() {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] min-h-screen max-h-screen font-[family-name:var(--font-geist-sans)] overflow-hidden">
          <nav>
            <Menu />
          </nav>
          <main className="flex flex-row justify-center h-full w-full">
            <div className="container__textos bg-white h-full p-10 space-y-6"  style={{ width: "calc(30% - 3.5rem)", marginLeft: "3.5rem" }}>
              <h1 className="text-6xl font-light font-inter">O Corpo  
                <span className="block ml-44 text-6xl font-medium font-montserrat">Arte</span>
              </h1>
              <p className="text-xl font-light font-inter w-[90%] text-left">Textinho de criapipipi popopo lalalala sejam rainhas princesas mendigas, lugar de mulher é onde ela quiser</p>

              <Button
                  width="w-[80%]"
                  height="h-[45px]"
                  color="bg-red-500"
                  borderRadius="rounded-xl"
                  text="Botão"
                  image=""/>

              <div>
                <h2 className="text-lg text-center font-medium font-montserrat mb-4">Professores</h2>
                <ul className="space-y-2 flex flex-col items-center">
                <li className="text-lg font-light font-inter w-[90%] flex items-center justify-center space-x-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden">
                      <Image src={carinaImage} alt="Carininha" />
                    </div>
                    <span>Carininha</span>
                  </li>
                  <li className="text-lg font-light font-inter w-[90%] flex items-center justify-center space-x-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden">
                      <Image src={fulaninhaImage} alt="Fulaninha"  />
                    </div>
                    <span>Fulaninha</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="container_carrossel bg-slate-100 h-full w-[70%] flex justify-center items-center">
              <Carroussel/>
            </div>
          </main>
        </div>
    );
}