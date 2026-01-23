/* router.js */
import { Home, PesanTiket, JadwalKereta, Pembayaran, Riwayat, TentangKami } from './components.js';

const routes = {
    "/": { title: "Beranda", render: Home },
    "/index.html": { title: "Beranda", render: Home }, // Tambahkan ini agar aman jika dibuka lewat file
    "/pesan-tiket": { title: "Pesan Tiket", render: PesanTiket },
    "/jadwal-kereta": { title: "Jadwal Kereta", render: JadwalKereta },
    "/pembayaran": { title: "Pembayaran", render: Pembayaran },
    "/riwayat": { title: "Riwayat", render: Riwayat },
    "/tentang-kami": { title: "Tentang Kami", render: TentangKami }
};

// PENJELASAN: Fungsi baru untuk menangani logika khusus setelah HTML dirender
const initPageLogic = (path) => {
    // Logika Halaman Riwayat
    if (path === "/riwayat") {
        const listContainer = document.getElementById("riwayat-list");
        if (!listContainer) return;

        const data = JSON.parse(localStorage.getItem("riwayat")) || [];

        if (data.length === 0) {
            listContainer.innerHTML = "<p style='text-align:center; color:#777;'>Belum ada riwayat pemesanan.</p>";
        } else {
            listContainer.innerHTML = data.map((tiket, index) => `
                <div style="border: 1px solid #ddd; padding: 15px; border-radius: 10px; margin-bottom: 15px; background: #fff;">
                    <h3 style="margin: 0; color: #0d47a1;">${tiket.asal} → ${tiket.tujuan}</h3>
                    <p style="margin: 5px 0;"><strong>Tanggal:</strong> ${tiket.tanggal} | <strong>Kelas:</strong> ${tiket.kelas}</p>
                    <p style="margin: 5px 0;"><strong>Penumpang:</strong> ${tiket.jumlah}</p>
                    <button class="btn-hapus" data-index="${index}" style="background:#e53935; color:white; border:none; padding: 5px 10px; border-radius: 5px; cursor:pointer; margin-top:10px;">Hapus</button>
                </div>
            `).join("");

            document.querySelectorAll(".btn-hapus").forEach(btn => {
                btn.onclick = (e) => {
                    const idx = e.target.getAttribute("data-index");
                    data.splice(idx, 1);
                    localStorage.setItem("riwayat", JSON.stringify(data));
                    initPageLogic("/riwayat");
                };
            });
        }
    }

    // Logika Form Pesan Tiket
    if (path === "/pesan-tiket") {
        const form = document.getElementById("form-tiket");
        if (form) {
            form.onsubmit = (e) => {
                e.preventDefault();
                const tiket = {
                    asal: document.getElementById("asal").value,
                    tujuan: document.getElementById("tujuan").value,
                    tanggal: document.getElementById("tanggal").value,
                    kelas: document.getElementById("kelas").value,
                    jumlah: document.getElementById("jumlah").value
                };
                const riwayat = JSON.parse(localStorage.getItem("riwayat")) || [];
                riwayat.push(tiket);
                localStorage.setItem("riwayat", JSON.stringify(riwayat));
                
                const notif = document.getElementById("notif");
                if (notif) notif.innerHTML = "<span style='color:green; font-weight:bold;'>✅ Tiket berhasil disimpan ke riwayat!</span>";
                form.reset();
            };
        }
    }
};

const updateActiveLink = () => {
    const path = window.location.pathname;
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === path) link.classList.add("active");
    });
};

const router = () => {
    let path = window.location.pathname;
    
    // PENJELASAN: Normalisasi path agar tidak error jika dijalankan di sub-folder atau lokal
    const route = routes[path] || routes["/"];
    
    document.title = `${route.title} | KAI Express`;
    const appContent = document.getElementById("app-content");
    if (appContent) {
        appContent.innerHTML = route.render();
        updateActiveLink();
        initPageLogic(path);
    }
};

const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
};

window.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        navigateTo(e.target.getAttribute("href"));
    }
});

window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", router);