import Link from "next/link";

export default function AboutMe() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center px-3">
      <div
        id="hero"
        className="flex flex-col justify-center w-full max-w-7xl h-[600px]"
      >
        <h1 className="text-5xl leading-12 font-medium ">
          Olá,
          <br />
          Sou Philip Greiner.
        </h1>
        <p className="text-[17px] max-w-[515px] leading-5 pt-10 ">
          Apaixonado por criatividade e visualidade, foi no design que encontrei
          a possibilidade de explorar isso, estando sempre aberto a novas
          experiências e aprendizados profissionais.
        </p>
        <Link
          href="./pdfs/resume.pdf"
          target="_blank"
          className="text-[18px] w-fit font-medium text-white mt-5 bg-[var(--primary-color)] "
        >
          {"Currículo (PDF)."}
        </Link>
      </div>
    </main>
  );
}
