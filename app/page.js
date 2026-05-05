"use client";
import { useState, useEffect } from "react";
import { Pixelify_Sans } from 'next/font/google'

const zodiacList = [
  "aries", "taurus", "gemini", "cancer", "leo", "virgo",
  "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"
];

const zodiacIcons = {
  aries: "/icons/aries.png",
  taurus: "/icons/taurus.png",
  gemini: "/icons/gemini.png",
  cancer: "/icons/cancer.png",
  leo: "/icons/leo.png",
  virgo: "/icons/virgo.png",
  libra: "/icons/libra.png",
  scorpio: "/icons/scorpio.png",
  sagittarius: "/icons/sagittarius.png",
  capricorn: "/icons/capricorn.png",
  aquarius: "/icons/aquarius.png",
  pisces: "/icons/pisces.png",
};

const zodiacData = {
  aries: {
    love: [
      "don’t rush into decisions 😭",
      "they just need time, doesn’t mean they don’t care",
      "try to be a little more patient today"
    ],
    life: [
      "your energy is high today, use it well!",
      "you don’t have to do everything alone",
      "focus on what really matters first"
    ],
    mood: [
      "motivated but easily annoyed",
      "active but kinda tired",
      "ready to fight 😭"
    ],
    dont: [
      "don’t snap too quickly",
      "don’t overreact"
    ]
  },

  taurus: {
    love: [
      "you need reassurance today 🥺",
      "don’t get too possessive",
      "relax, everything’s okay"
    ],
    life: [
      "today’s perfect for slowing down",
      "don’t be too hard on yourself",
      "slow progress is still progress"
    ],
    mood: [
      "lazy but wants to be productive",
      "craving comfort food",
      "calm but stubborn 😭"
    ],
    dont: [
      "don’t overspend today",
      "don’t stay in your comfort zone too much"
    ]
  },

  gemini: {
    love: [
      "your feelings are all over the place 😭",
      "don’t lead too many people on",
      "be honest with yourself"
    ],
    life: [
      "so many ideas, pick one first",
      "focus is key!",
      "don’t overthink everything"
    ],
    mood: [
      "super random",
      "happy then suddenly overthinking",
      "chaotic energy 🤡"
    ],
    dont: [
      "don’t ghost people",
      "don’t be too indecisive"
    ]
  },

  cancer: {
    love: [
      "you’re extra sensitive today 🥺",
      "don’t keep it all inside",
      "they didn’t mean to hurt you"
    ],
    life: [
      "take care of yourself first",
      "you don’t have to carry everything",
      "rest is important"
    ],
    mood: [
      "feeling emotional all day",
      "needs a hug 😭",
      "soft but warm"
    ],
    dont: [
      "don’t overthink tonight",
      "don’t cry alone"
    ]
  },

  leo: {
    love: [
      "you’re extra charming today ✨",
      "they definitely notice you 😉",
      "just be confident!"
    ],
    life: [
      "it’s your time to shine",
      "take that opportunity",
      "don’t be afraid to stand out"
    ],
    mood: [
      "main character energy 💅",
      "full confidence mode",
      "needs attention 😭"
    ],
    dont: [
      "don’t be too self-centered",
      "don’t rely on validation"
    ]
  },

  virgo: {
    love: [
      "don’t be too perfectionist",
      "not everything has to be perfect",
      "they like you as you are"
    ],
    life: [
      "organize your life a bit today",
      "being productive is good, but rest too",
      "don’t overwork yourself"
    ],
    mood: [
      "organized but overthinking",
      "motivated but tired",
      "needs control 😭"
    ],
    dont: [
      "don’t overanalyze everything",
      "don’t be too hard on yourself"
    ]
  },

  libra: {
    love: [
      "you need balance today 🥺",
      "don’t chase too hard",
      "love goes both ways"
    ],
    life: [
      "make a decision today",
      "don’t overthink too long",
      "balance is everything"
    ],
    mood: [
      "can’t decide 😭",
      "calm but unsure",
      "needs validation"
    ],
    dont: [
      "don’t keep people pleasing",
      "don’t be afraid to say no"
    ]
  },

  scorpio: {
    love: [
      "your feelings run deep today 😭",
      "don’t bottle it up",
      "try to open up a little"
    ],
    life: [
      "trust your intuition",
      "you know what’s best",
      "don’t doubt yourself"
    ],
    mood: [
      "mysterious",
      "intense",
      "silent but deadly 😭"
    ],
    dont: [
      "don’t be too suspicious",
      "don’t overthink too much"
    ]
  },

  sagittarius: {
    love: [
      "you’re craving freedom",
      "don’t feel trapped",
      "love shouldn’t feel restricting"
    ],
    life: [
      "try something new!",
      "perfect day to go out",
      "don’t stay stuck"
    ],
    mood: [
      "happy but restless",
      "wants to escape 😭",
      "fun energy"
    ],
    dont: [
      "don’t run from problems",
      "don’t be too impulsive"
    ]
  },

  capricorn: {
    love: [
      "you’re serious about your feelings",
      "don’t act too cold",
      "try to express more"
    ],
    life: [
      "you’re doing great!",
      "your progress is showing",
      "keep going 💪"
    ],
    mood: [
      "focused",
      "ambitious mode on",
      "tired but pushing through 😭"
    ],
    dont: [
      "don’t overwork yourself",
      "don’t forget to rest"
    ]
  },

  aquarius: {
    love: [
      "you’re different in a good way 😉",
      "don’t be too distant",
      "they need clarity"
    ],
    life: [
      "your ideas are amazing",
      "try to bring them to life!",
      "think outside the box"
    ],
    mood: [
      "random genius",
      "cold but caring",
      "unique 😭"
    ],
    dont: [
      "don’t detach too much",
      "don’t avoid your emotions"
    ]
  },

  pisces: {
    love: [
      "don’t overthink 😭",
      "they’re just busy",
      "you’re thinking too far ahead"
    ],
    life: [
      "take it slow today",
      "go with the flow",
      "don’t force things"
    ],
    mood: [
      "sleepy and emotional",
      "needs alone time",
      "sensitive 🥺"
    ],
    dont: [
      "don’t text your ex",
      "don’t get too emotional"
    ]
  }
};

