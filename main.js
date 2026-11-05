/**
 * MAIN JAVASCRIPT - HOTEL ROYAL INN (PANCORAN GROUP)
 * Interaktivitas Landing Page, Filter Kamar, Galeri Foto Asli, Modal Reservasi, & WhatsApp Booking
 * (Detail harga dan lantai ditiadakan sesuai instruksi).
 */

document.addEventListener("DOMContentLoaded", () => {
  initHotelInfo();
  initFacilities();
  initRoomCards();
  initFilterButtons();
  initDatePickers();
  initFaqAccordion();
  initTestimonials();
  initNearbyPlaces();
  initMobileMenu();
  initScrollEffects();
});

// 1. Inisialisasi Info Hotel pada Header, Hero, Footer
function initHotelInfo() {
  const { hotel, stats } = hotelConfig;

  document.querySelectorAll(".hotel-name").forEach(el => el.textContent = hotel.name);
  document.querySelectorAll(".hotel-tagline").forEach(el => el.textContent = hotel.tagline);
  document.querySelectorAll(".hotel-subtagline").forEach(el => el.textContent = hotel.subTagline);
  document.querySelectorAll(".hotel-address").forEach(el => el.textContent = hotel.address);
  document.querySelectorAll(".hotel-phone").forEach(el => el.textContent = hotel.phone);
  document.querySelectorAll(".hotel-email").forEach(el => el.textContent = hotel.email);

  // Link WhatsApp langsung
  const waDirectLinks = document.querySelectorAll(".wa-direct-link");
  waDirectLinks.forEach(link => {
    link.href = `https://wa.me/${hotel.whatsappNumber}?text=${encodeURIComponent(`Halo ${hotel.name} (Pancoran Group), saya ingin menanyakan ketersediaan dan tarif kamar terkini.`)}`;
    link.target = "_blank";
  });

  // Google Maps Links & Embed
  const mapsEmbedEl = document.getElementById("maps-iframe");
  if (mapsEmbedEl && hotel.googleMapsEmbedUrl) {
    mapsEmbedEl.src = hotel.googleMapsEmbedUrl;
  }
  const mapsBtn = document.getElementById("maps-external-link");
  if (mapsBtn && hotel.googleMapsLink) {
    mapsBtn.href = hotel.googleMapsLink;
  }

  // Statistik Hero (Rapi, Seimbang, dan Selalu Center)
  const statsContainer = document.getElementById("hero-stats-container");
  if (statsContainer) {
    statsContainer.innerHTML = stats.map(s => {
      const isLong = s.value.length > 8;
      const fontSizeClass = isLong 
        ? "text-base sm:text-lg font-extrabold" 
        : "text-xl sm:text-2xl lg:text-3xl font-black";
      
      return `
        <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center text-center transform transition duration-300 hover:scale-105 min-h-[96px] shadow-sm">
          <p class="${fontSizeClass} text-amber-300 leading-tight text-center w-full flex items-center justify-center truncate">
            ${s.value}
          </p>
          <p class="text-xs text-stone-200 mt-1.5 text-center w-full font-medium">
            ${s.label}
          </p>
        </div>
      `;
    }).join("");
  }
}

// 2. Render Fasilitas Hotel
function initFacilities() {
  const container = document.getElementById("facilities-grid");
  if (!container) return;

  const iconSvgMap = {
    "shield": `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>`,
    "clock": `<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>`,
    "car": `<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle>`,
    "sparkles": `<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>`,
    "coffee": `<path d="M10 2v2"></path><path d="M14 2v2"></path><path d="M6 2v2"></path><path d="M18 8a3 3 0 0 1 3 3v1a4 4 0 0 1-4 4h-1"></path><path d="M4 8h12a2 2 0 0 1 2 2v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8z"></path><line x1="2" y1="22" x2="22" y2="22"></line>`,
    "tv": `<rect width="20" height="15" x="2" y="7" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>`,
    "bath": `<path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.6 3 4 3.6 4 4.5V11h16V4.5c0-.9-.6-1.5-1.5-1.5a1.5 1.5 0 0 0-1 .5L15 6"></path><path d="M4 11v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5v-6"></path>`,
    "map-pin": `<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle>`
  };

  container.innerHTML = hotelConfig.facilities.map(fac => `
    <div class="bg-amber-50/50 hover:bg-white border border-amber-100/80 hover:border-amber-300 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
      <div class="w-14 h-14 rounded-xl bg-amber-600/10 text-amber-700 flex items-center justify-center mb-5 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          ${iconSvgMap[fac.icon] || iconSvgMap['shield']}
        </svg>
      </div>
      <h3 class="text-lg font-bold text-stone-900 group-hover:text-amber-700 transition-colors">${fac.title}</h3>
      <p class="text-sm text-stone-600 mt-2 leading-relaxed">${fac.description}</p>
    </div>
  `).join("");
}

