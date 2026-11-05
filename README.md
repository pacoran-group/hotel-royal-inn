# Landing Page Hotel Royal Inn 🏨
> Landing page modern, elegan, dan berkonversi tinggi untuk **Hotel Royal Inn** (Pancoran Group, Gambiran Banyuwangi). Dilengkapi dengan formulir reservasi interaktif yang langsung terhubung ke WhatsApp Admin, katalog 7 tipe kamar, peta Google Maps, dan ulasan tamu.

---

## 🌟 Fitur Utama

1. **Alur Reservasi Interaktif via WhatsApp**:
   - Tamu memilih tanggal Check-in, Check-out, tipe kamar, jumlah tamu, nama, dan catatan khusus.
   - Sistem otomatis menghitung durasi menginap (jumlah malam) dan estimasi total biaya.
   - Mengirimkan pesan WhatsApp dengan template reservasi yang rapi dan profesional langsung ke Front Desk/Admin.

2. **Katalog Lengkap 7 Tipe Kamar Resmi**:
   - **Ekonomi**: Double Bed, AC, TV LED (2 Pax / Room)
   - **Standart**: Two Bed (Twin Bed), AC, TV LED (2 Pax / Room)
   - **Superior**: Two Bed, AC, Hot Water, TV LED, Full Amenities (2 Pax / Room)
   - **Delux A**: Double Bed (Big Bed), AC, Hot Water, Smart TV, Amenities (2 Pax / Room)
   - **Delux B**: Double Bed, AC, Hot Water, Smart TV, Electric Kettle, Amenities, **Breakfast 2 Pax** (2 Pax / Room)
   - **Delux C**: Two Bed (Twin Bed), AC, Hot Water, Smart TV, Electric Kettle, Amenities, **Breakfast 2 Pax** (2 Pax / Room)
   - **Family Room**: Two Bed, AC, Hot Water, TV LED, Electric Kettle, Amenities, **Breakfast 2 Pax**, **Bathtub** (3 Pax / Room)

3. **Sistem Tarif Dinamis (Tanpa Menampilkan Angka Harga Statis)**:
   - Detail angka harga dihilangkan dari tampilan umum.
   - Tombol reservasi langsung mengarahkan tamu untuk meminta penawaran harga dan ketersediaan terkini via WhatsApp Admin sesuai tanggal menginap yang dipilih.

3. **Filter Kategori Kamar Interaktif**:
   - Memudahkan tamu menyaring tipe kamar: *Semua Kamar*, *Ekonomi*, *Standard & Superior*, *Deluxe Series*, dan *Family*.

4. **Modal Detail Kamar**:
   - Popup interaktif untuk melihat rincian fasilitas lengkap, tipe ranjang, kapasitas tamu, dan ukuran kamar.

5. **Peta Google Maps & Petunjuk Akses Transportasi**:
   - Embed Google Maps interaktif + tautan langsung ke Google Maps resmi (https://maps.app.goo.gl/wrQA9beSf9cx9Qnk6).
   - Akses dekat ke Pasar & Pertokoan Jajag, Minimarket 24 jam, SPBU, Puskesmas Gambiran, dan Stasiun Kalisetail.

6. **Fasilitas Hotel & Tanya Jawab (FAQ)**:
   - Resepsionis & Keamanan 24 jam, Wi-Fi kencang, parkir luas, air panas, dan FAQ accordion.

7. **Tombol Chat WhatsApp Mengambang (Floating Action Button)**:
   - Tombol cepat di pojok kanan bawah dengan efek pulse agar tamu dapat langsung bertanya kapan saja.

---

## 📂 Struktur File

```
Landing Page Hotel Royal Inn/
├── index.html        # Halaman utama landing page (HTML5 + Tailwind CSS)
├── hotelConfig.js    # Pusat data konfigurasi hotel (No WA, harga kamar, foto, dll)
├── main.js           # Logika interaktif (filter, kalkulasi malam & harga, format WA)
└── README.md         # Panduan penggunaan & deployment
```

---

## ⚙️ Cara Mengubah Data Hotel (hotelConfig.js)

Semua data hotel terpusat di dalam file `hotelConfig.js`. Anda tidak perlu mengubah kode HTML yang rumit. Cukup buka `hotelConfig.js` di text editor (Notepad, VS Code, dll):

1. **Nomor WhatsApp**:
   Cari baris `whatsappNumber: "6281233092237"`, ubah dengan nomor WhatsApp aktif hotel (diawali format `62` tanpa tanda `+` atau spasi). Nomor saat ini: **+62 812-3309-2237**.

2. **Alamat & Kontak**:
   Ubah nilai `address`, `phone`, `email`, dan tautan `googleMapsEmbedUrl`.

3. **Harga & Fasilitas Tiap Kamar**:
   Pada bagian `rooms: [...]`, Anda dapat mengubah:
   - `price`: Nilai angka harga per malam (contoh: `360000`)
   - `priceFormatted`: Tampilan teks harga (contoh: `"Rp 360.000"`)
   - `amenities`: Daftar fasilitas di dalam kamar
   - `image`: URL link foto kamar (bisa diganti foto asli hotel Anda)

---

## 🚀 Cara Menjalankan & Membuka Halaman Secara Lokal

Anda tidak memerlukan instalasi Node.js atau server khusus:
1. Cukup klik ganda (double-click) file `index.html` di komputer Anda, atau
2. Klik kanan `index.html` -> **Open with** -> Pilih browser (Chrome, Edge, Firefox).

---

## 🌐 Cara Deploy ke GitHub Pages (Gratis Selamanya)

1. Buat repository baru di [GitHub](https://github.com).
2. Unggah (push / upload) seluruh file di folder ini (`index.html`, `hotelConfig.js`, `main.js`, `README.md`) ke repository tersebut.
3. Di halaman repository GitHub Anda:
   - Klik menu **Settings** -> klik tab **Pages** (di sidebar kiri).
   - Pada bagian **Build and deployment** -> **Branch**, pilih branch `main` (atau `master`) dan folder `/(root)`.
   - Klik **Save**.
4. Dalam 1-2 menit, website Hotel Royal Inn Anda sudah aktif dan online dengan link:
   `https://username-anda.github.io/nama-repo/`

---

## ⚡ Cara Deploy ke Vercel (Gratis & Cepat 1 Klik)

1. Buka [Vercel](https://vercel.com) dan login/daftar (bisa login menggunakan akun GitHub).
2. Klik tombol **"Add New..."** -> **"Project"**.
3. Pilih repository GitHub Anda yang berisi file proyek ini.
4. Klik tombol **Deploy** (tanpa perlu mengubah pengaturan build apa pun, Vercel otomatis mendeteksi file statis).
5. Dalam 10 detik, landing page Anda akan langsung tayang dengan domain gratis dari Vercel (contoh: `hotel-royal-inn.vercel.app`) dan sertifikat SSL/HTTPS aktif otomatis!
