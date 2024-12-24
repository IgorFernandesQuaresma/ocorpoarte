import Link from 'next/link';

export default function Button({
  width = 'w-[395px]', // Largura com valor padrão
  height = 'h-[83px]', // Altura com valor padrão
  color = 'bg-blue-500', // Cor de fundo com valor padrão
  borderRadius = 'rounded-md', // Arredondamento das bordas com valor padrão
  text = 'Clique Aqui', // Texto padrão
  image = '', // Imagem opcional
}) {
  return (
    <Link href="#" passHref>
    <div className="flex justify-center items-center w-full"> {/* Container do Link com flexbox */}
      <button
        className={`${width} ${height} ${color} ${borderRadius} flex items-center justify-center space-x-3 text-white hover:opacity-75 transition-opacity duration-300 mt-10`}
      >
        {image && <img src={image} alt="icon" className="w-6 h-6" />} {/* Exibe a imagem se fornecida */}
        <span>{text}</span>
      </button>
    </div>
  </Link>
  );
}
