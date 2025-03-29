export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full px-3 items-center bg-[var(--background-secondary)]">
      <section
        id="hero"
        className="flex flex-col justify-center w-full max-w-7xl h-[600px]"
      >
        <h1 className="text-5xl leading-12 font-medium ">
          Olá, sou Philip Greiner
        </h1>
        <p className="text-[18px] pt-5 font-light">
          Desça a página para conferir meu trabalho.{" "}
          <span className=" text-3xl font-medium">{":)"}</span>
        </p>
      </section>
      <section>
        <div>test</div>
      </section>
    </main>
  );
}
