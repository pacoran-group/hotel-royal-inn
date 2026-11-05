/**
 * ROYAL INN HOTEL - PANCORAN GROUP
 * KONFIGURASI UTAMA
 * -------------------------------------------------------------
 * Data resmi tipe kamar, fasilitas, logo resmi, foto asli, kontak, dan lokasi Royal Inn Hotel.
 */

const hotelConfig = {
  // Informasi Umum Hotel
  hotel: {
    name: "Royal Inn Hotel",
    group: "Pancoran Group",
    logoUrl: "./Logo%20Grand%20Royal.png",
    badge: "Pancoran Group • Clean & Comfortable",
    tagline: "Clean and Comfortable Place to Stay",
    subTagline: "Pilihan menginap terbaik untuk transit perjalanan, urusan bisnis, maupun istirahat keluarga di Gambiran, Banyuwangi. Fasilitas lengkap, kamar bersih, dan pelayanan ramah 24 jam.",
    address: "Jl. Raya Yosomulyo No. 67, Dsn. Krajan 1, Desa Gambiran, Kec. Gambiran, Kab. Banyuwangi, Jawa Timur 68486",
    phone: "+62 812-3309-2237",
    whatsappNumber: "6281233092237", // Nomor WhatsApp aktif Front Desk Royal Inn Hotel
    email: "royalinn.gambiran@gmail.com",
    checkInTime: "14:00 WIB",
    checkOutTime: "12:00 WIB",
    rating: "4.7 / 5.0",
    reviewCount: "500+ Ulasan Tamu",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Jl.+Raya+Yosomulyo+No.+67,+Gambiran,+Banyuwangi&t=&z=15&ie=UTF8&iwloc=&output=embed",
    googleMapsLink: "https://maps.app.goo.gl/wrQA9beSf9cx9Qnk6"
  },

  // Statistik Utama di Hero Section
  stats: [
    { label: "Pilihan Kamar", value: "7 Tipe" },
    { label: "Resepsionis", value: "24 Jam" },
    { label: "Tarif Kamar", value: "Bersahabat" },
    { label: "Grup Terpercaya", value: "Pancoran Group" }
  ],

  // Fasilitas Umum Unggulan Hotel
  facilities: [
    {
      icon: "wifi",
      title: "Wi-Fi Berkecepatan Tinggi",
      description: "Internet stabil gratis di seluruh area hotel dan setiap kamar."
    },
    {
      icon: "clock",
      title: "Resepsionis & Security 24 Jam",
      description: "Layanan check-in dan check-out fleksibel dengan sambutan ramah setiap saat."
    },
    {
      icon: "car",
      title: "Area Parkir Luas & Aman",
      description: "Lahan parkir mobil dan motor yang luas, aman, dan terpantau petugas."
    },
    {
      icon: "sparkles",
      title: "Kebersihan Higienis Terjamin",
      description: "Standar housekeeping teratur, seprai harum, dan kamar bersih terawat."
    },
    {
      icon: "coffee",
      title: "Sarapan Pagi (Breakfast)",
      description: "Tersedia pilihan sarapan lezat (Breakfast 2 Pax) untuk tipe kamar tertentu."
    },
    {
      icon: "tv",
      title: "Smart TV & TV LED",
      description: "Koleksi hiburan berkualitas, akses YouTube, siaran digital jernih di kamar."
    },
    {
      icon: "bath",
      title: "Shower Air Hangat (Water Heater) & Bathtub",
      description: "Mandi air hangat menyegarkan, serta fasilitas Bathtub istimewa di Family Room."
    },
    {
      icon: "map-pin",
      title: "Lokasi Strategis di Tepi Jalan Raya",
      description: "Akses sangat mudah tepat di tepi Jl. Raya Yosomulyo, dekat pusat keramaian & kuliner."
    }
  ],

  // 7 Tipe Kamar Resmi dengan Foto Asli Royal Inn Hotel
  rooms: [
    {
      id: "ekonomi",
      name: "Ekonomi",
      category: "standard",
      badge: "Paling Hemat",
      badgeColor: "bg-emerald-600",
      bed: "Double Bed",
      capacity: "2 Pax / Room",
      size: "16 m²",
      image: "./Ekonomi.jpeg",
      gallery: [
        "./Ekonomi.jpeg"
      ],
      description: "Kamar nyaman dengan Double Bed empuk, pendingin ruangan (AC) dingin, dan TV LED. Pilihan hemat untuk istirahat tenang.",
      highlights: [
        "Double Bed Nyaman",
        "AC (Air Conditioner) Dingin",
        "TV LED Layar Datar",
        "Kapasitas 2 Orang (2 Pax)"
      ],
      amenities: [
        "Double Bed Empuk & Bersih",
        "Pendingin Ruangan (AC)",
        "TV LED Digital",
        "Wi-Fi Gratis Kencang",
        "Kamar Mandi Dalam",
        "Air Mineral Gratis",
        "Stopkontak Samping Ranjang"
      ]
    },
    {
      id: "standart",
      name: "Standart",
      category: "standard",
      badge: "Twin Bed Nyaman",
      badgeColor: "bg-blue-600",
      bed: "Two Bed (Twin Bed)",
      capacity: "2 Pax / Room",
      size: "18 m²",
      image: "./Standard%20Room%20(1).jpeg",
      gallery: [
        "./Standard%20Room%20(1).jpeg",
        "./Standard%20Room%20(2).jpeg"
      ],
      description: "Kamar dengan 2 ranjang terpisah (Two Bed / Twin Bed), pendingin ruangan (AC) sejuk, dan TV LED. Sangat cocok untuk rekan kerja atau sahabat.",
      highlights: [
        "Two Bed (Twin Bed Terpisah)",
        "AC (Air Conditioner)",
        "TV LED",
        "Kapasitas 2 Orang (2 Pax)"
      ],
      amenities: [
        "Two Bed (2 Ranjang Terpisah Bersih)",
        "AC Dingin Terawat",
        "TV LED Layar Datar",
        "Wi-Fi Kecepatan Tinggi",
        "Kamar Mandi Dalam Higienis",
        "Handuk & Perlengkapan Mandi",
        "Air Mineral Botol"
      ]
    },
    {
      id: "superior",
      name: "Superior",
      category: "superior",
      badge: "Hot Water + Amenities",
      badgeColor: "bg-amber-600",
      bed: "Two Bed (Twin Bed)",
      capacity: "2 Pax / Room",
      size: "22 m²",
      image: "./Superior.jpeg",
      gallery: [
        "./Superior.jpeg",
        "./Standard%20Room%20(2).jpeg"
      ],
      description: "Kamar Superior dengan Two Bed, dilengkapi pendingin ruangan (AC), shower air hangat (Hot Water), TV LED, dan paket perlengkapan mandi lengkap (Amenities).",
      highlights: [
        "Two Bed Nyaman",
        "Hot Water (Shower Air Hangat)",
        "AC & TV LED",
        "Paket Amenities Lengkap"
      ],
      amenities: [
        "Two Bed (Ranjang Twin Berkualitas)",
        "Shower Air Hangat (Hot Water)",
        "Pendingin Ruangan (AC)",
        "TV LED Layar Datar",
        "Full Toiletries & Amenities Mandi",
        "Wi-Fi Kencang",
        "Meja & Lemari Pakaian",
        "Air Mineral Gratis"
      ]
    },
    {
      id: "delux-a",
      name: "Delux A",
      category: "deluxe",
      badge: "Big Bed & Smart TV",
      badgeColor: "bg-amber-500",
      bed: "Double Bed (Big Bed)",
      capacity: "2 Pax / Room",
      size: "26 m²",
      image: "./Deluxe%20A%20(1).jpeg",
      gallery: [
        "./Deluxe%20A%20(1).jpeg",
        "./Deluxe%20A%20(2).jpeg"
      ],
      description: "Kamar favorit dengan ranjang Double Bed (Big Bed), Smart TV untuk hiburan YouTube dan streaming, AC sejuk, shower air hangat, dan amenities.",
      highlights: [
        "Double Bed (Big Bed Empuk)",
        "Smart TV (YouTube Ready)",
        "Hot Water (Air Hangat)",
        "AC Dingin & Amenities"
      ],
      amenities: [
        "Double Bed (Big Bed King Size)",
        "Smart TV dengan Akses Aplikasi Streaming",
        "Shower Air Hangat (Hot Water)",
        "AC Dingin Senyap",
        "Amenities Mandi Lengkap",
        "Wi-Fi Dedicated Kencang",
        "Meja Kerja & Cermin Rias",
        "Air Mineral Gratis"
      ]
    },
    {
      id: "delux-b",
      name: "Delux B",
      category: "deluxe",
      badge: "Kettle + Breakfast 2 Pax",
      badgeColor: "bg-indigo-600",
      bed: "Double Bed",
      capacity: "2 Pax / Room",
      size: "28 m²",
      image: "./Deluxe%20B%20(1).jpeg",
      gallery: [
        "./Deluxe%20B%20(1).jpeg",
        "./Deluxe%20B%20(2).jpeg"
      ],
      description: "Kenyamanan ekstra dengan Double Bed, Smart TV, Electric Kettle pembuat kopi/teh, paket sarapan lezat untuk 2 orang, AC, dan shower air hangat.",
      highlights: [
        "Termasuk Breakfast 2 Pax",
        "Double Bed & Smart TV",
        "Electric Kettle (Pemanas Air)",
        "Hot Water & Amenities"
      ],
      amenities: [
        "Double Bed Berkualitas Tinggi",
        "Sarapan Pagi Gratis untuk 2 Pax",
        "Smart TV Layar Datar",
        "Teko Listrik (Electric Kettle) + Kopi/Teh",
        "Shower Air Hangat (Hot Water)",
        "AC Dingin & Segar",
        "Amenities Lengkap & Sandal Kamar",
        "Wi-Fi Kecepatan Tinggi"
      ]
    },
    {
      id: "delux-c",
      name: "Delux C",
      category: "deluxe",
      badge: "Two Bed + Breakfast 2 Pax",
      badgeColor: "bg-purple-600",
      bed: "Two Bed (Twin Bed)",
      capacity: "2 Pax / Room",
      size: "28 m²",
      image: "./Deluxe%20C%20(1).jpeg",
      gallery: [
        "./Deluxe%20C%20(1).jpeg",
        "./Deluxe%20C%20(2).jpeg"
      ],
      description: "Pilihan kamar dengan 2 ranjang terpisah (Two Bed), Smart TV, Electric Kettle, paket sarapan untuk 2 orang, AC dingin, dan shower air hangat.",
      highlights: [
        "Two Bed (2 Ranjang Terpisah Nyaman)",
        "Termasuk Breakfast 2 Pax",
        "Smart TV & Electric Kettle",
        "Hot Water & Amenities"
      ],
      amenities: [
        "Two Bed (2 Ranjang Terpisah Berkualitas)",
        "Sarapan Pagi Gratis untuk 2 Pax",
        "Smart TV Layar Lebar",
        "Electric Kettle + Teh & Kopi Sachet",
        "Hot Water Shower (Air Hangat Lancar)",
        "AC Dingin Sejuk",
        "Amenities Mandi Lengkap",
        "Wi-Fi Kencang"
      ]
    },
    {
      id: "family-room",
      name: "Family Room",
      category: "family",
      badge: "Bathtub + Breakfast 2 Pax",
      badgeColor: "bg-rose-600",
      bed: "Two Bed (Kapasitas 3 Pax)",
      capacity: "3 Pax / Room",
      size: "36 m²",
      image: "./Family%20Room%20(1).jpeg",
      gallery: [
        "./Family%20Room%20(1).jpeg",
        "./Family%20Room%20(2).jpeg"
      ],
      description: "Kamar keluarga berkapasitas 3 orang, dilengkapi Bathtub istimewa untuk relaksasi, shower air hangat, Electric Kettle, paket sarapan untuk 2 orang, AC, dan TV.",
      highlights: [
        "Fasilitas Bathtub Mewah",
        "Termasuk Breakfast 2 Pax",
        "Electric Kettle & Amenities",
        "Kapasitas 3 Orang (3 Pax)"
      ],
      amenities: [
        "Two Bed Luas (Kapasitas 3 Tamu)",
        "Bathtub Istimewa untuk Relaksasi",
        "Shower Air Hangat (Hot Water)",
        "Sarapan Pagi Gratis untuk 2 Pax (Breakfast 2 Pax)",
        "Teko Listrik (Electric Kettle) + Kopi/Teh",
        "AC Dingin & TV Layar Datar",
        "Paket Amenities Mandi Lengkap",
        "Wi-Fi Kencang Tanpa Batas"
      ]
    }
  ],

  // Titik Akses Realistis di Sekitar Gambiran / Yosomulyo
  nearbyPlaces: [
    { name: "Pasar & Pertokoan Jajag", distance: "3 - 5 Menit (Pusat Perbelanjaan & Kuliner)", icon: "shopping-bag" },
    { name: "Minimarket (Indomaret / Alfamart)", distance: "1 - 2 Menit (Jl. Raya Yosomulyo)", icon: "shopping-bag" },
    { name: "Sentra Kuliner Malam Gambiran", distance: "2 Menit (Jalan Kaki / Sekitar Hotel)", icon: "utensils" },
    { name: "SPBU Pertamina Terdekat", distance: "3 Menit (Jl. Raya Yosomulyo)", icon: "car" },
    { name: "Fasilitas Kesehatan / Puskesmas Gambiran", distance: "4 Menit", icon: "sparkles" },
    { name: "Stasiun Kereta Api Kalisetail (Sempu)", distance: "±15 Menit (Akses Kereta Terdekat)", icon: "train" }
  ],

  // Ulasan Tamu
  testimonials: [
    {
      name: "Agus Pramono",
      origin: "Surabaya (Kunjungan Bisnis)",
      rating: 5,
      comment: "Penginapan yang sangat nyaman! Kamar Delux A sangat bersih, Smart TV lancar buat nonton YouTube, air panas lancar dan kasurnya nyaman sekali. Pelayanan staf Pancoran Group sangat memuaskan.",
      stayedRoom: "Delux A"
    },
    {
      name: "Dewi Lestari",
      origin: "Malang (Liburan Keluarga)",
      rating: 5,
      comment: "Menginap di Family Room ada Bathtub-nya! Anak-anak senang banget, sudah dapat sarapan 2 orang dan lokasinya pas di tepi jalan raya mudah dicari. Sangat recommended!",
      stayedRoom: "Family Room"
    },
    {
      name: "Hendrik Setiawan",
      origin: "Jember (Transit Wisata)",
      rating: 5,
      comment: "Kamar Standart Two Bed AC-nya dingin dan suasananya tenang. Parkir luas dan staf resepsionis melayani dengan ramah meski kami tiba larut malam.",
      stayedRoom: "Standart"
    }
  ],

  // Tanya Jawab Umum (FAQ)
  faqs: [
    {
      q: "Jam berapa waktu Check-in dan Check-out di Royal Inn Hotel?",
      a: "Waktu standar Check-in dimulai pukul 14:00 WIB, dan waktu Check-out maksimal pukul 12:00 WIB. Resepsionis kami bertugas 24 jam nonstop."
    },
    {
      q: "Bagaimana cara mengetahui tarif kamar terkini?",
      a: "Karena tarif kamar bersifat dinamis (mengikuti ketersediaan dan periode tanggal), Anda dapat langsung mengklik tombol 'Pesan via WhatsApp' untuk mendapatkan penawaran harga terbaik langsung dari admin."
    },
    {
      q: "Tipe kamar mana saja yang sudah termasuk sarapan (Breakfast)?",
      a: "Sesuai daftar resmi kami, tipe kamar yang sudah termasuk Breakfast 2 Pax adalah: Family Room, Delux B, dan Delux C."
    },
    {
      q: "Tipe kamar mana yang memiliki fasilitas Bathtub?",
      a: "Fasilitas Bathtub khusus tersedia di Family Room untuk relaksasi liburan Anda."
    },
    {
      q: "Apa perbedaan tipe Delux A, Delux B, dan Delux C?",
      a: "Delux A memiliki Double Bed (Big Bed), AC, Hot Water, Smart TV, dan Amenities. Delux B memiliki Double Bed, Smart TV, Hot Water, Electric Kettle, Amenities, dan tambahan Breakfast 2 Pax. Sedangkan Delux C memiliki Two Bed (Twin Bed), Smart TV, Hot Water, Electric Kettle, Amenities, serta Breakfast 2 Pax."
    },
    {
      q: "Di mana alamat persis Royal Inn Hotel?",
      a: "Alamat kami berada di Jl. Raya Yosomulyo No. 67, Dsn. Krajan 1, Desa Gambiran, Kec. Gambiran, Kab. Banyuwangi. Anda dapat melihat lokasi persis di Google Maps melalui tautan: https://maps.app.goo.gl/wrQA9beSf9cx9Qnk6"
    }
  ]
};

// Ekspor untuk browser / node
if (typeof module !== 'undefined' && module.exports) {
  module.exports = hotelConfig;
}