const pixel = Pixelify_Sans({
  subsets: ['latin'],
})

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getPosition(index, total, radius) {
  const angle = (index / total) * 2 * Math.PI;

  return {
    x: Math.round(radius * Math.cos(angle)),
    y: Math.round(radius * Math.sin(angle)),
  };
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function Home() {
  const [selected, setSelected] = useState(null);
  const [showCard, setShowCard] = useState(false);
  const [result, setResult] = useState(null);

  const handleGenerate = () => {
    if (!selected) return;

    const data = zodiacData[selected];

    setResult({
      love: getRandom(data.love),
      life: getRandom(data.life),
      mood: getRandom(data.mood),
      dont: getRandom(data.dont),
    });

    setShowCard(true);
  };

  const handleBack = () => {
    setShowCard(false);
    setResult(null);
  };
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    setSparkles(
      Array.from({ length: 12 }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  const [radius, setRadius] = useState(150);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 480) {
        setRadius(140); // HP kecil
      } else if (window.innerWidth < 768) {
        setRadius(160); // tablet
      } else {
        setRadius(185); // desktop
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <main className={`relative min-h-screen bg-black text-white flex overflow-hidden flex-col items-center justify-center ${pixel.className}`}>
      <img
        src="/background.png"
        className="absolute inset-0 w-full h-full object-cover overflow-hidden"
        style={{ imageRendering: "pixelated", zIndex: 0 }}
      />

      {sparkles.map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-ping overflow-hidden"
          style={{
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
      <div className="perspective">
        <div className={`relative w-[90vw] max-w-[500px] aspect-[3/4] transition-transform duration-700 transform-style ${showCard ? "rotate-y-180" : ""}`}>

          {/* 🔥 FRONT */}
          <div className="absolute w-full h-full backface-hidden flex flex-col justify-between items-center p-6 overflow-hidden"
            style={{
              backgroundImage: "url('/Card.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}>

            <h1 className="text-lg md:text-2xl font-semibold py-2 md:py-3 text-center">
              Today’s Zodiac Message
            </h1>

            {/* WHEEL */}
            <div className="flex-1 flex items-center justify-center w-full">
              <div className="relative w-[85vw] max-w-[420px] aspect-square">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-yellow-400 text-lg text-center float overflow-hidden">
                  {selected ? (
                    <div className="flex flex-col items-center gap-0.5">
                      <img
                        src={`/${selected}.png`}
                        alt={selected}
                        className="pixel w-[80%] max-w-[320px] object-contain drop-shadow-[0_0_20px_rgba(255,215,0,0.6)]"
                      />
                      <p className="text-2xl text-yellow-300 tracking-wide">
                        {selected.charAt(0).toUpperCase() + selected.slice(1)}
                      </p>
                    </div>
                  ) : "Pick your zodiac"}
                </div>

                {/* ICON WHEEL */}
                {!showCard && zodiacList.map((z, i) => {
                  const pos = getPosition(i, zodiacList.length, radius);

                  return (
                    <button
                      key={z}
                      onClick={() => setSelected(z)}
                      className={`absolute text-xl transition ${selected === z ? "scale-150 text-yellow-400" : "text-yellow-300"
                        }`}
                      style={{
                        left: `calc(50% + ${pos.x}px)`,
                        top: `calc(50% + ${pos.y}px)`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <img
                        src={zodiacIcons[z]}
                        alt={z}
                        className="w-5 h-5 md:w-6 md:h-6"
                      />
                    </button>
                  );
                })}

              </div>
            </div>

            <button
              onClick={handleGenerate}
              className="border border-[#b7b9a5] px-4 py-2 md:px-5 md:py-4 text-sm md:text-base rounded-full">
              see today's reading
            </button>

          </div>

          <div className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col justify-between items-center p-6 overflow-hidden"
            style={{
              backgroundImage: "url('/BackCard.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}>

            <h1 className="text-2xl font-semibold">
              {selected ? `${capitalize(selected)} Girl ✨` : "Your Result ✨"}
            </h1>

            <div className="flex-1 flex items-center justify-center text-center space-y-3">
              {result && (
                <div>
                  <p>💕 {result.love}</p>
                  <p>🌱 {result.life}</p>
                  <p>🧠 {result.mood}</p>
                  <p>🚫 {result.dont}</p>
                </div>
              )}
            </div>

            <button
              onClick={handleBack}
              className="border border-white x-4 py-2 md:px-5 md:py-4 text-sm md:text-base rounded-full"
            >
              ← back
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}