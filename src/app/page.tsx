export default function Home() {
  return (
    <main className="flex  min-h-screen w-full px-3 flex-col items-center bg-[var(--background-secondary)]">
      <div
        id="hero"
        className="flex flex-col justify-center w-full max-w-7xl h-[600px]"
      >
        <h1 className="text-5xl leading-12 font-bold ">
          Olá, sou Philip Greiner
        </h1>
        <p className="text-[18px] pt-5 ">
          Desça a página para conferir meu trabalho.{" "}
          <span className=" text-3xl font-bold">{":)"}</span>
        </p>
      </div>
    </main>
  );
}