// 3. Render Kartu Kamar (7 Tipe Kamar Resmi Tanpa Harga & Tanpa Lantai)
function initRoomCards() {
  const container = document.getElementById("rooms-grid");
  if (!container) return;

  container.innerHTML = hotelConfig.rooms.map(room => `
    <div class="room-card group bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col hover:-translate-y-1.5" data-category="${room.category}">
      
      <!-- Foto Kamar Asli -->
      <div class="relative h-64 overflow-hidden bg-stone-900 cursor-pointer" onclick="openRoomDetailModal('${room.id}')">
        <img src="${room.image}" alt="${room.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
        
        <div class="absolute top-4 left-4 flex flex-wrap gap-2">
          <span class="${room.badgeColor || 'bg-amber-600'} text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md backdrop-blur-sm">
            ${room.badge}
          </span>
        </div>

        <div class="absolute top-4 right-4 flex items-center gap-1.5">
          ${room.gallery && room.gallery.length > 1 ? `
            <span class="bg-black/60 text-stone-200 border border-white/20 text-xs font-medium px-2.5 py-1 rounded-lg backdrop-blur-md flex items-center gap-1">
              📷 ${room.gallery.length} Foto
            </span>
          ` : ''}
        </div>

        <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
          <span class="text-xs bg-amber-400/20 text-amber-300 font-semibold px-2.5 py-1 rounded-lg border border-amber-300/30 backdrop-blur-md">
            Tarif WhatsApp
          </span>
          <span class="text-xs bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20 text-stone-200">
            ${room.size}
          </span>
        </div>
      </div>

      <!-- Konten Kamar -->
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-start justify-between gap-2 mb-2">
            <h3 class="text-2xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors">${room.name}</h3>
          </div>
          
          <p class="text-stone-600 text-sm line-clamp-2 mb-4 leading-relaxed">${room.description}</p>

          <!-- Spesifikasi Ranjang & Kapasitas -->
          <div class="grid grid-cols-2 gap-2 text-xs text-stone-700 mb-5 pb-4 border-b border-stone-100">
            <div class="flex items-center gap-2 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-600 shrink-0"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>
              <span class="font-semibold truncate">${room.bed}</span>
            </div>
            <div class="flex items-center gap-2 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-600 shrink-0"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <span class="font-semibold">${room.capacity}</span>
            </div>
          </div>

          <!-- Highlight Fasilitas Kamar -->
          <div class="space-y-2 mb-6">
            <span class="text-xs font-semibold text-stone-400 uppercase tracking-wider block">Fasilitas Kamar:</span>
            <div class="grid grid-cols-1 gap-1.5 text-xs text-stone-700">
              ${room.highlights.map(h => `
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-600 shrink-0"><path d="M20 6 9 17l-5-5"/></svg>
                  <span class="font-medium">${h}</span>
                </div>
              `).join("")}
            </div>
          </div>
        </div>

        <!-- Tombol Aksi -->
        <div class="grid grid-cols-2 gap-3 pt-2">
          <button onclick="openRoomDetailModal('${room.id}')" class="w-full text-center py-2.5 px-3 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-100 hover:text-stone-900 text-sm font-semibold transition-colors duration-200">
            Detail Kamar
          </button>
          <button onclick="openReservationModal('${room.id}')" class="w-full text-center py-2.5 px-3 rounded-xl bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-1.5">
            <span>Pesan</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
        </div>

      </div>
    </div>
  `).join("");
}

