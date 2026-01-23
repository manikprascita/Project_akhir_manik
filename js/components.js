/* components.js */

export const Home = () => `
  <section class="hero">
    <div class="hero-content">
      <h1>Eksplorasi Indonesia<br>Jadi Lebih Mudah</h1>
      <p>Nikmati perjalanan kereta api ternyaman dengan layanan kelas dunia.</p>
      <a href="/pesan-tiket" data-link class="btn-hero">Mulai Perjalanan</a>
    </div>
  </section>
  <div class="container" style="text-align: center; margin-top: 40px;">
    <h2 style="color: var(--primary-blue); margin-bottom: 15px;">Mengapa Memilih KAI Express?</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 30px;">
      <div style="padding: 20px;">
        <h3 style="color: var(--accent-orange);">⚡ Cepat</h3>
        <p>Proses pemesanan tiket kurang dari 2 menit.</p>
      </div>
      <div style="padding: 20px;">
        <h3 style="color: var(--accent-orange);">🛡️ Aman</h3>
        <p>Pembayaran terenkripsi dan data pribadi terjaga.</p>
      </div>
      <div style="padding: 20px;">
        <h3 style="color: var(--accent-orange);">📍 Akurat</h3>
        <p>Jadwal kereta yang terintegrasi secara real-time.</p>
      </div>
    </div>
  </div>
`;

export const PesanTiket = () => `
  <div class="container" style="max-width: 600px;">
    <h1 style="text-align: center; color: var(--primary-blue); margin-bottom: 30px;">Reservasi Tiket</h1>
    <form id="form-tiket">
      <div class="form-group">
        <label>Stasiun Asal</label>
        <input type="text" id="asal" placeholder="Masukan Kota Asal..." required>
      </div>
      <div class="form-group">
        <label>Stasiun Tujuan</label>
        <input type="text" id="tujuan" placeholder="Masukan Kota Tujuan..." required>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
        <div class="form-group">
          <label>Tanggal</label>
          <input type="date" id="tanggal" required>
        </div>
        <div class="form-group">
          <label>Kelas</label>
          <select id="kelas">
            <option>Eksekutif</option>
            <option>Bisnis</option>
            <option>Ekonomi</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label>Jumlah Penumpang</label>
        <input type="number" id="jumlah" min="1" value="1" required>
      </div>
      <button type="submit" class="btn-hero" style="width: 100%; border: none; cursor: pointer; margin-top: 10px;">Cari & Pesan Tiket</button>
    </form>
    <div id="notif" style="text-align:center; margin-top:20px;"></div>
  </div>
`;

export const JadwalKereta = () => `
  <div class="container">
    <h1 style="margin-bottom: 30px; color: var(--primary-blue);">Jadwal Keberangkatan</h1>
    <div style="overflow-x: auto;">
      <table>
        <thead>
          <tr>
            <th>Kereta</th>
            <th>Rute</th>
            <th>Waktu</th>
            <th>Kelas</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Argo Wilis</strong></td>
            <td>BDG → SBY</td>
            <td>07:00 - 17:00</td>
            <td>Eksekutif</td>
            <td><span style="color: #4caf50; font-weight: 600;">Tersedia</span></td>
          </tr>
          <tr>
            <td><strong>Gajayana</strong></td>
            <td>GMR → ML</td>
            <td>18:00 - 06:00</td>
            <td>Luxury</td>
            <td><span style="color: #4caf50; font-weight: 600;">Tersedia</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
`;

export const Pembayaran = () => `
  <div class="container" style="max-width: 700px;">
    <h1 style="text-align: center; color: var(--primary-blue);">Pembayaran</h1>
    <div style="background: #f8f9fa; padding: 25px; border-radius: 15px; margin: 25px 0;">
      <p style="display: flex; justify-content: space-between;"><span>Tiket Kereta Argo Wilis</span> <strong>Rp 450.000</strong></p>
      <p style="display: flex; justify-content: space-between;"><span>Biaya Layanan</span> <strong>Rp 7.500</strong></p>
      <hr style="margin: 15px 0; border: 0; border-top: 1px solid #ddd;">
      <p style="display: flex; justify-content: space-between; font-size: 1.2rem;"><strong>Total</strong> <strong style="color: var(--primary-blue);">Rp 457.500</strong></p>
    </div>
    <button id="btn-bayar" class="btn-hero" style="width:100%; border:none; cursor:pointer;">Konfirmasi Pembayaran</button>
  </div>
`;

// PENJELASAN: Menambahkan ID 'riwayat-list' untuk menampung data dari localStorage
export const Riwayat = () => `
  <div class="container">
    <h1 style="color: var(--primary-blue); margin-bottom: 30px;">E-Ticket Saya</h1>
    <div id="riwayat-list">
      <p style="text-align:center; color:#777;">Memuat riwayat...</p>
    </div>
  </div>
`;

export const TentangKami = () => `
  <div class="container">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center;">
      <div>
        <h1 style="color: var(--primary-blue); margin-bottom: 20px;">Melayani Sepenuh Hati</h1>
        <p>KAI Express berkomitmen untuk terus berinovasi dalam memberikan layanan transportasi terbaik bagi masyarakat Indonesia.</p>
      </div>
      <img src="src/foto.jpg" style="width: 100%; border-radius: 20px; box-shadow: var(--shadow);">
    </div>
  </div>
`;