/* components.js */

export const Navbar = () => `
  <header class="navbar">
    <div class="logo">
      <img src="assets/logo-kai.png" alt="KAI Express">
      <span>KAI Express</span>
    </div>

    <nav>
      <a href="/" data-link>Beranda</a>
      <a href="/pesan-tiket" data-link>Pesan Tiket</a>
      <a href="/jadwal-kereta" data-link>Jadwal Kereta</a>
      <a href="/pembayaran" data-link>Pembayaran</a>
      <a href="/riwayat" data-link>Riwayat</a>
    </nav>
  </header>
`;

export const Hero = () => `
  <section class="hero">
    <div class="hero-content">
      <h1>Perjalanan Nyaman & Tepat Waktu</h1>
      <p>
        Pesan tiket kereta api dengan mudah, cepat, dan aman
        ke seluruh Indonesia.
      </p>
      <a href="/pesan-tiket" data-link class="btn-hero">
        Pesan Tiket Sekarang
      </a>
    </div>
  </section>
`;

export const Footer = () => `
  <footer>
    © 2026 KAI Express. All Rights Reserved.
  </footer>
`;

export const PesanTiket = () => `
  <h2>Pesan Tiket</h2>
  <form class="form">
    <input type="text" placeholder="Stasiun Asal" required>
    <input type="text" placeholder="Stasiun Tujuan" required>
    <input type="date" required>
    <button>Pesan</button>
  </form>
`;

export const JadwalKereta = () => `
  <h2>Jadwal Kereta</h2>
  <ul>
    <li>Argo Bromo – 08:00</li>
    <li>Taksaka – 10:30</li>
    <li>Lodaya – 14:15</li>
  </ul>
`;

export const Pembayaran = () => `
  <h2>Pembayaran</h2>
  <p>Silakan lakukan pembayaran tiket Anda.</p>
`;

export const Riwayat = () => `
  <h2>Riwayat Pemesanan</h2>
  <p>Belum ada riwayat.</p>
`;