// 4. Filter Tombol Kategori
function initFilterButtons() {
  const filterBtns = document.querySelectorAll(".room-filter-btn");
  const roomCards = document.querySelectorAll(".room-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetFilter = btn.getAttribute("data-filter");

      filterBtns.forEach(b => {
        b.classList.remove("bg-amber-700", "text-white", "shadow-md");
        b.classList.add("bg-stone-100", "text-stone-700", "hover:bg-stone-200");
      });

      btn.classList.add("bg-amber-700", "text-white", "shadow-md");
      btn.classList.remove("bg-stone-100", "text-stone-700", "hover:bg-stone-200");

      roomCards.forEach(card => {
        const cardCat = card.getAttribute("data-category");

        let show = false;
        if (targetFilter === "all") {
          show = true;
        } else if (targetFilter === cardCat) {
          show = true;
        }

        if (show) {
          card.classList.remove("hidden");
          card.classList.add("flex");
        } else {
          card.classList.add("hidden");
          card.classList.remove("flex");
        }
      });
    });
  });
}

// 5. Inisialisasi Tanggal Check-in & Check-out Default
function initDatePickers() {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const formatDate = (date) => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const checkInHero = document.getElementById("hero-checkin");
  const checkOutHero = document.getElementById("hero-checkout");
  const checkInModal = document.getElementById("modal-checkin");
  const checkOutModal = document.getElementById("modal-checkout");

  const minDateStr = formatDate(today);
  const nextDateStr = formatDate(tomorrow);

  if (checkInHero) {
    checkInHero.min = minDateStr;
    checkInHero.value = minDateStr;
    checkInHero.addEventListener("change", () => {
      const selected = new Date(checkInHero.value);
      selected.setDate(selected.getDate() + 1);
      checkOutHero.min = formatDate(selected);
      if (new Date(checkOutHero.value) <= new Date(checkInHero.value)) {
        checkOutHero.value = formatDate(selected);
      }
    });
  }

  if (checkOutHero) {
    checkOutHero.min = nextDateStr;
    checkOutHero.value = nextDateStr;
  }

  if (checkInModal) {
    checkInModal.min = minDateStr;
    checkInModal.value = minDateStr;
    checkInModal.addEventListener("change", () => {
      const selected = new Date(checkInModal.value);
      selected.setDate(selected.getDate() + 1);
      checkOutModal.min = formatDate(selected);
      if (new Date(checkOutModal.value) <= new Date(checkInModal.value)) {
        checkOutModal.value = formatDate(selected);
      }
      calculateReservationSummary();
    });
  }

  if (checkOutModal) {
    checkOutModal.min = nextDateStr;
    checkOutModal.value = nextDateStr;
    checkOutModal.addEventListener("change", calculateReservationSummary);
  }

  populateRoomSelects();
}

function populateRoomSelects() {
  const heroSelect = document.getElementById("hero-roomtype");
  const modalSelect = document.getElementById("modal-roomtype");

  const options = hotelConfig.rooms.map(r => `
    <option value="${r.id}">${r.name} - ${r.bed} (${r.capacity})</option>
  `).join("");

  if (heroSelect) heroSelect.innerHTML = options;
  if (modalSelect) {
    modalSelect.innerHTML = options;
    modalSelect.addEventListener("change", calculateReservationSummary);
  }
}

