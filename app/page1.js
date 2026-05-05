"use client";
import { useState } from "react";

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

const zodiacList = Object.keys(zodiacData);

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const today = new Date().toLocaleDateString("id-ID", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function Home() {
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);

  const handleGenerate = () => {
    const data = zodiacData[selected];
    setResult({
      love: getRandom(data.love),
      life: getRandom(data.life),
      mood: getRandom(data.mood),
      dont: getRandom(data.dont),
    });
  };

  return (
    <main className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-semibold mb-4">
        ✨ Today’s Zodiac Reading
      </h1>
      <p className="text-sm text-gray-500 mb-2">{today}</p>
      <select
        className="p-3 rounded-xl border mb-4 bg-[#1a1a1a]"
        onChange={(e) => setSelected(e.target.value)}
      >
        <option value="">Zodiak kamu babe</option>
        {zodiacList.map((z) => (
          <option key={z} value={z}>
            {z}
          </option>
        ))}
      </select>

      <button
        onClick={handleGenerate}
        disabled={!selected}
        className="bg-black text-white px-4 py-2 rounded-xl mb-6"
      >
        see today’s reading ✨
      </button>

      {result && (
        <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow w-full max-w-sm space-y-3">
          <p><b>💕 Love:</b> {result.love}</p>
          <p><b>🌱 Life:</b> {result.life}</p>
          <p><b>🧠 Mood:</b> {result.mood}</p>
          <p className="text-red-500"><b>🚫 Don’t:</b> {result.dont}</p>
        </div>
      )}
    </main>
  );
}