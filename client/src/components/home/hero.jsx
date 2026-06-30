function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 border-x border-zinc-800 px-10">

      <button className="absolute top-8 right-8 text-sm hover:text-zinc-300 transition">
        Login →
      </button>

      <h1 className="text-6xl font-bold">
        LinkForge
      </h1>

      <p className="text-zinc-400 text-lg">
        Forge Better Links.
      </p>

      <input
        type="text"
        placeholder="Paste your long URL..."
        className="w-full max-w-2xl rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-4 outline-none focus:border-white"
      />

      <input
        type="text"
        placeholder="Custom Alias (Optional)"
        className="w-full max-w-2xl rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-4 outline-none focus:border-white"
      />

      <button className="rounded-xl bg-white px-8 py-3 text-black font-semibold hover:scale-105 transition">
        Forge Link
      </button>

    </div>
  );
}

export default Hero;