// 6. Modal Detail Kamar dengan Galeri Foto Interaktif
window.openRoomDetailModal = function(roomId) {
  const room = hotelConfig.rooms.find(r => r.id === roomId);
  if (!room) return;

  const modal = document.getElementById("room-detail-modal");
  const content = document.getElementById("room-detail-content");

  const galleryImages = room.gallery && room.gallery.length > 0 ? room.gallery : [room.image];

  content.innerHTML = `
    <!-- Main Photo Container -->
    <div class="relative h-72 sm:h-96 bg-stone-900">
      <img id="detail-main-img" src="${galleryImages[0]}" alt="${room.name}" class="w-full h-full object-cover transition-opacity duration-300">
      <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
      
      <button onclick="closeRoomDetailModal()" class="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors z-10" aria-label="Tutup">
        ✕
      </button>

      <div class="absolute bottom-6 left-6 right-6 text-white">
        <div class="flex items-center gap-2 mb-2">
          <span class="${room.badgeColor || 'bg-amber-600'} text-xs font-semibold px-3 py-1 rounded-full inline-block">
            ${room.badge}
          </span>
        </div>
        <h2 class="text-3xl font-extrabold">${room.name}</h2>
        <p class="text-amber-300 text-xs sm:text-sm font-semibold mt-1">Konfirmasi Tarif & Ketersediaan via WhatsApp Admin</p>
      </div>
    </div>

    <!-- Thumbnail Galeri Jika Lebih dari 1 Foto -->
    ${galleryImages.length > 1 ? `
      <div class="bg-stone-900 px-6 py-3 flex items-center gap-3 border-t border-stone-800 overflow-x-auto">
        <span class="text-xs text-stone-400 font-semibold shrink-0">Foto Kamar:</span>
        ${galleryImages.map((img, idx) => `
          <button onclick="switchDetailPhoto('${img}', this)" class="detail-thumb-btn w-16 h-12 rounded-lg overflow-hidden border-2 ${idx === 0 ? 'border-amber-400 scale-105' : 'border-transparent opacity-70'} hover:opacity-100 transition-all shrink-0">
            <img src="${img}" alt="Thumbnail ${idx + 1}" class="w-full h-full object-cover">
          </button>
        `).join("")}
      </div>
    ` : ''}

    <div class="p-6 sm:p-8 space-y-6 max-h-[55vh] overflow-y-auto">
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">Deskripsi Kamar</h4>
        <p class="text-stone-700 text-sm sm:text-base leading-relaxed">${room.description}</p>
      </div>

      <div class="grid grid-cols-3 gap-3 py-4 border-y border-stone-200 text-center">
        <div class="bg-amber-50/60 p-3 rounded-xl border border-amber-100">
          <span class="text-xs text-stone-500 block">Tipe Ranjang</span>
          <span class="font-bold text-stone-800 text-xs sm:text-sm mt-0.5 block">${room.bed}</span>
        </div>
        <div class="bg-amber-50/60 p-3 rounded-xl border border-amber-100">
          <span class="text-xs text-stone-500 block">Kapasitas Tamu</span>
          <span class="font-bold text-stone-800 text-xs sm:text-sm mt-0.5 block">${room.capacity}</span>
        </div>
        <div class="bg-amber-50/60 p-3 rounded-xl border border-amber-100">
          <span class="text-xs text-stone-500 block">Ukuran Ruang</span>
          <span class="font-bold text-stone-800 text-xs sm:text-sm mt-0.5 block">${room.size}</span>
        </div>
      </div>

      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">Fasilitas Lengkap Kamar Ini</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-stone-700">
          ${room.amenities.map(a => `
            <div class="flex items-start gap-2.5 bg-stone-50 p-2.5 rounded-lg border border-stone-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-600 shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"/></svg>
              <span>${a}</span>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="pt-4 flex flex-col sm:flex-row gap-3">
        <button onclick="closeRoomDetailModal(); openReservationModal('${room.id}')" class="flex-1 py-3.5 px-6 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-base shadow-lg transition-all text-center flex items-center justify-center gap-2">
          <span>Pesan Kamar ${room.name} Sekarang</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
};

