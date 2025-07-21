import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Image
            src="/app-icon.png"
            alt="Tadabbur AI"
            width={50}
            height={50}
            className="rounded-lg"
          />
          <span className="text-xl font-semibold text-black">Tadabbur AI</span>
        </div>
      </header>

      <main className="flex flex-col items-center text-center px-6">
        <section className="max-w-4xl mx-auto pt-16 pb-12">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-1">              
              <Image
                src="/app-icon.png"
                alt="Tadabbur AI"
                width={120}
                height={120}
                className="rounded-3xl"
              />
              <h1 className="text-xl font-semibold text-black">Tadabbur AI</h1>
            </div>
            
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold text-black mb-4">
                Enhance your Quran study with AI-powered insights
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Discover deeper meanings and connections in the Quran through intelligent analysis and personalized learning experiences
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Image
                src="/app_store.png"
                alt="Download on the App Store"
                width={200}
                height={60}
                className="bg-gray-200 rounded-lg"
              />
              <Image
                src="/google_play.png"
                alt="Get it on Google Play"
                width={200}
                height={60}
                className="bg-gray-200 rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <div className="relative">
              <div className="w-64 h-[500px] bg-black rounded-[3rem] p-2">
                <div className="w-full h-full bg-white rounded-[2.5rem] p-4 flex items-center justify-center">
                  <Image
                    src="/screenshot-1.png"
                    alt="App Screenshot 1"
                    width={240}
                    height={480}
                    className="bg-gray-100 rounded-2xl"
                  />
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-64 h-[500px] bg-black rounded-[3rem] p-2">
                <div className="w-full h-full bg-white rounded-[2.5rem] p-4 flex items-center justify-center">
                  <Image
                    src="/screenshot-1.png"
                    alt="App Screenshot 2"
                    width={240}
                    height={480}
                    className="bg-gray-100 rounded-2xl"
                  />
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-64 h-[500px] bg-black rounded-[3rem] p-2">
                <div className="w-full h-full bg-white rounded-[2.5rem] p-4 flex items-center justify-center">
                  <Image
                    src="/screenshot-1.png"
                    alt="App Screenshot 3"
                    width={240}
                    height={480}
                    className="bg-gray-100 rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
