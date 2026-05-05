"use client";
import { useState } from "react";
import { Pixelify_Sans } from 'next/font/google'

const zodiacList = [
  "aries","taurus","gemini","cancer","leo","virgo",
  "libra","scorpio","sagittarius","capricorn","aquarius","pisces"
];

const zodiacIcons = {
  aries: "♈",
  taurus: "♉",
  gemini: "♊",
  cancer: "♋",
  leo: "♌",
  virgo: "♍",
  libra: "♎",
  scorpio: "♏",
  sagittarius: "♐",
  capricorn: "♑",
  aquarius: "♒",
  pisces: "♓",
};

const zodiacData = {
  aries: {
    love: [
      "jangan buru-buru ambil keputusan ya 😭",
      "dia butuh waktu, bukan berarti ga sayang",
      "coba lebih sabar dikit hari ini"
    ],
    life: [
      "energi kamu lagi tinggi, manfaatin!",
      "jangan semuanya dikerjain sendiri",
      "fokus ke yang penting dulu"
    ],
    mood: [
      "semangat tapi gampang kesel",
      "aktif tapi capek juga",
      "ready to fight 😭"
    ],
    dont: [
      "jangan marah-marah dulu",
      "jangan overreact"
    ]
  },

  taurus: {
    love: [
      "kamu butuh kepastian ya hari ini 🥺",
      "jangan terlalu posesif ya",
      "tenang, semuanya aman kok"
    ],
    life: [
      "hari ini cocok buat santai",
      "jangan terlalu keras sama diri sendiri",
      "slow progress is still progress"
    ],
    mood: [
      "mager tapi pengen produktif",
      "butuh comfort food",
      "tenang tapi keras kepala 😭"
    ],
    dont: [
      "jangan boros ya hari ini",
      "jangan terlalu zona nyaman"
    ]
  },

  gemini: {
    love: [
      "perasaan kamu lagi campur aduk 😭",
      "jangan kasih harapan ke banyak orang ya",
      "coba jujur sama perasaan sendiri"
    ],
    life: [
      "banyak ide, tapi pilih satu dulu",
      "fokus itu penting!",
      "jangan kebanyakan mikir"
    ],
    mood: [
      "random banget",
      "happy tapi tiba-tiba overthink",
      "chaotic energy 🤡"
    ],
    dont: [
      "jangan ghosting orang",
      "jangan terlalu plin-plan"
    ]
  },

  cancer: {
    love: [
      "kamu lagi sensitif banget hari ini 🥺",
      "jangan dipendem sendiri ya",
      "dia ga bermaksud nyakitin kok"
    ],
    life: [
      "take care of yourself dulu",
      "ga semua harus kamu tanggung",
      "rest is important"
    ],
    mood: [
      "melow seharian",
      "butuh pelukan 😭",
      "emotional tapi hangat"
    ],
    dont: [
      "jangan overthinking malem ini",
      "jangan nangis sendirian"
    ]
  },

  leo: {
    love: [
      "kamu lagi charming banget hari ini ✨",
      "dia notice kamu kok 😉",
      "percaya diri aja!"
    ],
    life: [
      "waktunya kamu shine",
      "ambil kesempatan itu",
      "jangan takut tampil"
    ],
    mood: [
      "main character energy 💅",
      "percaya diri maksimal",
      "butuh perhatian 😭"
    ],
    dont: [
      "jangan egois ya",
      "jangan butuh validasi terus"
    ]
  },

  virgo: {
    love: [
      "jangan terlalu perfeksionis ya",
      "ga semua harus sempurna",
      "dia suka kamu apa adanya kok"
    ],
    life: [
      "rapihin hidup kamu dikit hari ini",
      "produktif itu bagus, tapi istirahat juga",
      "jangan overwork"
    ],
    mood: [
      "rapi tapi overthinking",
      "niat tapi capek",
      "butuh kontrol 😭"
    ],
    dont: [
      "jangan over-analyze semuanya",
      "jangan terlalu keras sama diri sendiri"
    ]
  },

  libra: {
    love: [
      "kamu lagi butuh balance 🥺",
      "jangan terlalu ngejar dia",
      "cinta itu dua arah ya"
    ],
    life: [
      "ambil keputusan hari ini",
      "jangan terlalu lama mikir",
      "balance itu penting"
    ],
    mood: [
      "bingung milih 😭",
      "tenang tapi ragu",
      "butuh validasi"
    ],
    dont: [
      "jangan people pleasing terus",
      "jangan takut nolak"
    ]
  },

  scorpio: {
    love: [
      "perasaan kamu dalam banget hari ini 😭",
      "jangan dipendam terus",
      "coba lebih terbuka"
    ],
    life: [
      "trust your intuition",
      "kamu tau apa yang terbaik",
      "jangan ragu sama diri sendiri"
    ],
    mood: [
      "misterius",
      "intense banget",
      "silent but deadly 😭"
    ],
    dont: [
      "jangan terlalu curiga",
      "jangan overthinking berlebihan"
    ]
  },

  sagittarius: {
    love: [
      "kamu lagi butuh kebebasan",
      "jangan ngerasa terikat",
      "cinta ga harus ngekang"
    ],
    life: [
      "explore sesuatu baru!",
      "hari ini cocok buat jalan",
      "jangan diem aja"
    ],
    mood: [
      "happy tapi restless",
      "pengen pergi jauh 😭",
      "fun energy"
    ],
    dont: [
      "jangan kabur dari masalah",
      "jangan terlalu impulsif"
    ]
  },

  capricorn: {
    love: [
      "kamu serius banget soal perasaan",
      "jangan terlalu dingin ya",
      "coba lebih ekspresif"
    ],
    life: [
      "kerja bagus!",
      "progress kamu keliatan",
      "keep going 💪"
    ],
    mood: [
      "fokus",
      "ambis mode on",
      "capek tapi lanjut 😭"
    ],
    dont: [
      "jangan kerja terus",
      "jangan lupa istirahat"
    ]
  },

  aquarius: {
    love: [
      "kamu beda dari yang lain 😉",
      "jangan terlalu cuek ya",
      "dia butuh kepastian"
    ],
    life: [
      "ide kamu keren banget",
      "coba realisasikan!",
      "think outside the box"
    ],
    mood: [
      "random genius",
      "dingin tapi peduli",
      "unik 😭"
    ],
    dont: [
      "jangan terlalu detached",
      "jangan kabur dari emosi"
    ]
  },

  pisces: {
    love: [
      "jangan overthink ya 😭",
      "dia cuma lagi sibuk kok",
      "kamu terlalu mikir jauh"
    ],
    life: [
      "hari ini slow aja",
      "ikutin flow",
      "jangan terlalu dipaksain"
    ],
    mood: [
      "galau + ngantuk",
      "butuh me time",
      "sensitif 🥺"
    ],
    dont: [
      "jangan chat mantan",
      "jangan terlalu baper"
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

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <img
            src="/background.png"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ imageRendering: "pixelated", zIndex: 0 }}
        />

        <div className="perspective">
            
        </div>
        <div className="relative z-10 w-[350px] md:w-[400px] aspect-[3/4] flex flex-col items-center justify-center p-6"
            style={{
            backgroundImage: "url('/card.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
        <h5 className={`text-xl font-semibold mb-15 ${pixel.className}`}>Today’s Zodiac Message</h5>
    
        <div className="perspective w-[320px] h-[320px]">

        <div className={`relative w-full h-full duration-700 transform-style ${showCard ? "rotate-y-180" : ""}`}>

          {/* FRONT (WHEEL) */}
          <div className="absolute w-full h-full backface-hidden flex items-center justify-center">
            
            <p className="text-yellow-400 text-lg">
              {selected ? 
              <img
                src={`/${selected}.png`}
                alt={selected}
                className="pixel w-40 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]"
                />
                : "Pick your zodiac"}
            </p>

          </div>

          {/* BACK (RESULT) */}
           <div className={`absolute w-full h-full backface-hidden rotate-y-180 text-white p-4 rounded-xl flex flex-col justify-center  ${pixel.className}`}
           style={{
            backgroundImage: "url('/card.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"}}>
            
              {result && (
              <>
                <p>💕 {result.love}</p>
                <p>🌱 {result.life}</p>
                <p>🧠 {result.mood}</p>
                <p>🚫 {result.dont}</p>
              </>
            )}
            </div>

        </div>
      

      {/* ✅ HIDE WHEEL SAAT FLIP */}
        {!showCard && (
          <>
            {zodiacList.map((z, i) => {
              const pos = getPosition(i, zodiacList.length, 155);

              return (
                <button
                  key={z}
                  onClick={() => setSelected(z)}
                  className={`absolute text-xl transition ${
                    selected === z ? "scale-150 text-yellow-400" : "text-yellow-300"
                  }`}
                  style={{
                    left: `calc(50% + ${pos.x}px)`,
                    top: `calc(50% + ${pos.y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {zodiacIcons[z]}
                </button>
              );
            })}
          </>
        )}

      </div>

      {/* BUTTON */}
      {!showCard ? (
        <button
          onClick={handleGenerate}
          disabled={!selected}
          className={`relative z-10 mt-13 border border-[#b7b9a5] px-5 py-2 rounded-full ${pixel.className}`}
        >
          Check Your Sign
        </button>
      ) : (
        <button
          onClick={handleBack}
          className={`relative z-10 mt-13 border border-white px-5 py-2 rounded-full ${pixel.className}`}
        >
          ← back
        </button>
      )}
      </div>

    </main>
  );
}