// Ganti foto di modal detail saat klik thumbnail
window.switchDetailPhoto = function(imgSrc, btnEl) {
  const mainImg = document.getElementById("detail-main-img");
  if (mainImg) {
    mainImg.style.opacity = "0.5";
    setTimeout(() => {
      mainImg.src = imgSrc;
      mainImg.style.opacity = "1";
    }, 150);
  }

  document.querySelectorAll(".detail-thumb-btn").forEach(btn => {
    btn.classList.remove("border-amber-400", "scale-105");
    btn.classList.add("border-transparent", "opacity-70");
  });

  if (btnEl) {
    btnEl.classList.add("border-amber-400", "scale-105");
    btnEl.classList.remove("border-transparent", "opacity-70");
  }
};

window.closeRoomDetailModal = function() {
  const modal = document.getElementById("room-detail-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
};

// 7. Modal Reservasi WhatsApp Interaktif
window.openReservationModal = function(selectedRoomId = null) {
  const modal = document.getElementById("reservation-modal");
  const modalSelect = document.getElementById("modal-roomtype");

  if (selectedRoomId && modalSelect) {
    modalSelect.value = selectedRoomId;
  }

  calculateReservationSummary();

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
};

window.closeReservationModal = function() {
  const modal = document.getElementById("reservation-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
};

// Hitung durasi menginap
function calculateReservationSummary() {
  const checkInVal = document.getElementById("modal-checkin")?.value;
  const checkOutVal = document.getElementById("modal-checkout")?.value;

  const summaryDuration = document.getElementById("summary-duration");

  if (!checkInVal || !checkOutVal) return;

  const d1 = new Date(checkInVal);
  const d2 = new Date(checkOutVal);
  const diffTime = d2.getTime() - d1.getTime();
  let nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  if (nights < 1) nights = 1;

  if (summaryDuration) summaryDuration.textContent = `${nights} Malam`;
}

// Submit Form Reservasi ke WhatsApp (Tanpa Angka Harga, Menanyakan Tarif Terkini)
window.submitReservationToWhatsApp = function(event) {
  event.preventDefault();

  const name = document.getElementById("guest-name")?.value.trim() || "-";
  const phone = document.getElementById("guest-phone")?.value.trim() || "-";
  const checkIn = document.getElementById("modal-checkin")?.value;
  const checkOut = document.getElementById("modal-checkout")?.value;
  const roomId = document.getElementById("modal-roomtype")?.value;
  const guests = document.getElementById("modal-guests")?.value || "2 Pax / Room";
  const note = document.getElementById("guest-note")?.value.trim() || "Tidak ada catatan";

  const room = hotelConfig.rooms.find(r => r.id === roomId) || hotelConfig.rooms[0];

  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);
  const diffTime = d2.getTime() - d1.getTime();
  let nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  if (nights < 1) nights = 1;

  const message = 
`Halo Resepsionis *${hotelConfig.hotel.name} (Pancoran Group)*, saya ingin menanyakan ketersediaan dan tarif kamar terkini dengan rincian berikut:

🏨 *RENCANA RESERVASI KAMAR*
• *Nama Pemesan:* ${name}
• *No. WhatsApp / HP:* ${phone}
• *Tipe Kamar:* ${room.name}
• *Tipe Ranjang:* ${room.bed}
• *Kapasitas:* ${room.capacity}
• *Tanggal Check-in:* ${checkIn} (14:00 WIB)
• *Tanggal Check-out:* ${checkOut} (12:00 WIB)
• *Durasi Menginap:* ${nights} Malam
• *Jumlah Tamu:* ${guests}

📝 *Catatan Tambahan:*
${note}

Mohon informasi ketersediaan kamar dan total tarif terkini untuk tanggal tersebut. Terima kasih!`;

  const waUrl = `https://wa.me/${hotelConfig.hotel.whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(waUrl, "_blank");
  closeReservationModal();
};

// 8. Handler Form Hero Cepat
window.handleHeroQuickBook = function(event) {
  event.preventDefault();
  const checkIn = document.getElementById("hero-checkin")?.value;
  const checkOut = document.getElementById("hero-checkout")?.value;
  const roomType = document.getElementById("hero-roomtype")?.value;
  const guests = document.getElementById("hero-guests")?.value;

  const modalCheckIn = document.getElementById("modal-checkin");
  const modalCheckOut = document.getElementById("modal-checkout");
  const modalGuests = document.getElementById("modal-guests");

  if (modalCheckIn && checkIn) modalCheckIn.value = checkIn;
  if (modalCheckOut && checkOut) modalCheckOut.value = checkOut;
  if (modalGuests && guests) modalGuests.value = guests;

  openReservationModal(roomType);
};

// 9. FAQ Accordion
function initFaqAccordion() {
  const container = document.getElementById("faq-accordion");
  if (!container) return;

  container.innerHTML = hotelConfig.faqs.map((faq, index) => `
    <div class="border border-stone-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-200">
      <button onclick="toggleFaq(${index})" class="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-stone-800 hover:text-amber-700 transition-colors">
        <span class="text-base sm:text-lg pr-4">${faq.q}</span>
        <span id="faq-icon-${index}" class="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 shrink-0 transform transition-transform duration-300">
          ＋
        </span>
      </button>
      <div id="faq-ans-${index}" class="hidden px-5 sm:px-6 pb-6 text-sm sm:text-base text-stone-600 leading-relaxed border-t border-stone-100 pt-4 bg-stone-50/50">
        ${faq.a}
      </div>
    </div>
  `).join("");
}

window.toggleFaq = function(index) {
  const ans = document.getElementById(`faq-ans-${index}`);
  const icon = document.getElementById(`faq-icon-${index}`);

  if (ans.classList.contains("hidden")) {
    ans.classList.remove("hidden");
    icon.textContent = "－";
    icon.classList.add("bg-amber-100", "text-amber-800");
  } else {
    ans.classList.add("hidden");
    icon.textContent = "＋";
    icon.classList.remove("bg-amber-100", "text-amber-800");
  }
};

// 10. Testimoni Tamu
function initTestimonials() {
  const container = document.getElementById("testimonials-container");
  if (!container) return;

  container.innerHTML = hotelConfig.testimonials.map(t => `
    <div class="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div>
        <div class="flex text-amber-500 mb-4">
          ${"★".repeat(t.rating)}
        </div>
        <p class="text-stone-700 italic text-sm sm:text-base leading-relaxed mb-6">"${t.comment}"</p>
      </div>
      <div class="pt-4 border-t border-stone-100 flex items-center justify-between">
        <div>
          <h4 class="font-bold text-stone-900">${t.name}</h4>
          <p class="text-xs text-stone-500">${t.origin}</p>
        </div>
        <span class="text-xs bg-amber-50 text-amber-800 font-medium px-2.5 py-1 rounded-md border border-amber-200">
          ${t.stayedRoom}
        </span>
      </div>
    </div>
  `).join("");
}

// 11. Tempat Terdekat / Akses Transportasi Gambiran Banyuwangi
function initNearbyPlaces() {
  const container = document.getElementById("nearby-grid");
  if (!container) return;

  container.innerHTML = hotelConfig.nearbyPlaces.map(place => `
    <div class="flex items-center gap-3.5 p-3.5 bg-stone-50 rounded-xl border border-stone-200/70">
      <div class="w-10 h-10 rounded-lg bg-amber-600/10 text-amber-700 flex items-center justify-center font-bold text-base shrink-0">
        📍
      </div>
      <div>
        <p class="font-bold text-stone-800 text-sm">${place.name}</p>
        <p class="text-xs text-stone-500 mt-0.5">${place.distance}</p>
      </div>
    </div>
  `).join("");
}

// 12. Mobile Menu Toggle
function initMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileNav = document.getElementById("mobile-nav");
  const navLinks = document.querySelectorAll(".mobile-nav-link");

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("hidden");
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileNav.classList.add("hidden");
      });
    });
  }
}

// 13. Sticky Nav Effect
function initScrollEffects() {
  const navbar = document.getElementById("main-navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar?.classList.add("shadow-md", "bg-white/95");
      navbar?.classList.remove("bg-white/80");
    } else {
      navbar?.classList.remove("shadow-md", "bg-white/95");
      navbar?.classList.add("bg-white/80");
    }
  });
}
