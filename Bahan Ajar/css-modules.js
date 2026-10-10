const cssModules = [
  {
    id: 1,
    title: "Bab 1: Sintaks Dasar & Cara Integrasi CSS",
    theory: `
      <h2>Sintaks Dasar CSS & Cara Integrasi</h2>
      <h3>Apa itu CSS?</h3>
      <p>CSS (Cascading Style Sheets) adalah bahasa yang digunakan untuk mengatur <strong>tampilan</strong> dan <strong>layout</strong> halaman HTML. Ibaratnya, HTML itu kerangka tubuh manusia, sedangkan CSS adalah pakaian, make up, dan aksesorisnya.</p>
      <h3>Anatomi Aturan CSS</h3>
      <p>Setiap aturan CSS terdiri dari 3 bagian utama:</p>
      <pre><code>selector {\n  propertyName: value;\n}</code></pre>
      <ul>
        <li><strong>Selector</strong> — Menentukan elemen HTML mana yang akan di-styling (misal: p, .kelas, #id)</li>
        <li><strong>Property</strong> — Aspek apa yang mau diubah (misal: color, font-size, margin)</li>
        <li><strong>Value</strong> — Nilai dari property tersebut (misal: red, 16px, 10px)</li>
      </ul>
      <h3>Tiga Cara Integrasi CSS</h3>
      <h4>1. Inline CSS (langsung di atribut)</h4>
      <p>CSS ditulis langsung di atribut <strong>style</strong> elemen HTML.</p>
      <pre><code>&lt;p style="color: red; font-weight: bold;"&gt;Teks merah tebal&lt;/p&gt;</code></pre>
      <p>✅ Praktis untuk testing cepat | ❌ Susah di-maintain, gak bisa reuse</p>
      <h4>2. Internal CSS (di dalam &lt;style&gt;)</h4>
      <p>CSS ditulis dalam tag <strong>&lt;style&gt;</strong> di dalam <strong>&lt;head&gt;</strong>.</p>
      <pre><code>&lt;head&gt;\n  &lt;style&gt;\n    p { color: green; }\n  &lt;/style&gt;\n&lt;/head&gt;</code></pre>
      <p>✅ Cocok untuk satu halaman | ❌ Gak bisa dipakai di halaman lain</p>
      <h4>3. External CSS (file terpisah)</h4>
      <p>CSS ditulis di file <strong>.css</strong> terpisah, lalu di-link dengan &lt;link&gt;.</p>
      <pre><code>&lt;head&gt;\n  &lt;link rel="stylesheet" href="style.css"&gt;\n&lt;/head&gt;</code></pre>
      <p>✅ Paling recommended — reusable, cacheable, terpisah strukturnya</p>
      <table border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:16px 0;">
        <tr><th>Metode</th><th>Kecepatan (1 halaman)</th><th>Reusability</th><th>Kapan pakai</th></tr>
        <tr><td>Inline</td><td>✅ Cepat</td><td>❌ Tidak</td><td>Testing / darurat</td></tr>
        <tr><td>Internal</td><td>✅ Cepat</td><td>❌ Tidak</td><td>Single page / email</td></tr>
        <tr><td>External</td><td>🔶 Perlu HTTP request</td><td>✅ Ya</td><td>Production / multi halaman</td></tr>
      </table>
      <blockquote><strong>Best Practice:</strong> Gunakan <strong>External CSS</strong> untuk project serius. Simpan file CSS terpisah, gunakan <strong>&lt;link&gt;</strong> di &lt;head&gt;. Hindari inline CSS kecuali untuk prototyping atau kondisi darurat.</blockquote>
      <h3>CSS Comments</h3>
      <p>Gunakan <code>/* komentar */</code> untuk memberi catatan di CSS-mu.</p>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bab 1: Sintaks Dasar CSS</title>
  <style>
    /* ============================================ */
    /* Coba ubah warna teks, ukuran font, dan warna */
    /* background dari elemen-elemen di bawah.      */
    /* ============================================ */
    h1 {
      color: navy;
      text-align: center;
    }
    p {
      font-size: 18px;
      color: #333;
    }
    .highlight {
      background-color: #fff3cd;
      padding: 12px;
      border-left: 4px solid #ffc107;
    }
    .footer {
      text-align: center;
      color: gray;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <h1>Selamat Datang di CSS! 🎨</h1>
  <p>Ini adalah paragraf biasa. Coba ubah warnaku!</p>
  <p class="highlight">Aku pakai class "highlight". Kasih background kuning dong!</p>
  <p>Paragraf ini juga perlu styling. Mungkin beda ukuran?</p>
  <div class="footer">© 2026 — Belajar CSS Asik!</div>
</body>
</html>`
  },
  {
    id: 2,
    title: "Bab 2: CSS Selectors Dasar & Lanjutan",
    theory: `
      <h2>CSS Selectors: Dari Pemula Sampai Mahir</h2>
      <h3>Apa itu Selector?</h3>
      <p>Selector adalah cara kita <strong>"menunjuk"</strong> elemen HTML mana yang mau di-styling. Bayangkan selector itu seperti <em>alamat rumah</em> — makin spesifik alamatnya, makin tepat sasarannya.</p>
      <h3>1. Selector Dasar</h3>
      <h4>Tag Selector (Type Selector)</h4>
      <p>Langsung pakai nama tag HTML. <strong>Paling luas</strong> jangkauannya.</p>
      <pre><code>p   { color: red; }   /* Semua tag &lt;p&gt; */\ndiv  { margin: 0; }   /* Semua tag &lt;div&gt; */</code></pre>
      <h4>Class Selector (.)</h4>
      <p>Pake titik diikuti nama class. <strong>Reusable</strong> — bisa dipake di banyak elemen.</p>
      <pre><code>.card   { border: 1px solid gray; }\n.btn    { padding: 8px 16px; }</code></pre>
      <h4>ID Selector (#)</h4>
      <p>Pake pagar (#) diikuti id. <strong>Unik — cuma boleh satu per halaman!</strong></p>
      <pre><code>#header { height: 80px; }\n#logo   { width: 120px; }</code></pre>
      <blockquote><strong>Peringatan:</strong> Jangan pake ID untuk styling umum. ID itu untuk JavaScript / anchor link. Untuk CSS, lebih baik pake <strong>class</strong>.</blockquote>
      <h3>2. Combinator Selector</h3>
      <table border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:16px 0;">
        <tr><th>Combinator</th><th>Simbol</th><th>Contoh</th><th>Artinya</th></tr>
        <tr><td>Descendant</td><td>spasi</td><td><code>div p</code></td><td>Semua p di dalam div</td></tr>
        <tr><td>Child</td><td>&gt;</td><td><code>div &gt; p</code></td><td>p anak LANGSUNG div</td></tr>
        <tr><td>Adjacent sibling</td><td>+</td><td><code>h2 + p</code></td><td>p tepat setelah h2</td></tr>
        <tr><td>General sibling</td><td>~</td><td><code>h2 ~ p</code></td><td>Semua p setelah h2</td></tr>
      </table>
      <h3>3. Pseudo-Class (:)</h3>
      <pre><code>a:hover     { color: orange; }\ninput:focus { border-color: blue; }\nli:first-child    { font-weight: bold; }\nli:nth-child(odd) { background: #f0f0f0; }\nli:nth-child(3n)  { color: red; }</code></pre>
      <h3>4. Pseudo-Element (::)</h3>
      <pre><code>p::first-line { font-weight: bold; }\np::first-letter { font-size: 200%; float: left; }\n.element::before { content: "🔥 "; }\n.element::after { content: " ← klik"; }</code></pre>
      <blockquote><strong>Catatan:</strong> <code>::before</code> dan <code>::after</code> WAJIB punya property <code>content: ""</code>. Tanpa itu, pseudo-element gak muncul!</blockquote>
      <h3>5. Attribute Selectors</h3>
      <pre><code>[disabled]          { opacity: 0.5; }\n[type="text"]       { border: 1px solid blue; }\n[href^="https"]     { color: green; }\n[href$=".pdf"]      { color: red; }\n[src*="thumbnail"]  { width: 150px; }</code></pre>
      <blockquote><strong>Best Practice:</strong> Prioritaskan <strong>class</strong> daripada ID. Jangan terlalu <strong>nested</strong> (misal: div &gt; ul &gt; li &gt; a) — bikin CSS rapuh.</blockquote>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bab 2: CSS Selectors</title>
  <style>
    p { line-height: 1.6; }
    .highlight { background: #fffde7; padding: 8px 12px; }
    #main-title { color: #1a237e; font-size: 28px; text-align: center; }
    .menu li { display: inline-block; margin-right: 16px; }
    .menu a:hover { color: #ff5722; text-decoration: underline; }
    .list-siswa li:nth-child(even) { background: #e8f5e9; }
    .list-siswa li::before { content: "⭐ "; }
    a[href$=".pdf"]::after { content: " (PDF)"; color: red; font-size: 12px; }
    a[href^="https"] { color: #1565c0; }
  </style>
</head>
<body>
  <h1 id="main-title">Belajar CSS Selectors</h1>
  <p>Ini paragraf biasa.</p>
  <p class="highlight">Aku punya class "highlight".</p>
  <h3>Menu Navigasi</h3>
  <ul class="menu">
    <li><a href="#">Beranda</a></li>
    <li><a href="#">Profil</a></li>
    <li><a href="#">Kursus</a></li>
  </ul>
  <h3>Daftar Siswa</h3>
  <ol class="list-siswa">
    <li>Budi Santoso</li>
    <li>Siti Rahayu</li>
    <li>Ahmad Fauzi</li>
    <li>Dewi Lestari</li>
    <li>Rudi Hartono</li>
    <li>Maya Indah</li>
  </ol>
  <h3>Link Contoh</h3>
  <ul>
    <li><a href="https://example.com">Website umum</a></li>
    <li><a href="/files/modul.pdf">Download Modul PDF</a></li>
    <li><a href="https://developer.mozilla.org">MDN Web Docs</a></li>
  </ul>
</body>
</html>`
  },
  {
    id: 3,
    title: "Bab 3: Hirarki & Specificity CSS",
    theory: `
      <h2>Hirarki CSS & Specificity</h2>
      <h3>Prinsip Cascade</h3>
      <p>CSS itu singkatan dari <strong>Cascading</strong> Style Sheets. "Cascading" artinya air terjun — CSS dibaca dari atas ke bawah, dan aturan yang paling <strong>spesifik</strong> serta <strong>paling akhir</strong> yang akan menang.</p>
      <p>Waktu browser bingung "ini teks harus warna apa?", dia pake 3 tahap:</p>
      <ol>
        <li><strong>Importance</strong> — Ada !important? Kalau ada, dia menang.</li>
        <li><strong>Specificity</strong> — Hitung skor selectornya.</li>
        <li><strong>Source Order</strong> — Kalau skor sama, yang terakhir ditulis yang dipake.</li>
      </ol>
      <h3>Sistem Perhitungan (a, b, c, d)</h3>
      <table border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:16px 0;">
        <tr><th>Level</th><th>Variabel</th><th>Contoh</th><th>Nilai</th></tr>
        <tr><td>Inline style</td><td>a</td><td><code>style="color:red"</code></td><td>1,0,0,0</td></tr>
        <tr><td>ID selector</td><td>b</td><td><code>#header</code></td><td>0,1,0,0</td></tr>
        <tr><td>Class, pseudo-class, attribute</td><td>c</td><td><code>.card</code>, <code>:hover</code></td><td>0,0,1,0</td></tr>
        <tr><td>Tag / pseudo-element</td><td>d</td><td><code>div</code>, <code>::before</code></td><td>0,0,0,1</td></tr>
      </table>
      <pre><code>p               → (0,0,0,1)\n.card           → (0,0,1,0)\n#header         → (0,1,0,0)\n#nav .item a    → (0,1,1,1)\nstyle="color"   → (1,0,0,0) — paling sakti!</code></pre>
      <blockquote><strong>Tips:</strong> Ingat urutan prioritas: <strong>Inline &gt; ID &gt; Class &gt; Tag</strong>.</blockquote>
      <h3>!important — Senjata Terakhir</h3>
      <p><code>!important</code> meng-override specificity secara paksa. Dia kayak <strong>"nuklir"</strong> di CSS.</p>
      <pre><code>p { color: red !important; }\n#special { color: blue; } /* tetap MERAH */</code></pre>
      <blockquote><strong>Bahaya !important:</strong> Kalau kamu sering pake !important, CSS-mu susah di-maintain. Kamu bakal butuh !important lagi buat override !important sebelumnya — itu <strong>specificity war</strong>.</blockquote>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bab 3: Specificity CSS</title>
  <style>
    p { color: black; font-size: 18px; }
    .highlight { color: purple; }
    p.highlight { color: orange; }
    #special { color: red; }
    #special.highlight { color: blue; }
    p { color: green !important; }
  </style>
</head>
<body>
  <h1>Uji Coba Specificity</h1>
  <p>Ini paragraf biasa tanpa class/ID.</p>
  <p class="highlight">Paragraf dengan class "highlight".</p>
  <p id="special" class="highlight">
    Paragraf dengan <strong>id="special"</strong> DAN <strong>class="highlight"</strong>.
    <br>Yang menang: hitung specificity dulu!
  </p>
  <blockquote>
    <strong>Petunjuk:</strong> Buka DevTools (F12) &gt; Elements &gt; klik paragraf, lihat panel Styles. Property yang dicoret artinya kalah specificity / override!
  </blockquote>
</body>
</html>`
  },
  {
    id: 4,
    title: "Bab 4: The Box Model",
    theory: `
      <h2>The Box Model — Setiap Elemen Adalah Kotak!</h2>
      <h3>Konsep Paling Fundamental di CSS</h3>
      <p>Setiap elemen HTML — baik itu &lt;div&gt;, &lt;p&gt;, &lt;h1&gt;, bahkan &lt;img&gt; — sebenarnya adalah <strong>kotak (box)</strong>. Browser menggambar setiap elemen sebagai persegi panjang yang terdiri dari 4 lapisan:</p>
      <div style="background:#f5f5f5;padding:20px;margin:16px 0;font-family:monospace;text-align:center;">
        <div style="background:#ffe0b2;padding:20px;border:3px dashed #e65100;">
          <strong style="color:#e65100;">MARGIN</strong>
          <div style="background:#c8e6c9;padding:16px;margin:8px;border:3px solid #2e7d32;">
            <strong style="color:#2e7d32;">BORDER</strong>
            <div style="background:#bbdefb;padding:16px;margin:8px;border:3px dashed #1565c0;">
              <strong style="color:#1565c0;">PADDING</strong>
              <div style="background:#fff9c4;padding:12px;margin:8px;border:1px solid #f9a825;">
                <strong style="color:#f9a825;">CONTENT</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3>4 Lapisan Box Model</h3>
      <table border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:16px 0;">
        <tr><th>Lapisan</th><th>Property</th><th>Fungsi</th></tr>
        <tr><td><strong>Content</strong></td><td><code>width / height</code></td><td>Area teks/gambar</td></tr>
        <tr><td><strong>Padding</strong></td><td><code>padding</code></td><td>Jarak content ke border (di dalam)</td></tr>
        <tr><td><strong>Border</strong></td><td><code>border</code></td><td>Garis tepi</td></tr>
        <tr><td><strong>Margin</strong></td><td><code>margin</code></td><td>Jarak antar elemen (di luar)</td></tr>
      </table>
      <h3>Shorthand Properties</h3>
      <pre><code>padding: 10px 20px 30px 40px; /* Atas Kanan Bawah Kiri */\npadding: 10px 20px;            /* Atas-Bawah | Kanan-Kiri */\npadding: 10px;                 /* Semua sisi */\nmargin: 0 auto;                /* Tengah horizontal */\nmargin-top: -10px;             /* Margin bisa NEGATIF */\nborder: 2px solid #333;\nborder-radius: 8px;</code></pre>
      <blockquote><strong>Best Practice:</strong> Gunakan DevTools untuk melihat box model secara visual. Klik kanan &gt; Inspect &gt; tab "Computed" &gt; lihat diagram Box Model.</blockquote>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bab 4: Box Model</title>
  <style>
    .box {
      width: 250px;
      padding: 20px;
      border: 4px solid #1565c0;
      margin: 20px;
      background: #e3f2fd;
    }
    .container {
      background: #f5f5f5;
      padding: 4px;
    }
    .box-special {
      width: 250px;
      padding: 20px;
      border: 4px solid #e65100;
      background: #fff3e0;
    }
  </style>
</head>
<body>
  <h1>The Box Model</h1>
  <p>Setiap elemen HTML adalah kotak. Yuk kita bedah!</p>
  <div class="container">
    <div class="box">Kotak 1 — Aku punya padding, border, dan margin.</div>
    <div class="box">Kotak 2 — Aku tetangga kotak 1.</div>
  </div>
  <div class="box-special">
    <strong>Kotak Spesial</strong><br>
    Coba set <code>margin: 0 auto</code> — aku bakal ke tengah!
  </div>
  <p>Total lebar = width + padding-left + padding-right + border-left + border-right</p>
</body>
</html>`
  },
  {
    id: 5,
    title: "Bab 5: Box Sizing (content-box vs border-box)",
    theory: `
      <h2>Box Sizing — Mengontrol Cara Browser Menghitung Ukuran</h2>
      <h3>Masalah: "Kok Lebarnya Melebihi yang Kuset?"</h3>
      <p>Pernah gak kamu set <code>width: 100%</code> tapi elemennya melebar sampai ke luar layar? Itu karena <strong>box-sizing</strong>!</p>
      <p>Secara default, browser pake <strong>content-box</strong>. Artinya nilai <code>width</code> dan <code>height</code> cuma dihitung dari <strong>content</strong>-nya saja — belum termasuk padding dan border!</p>
      <pre><code>.box {\n  width: 300px;\n  padding: 20px;\n  border: 5px solid;\n}\n/* Total: 300 + 40 + 10 = 350px — meluber! */</code></pre>
      <h3>border-box (Solusi Modern)</h3>
      <p>Dengan <code>border-box</code>, nilai <code>width</code> yang kamu set sudah <strong>termasuk padding dan border</strong>.</p>
      <pre><code>.box {\n  box-sizing: border-box;\n  width: 300px;\n  padding: 20px;\n  border: 5px solid;\n}\n/* Total: 300px — aman! */</code></pre>
      <table border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:16px 0;">
        <tr><th>Aspek</th><th>content-box</th><th>border-box</th></tr>
        <tr><td>width = ?</td><td>Lebar content saja</td><td>Content + padding + border</td></tr>
        <tr><td>Total visual</td><td>width + padding + border</td><td>width (sesuai set)</td></tr>
        <tr><td>Mudah bikin layout?</td><td>Sering meluber</td><td>Ukuran prediktif</td></tr>
      </table>
      <h3>Global Reset — Standar Industri!</h3>
      <pre><code>*, *::before, *::after {\n  box-sizing: border-box;\n}</code></pre>
      <p>Hampir semua developer CSS profesional sekarang pake ini. Ini bikin layout jauh lebih mudah diprediksi.</p>
      <blockquote><strong>Best Practice:</strong> Selalu mulai project CSS-mu dengan <code>*, *::before, *::after { box-sizing: border-box; }</code>. Sudah menjadi standar industri — dipake di Bootstrap, Tailwind, Materialize.</blockquote>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bab 5: Box Sizing</title>
  <style>
    /* Aktifkan baris di bawah untuk lihat perbedaan: */
    /* *, *::before, *::after { box-sizing: border-box; } */

    .box {
      width: 250px;
      padding: 30px;
      border: 8px solid;
      margin: 20px auto;
      font-weight: bold;
      text-align: center;
    }
    .content-box-demo {
      box-sizing: content-box;
      background: #ffebee;
      border-color: #c62828;
    }
    .border-box-demo {
      box-sizing: border-box;
      background: #e8f5e9;
      border-color: #2e7d32;
    }
    .preview-area {
      width: 300px;
      background: #f5f5f5;
      border: 2px dashed #999;
      margin: 20px auto;
      padding: 10px;
    }
  </style>
</head>
<body>
  <h1>content-box vs border-box</h1>
  <p>Kedua kotak punya CSS sama: width 250px, padding 30px, border 8px. Tapi hasilnya beda!</p>
  <div class="box content-box-demo">content-box</div>
  <p style="text-align:center">Total: 250 + 60 + 16 = <strong>326px</strong></p>
  <div class="box border-box-demo">border-box</div>
  <p style="text-align:center">Total: <strong>250px</strong> (pas!)</p>
  <div class="preview-area">
    <p style="text-align:center">Kotak merah lebih lebar dari area 300px ini!</p>
  </div>
</body>
</html>`
  },
  {
    id: 6,
    title: "Bab 6: Display Properties",
    theory: `
      <h2>Display Properties — Mengatur Perilaku Elemen</h2>
      <h3>Apa itu Display?</h3>
      <p>Property <code>display</code> menentukan <strong>bagaimana sebuah elemen ditampilkan</strong> di halaman.</p>
      <h3>1. display: block</h3>
      <p>Elemen block selalu memulai <strong>baris baru</strong> dan memenuhi <strong>lebar penuh</strong> parent-nya.</p>
      <ul>
        <li>✅ Bisa di-set width, height, margin, padding</li>
        <li>✅ <code>margin: auto</code> bikin dia ketengah</li>
        <li>Tag: div, p, h1-h6, section, ul, li</li>
      </ul>
      <h3>2. display: inline</h3>
      <p>Elemen inline <strong>tidak memulai baris baru</strong> — mengalir seperti teks.</p>
      <ul>
        <li>❌ width dan height <strong>tidak berpengaruh</strong></li>
        <li>❌ margin vertikal <strong>tidak berpengaruh</strong></li>
        <li>Tag: span, a, strong, em, img</li>
      </ul>
      <h3>3. display: inline-block</h3>
      <p>Gabungan inline + block. Berjejer kayak inline, tapi bisa diatur ukuran kayak block.</p>
      <h3>4. display: none</h3>
      <p>Elemen <strong>benar-benar dihapus</strong> dari layout. Beda dengan <code>visibility: hidden</code> yang masih nyisain ruang.</p>
      <h3>5. display: flex & display: grid</h3>
      <p>Flexbox (1D) dan Grid (2D) — akan dibahas detail di bab 11 dan 12.</p>
      <table border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:16px 0;">
        <tr><th>Display</th><th>Baris Baru</th><th>width/height</th><th>Kegunaan</th></tr>
        <tr><td>block</td><td>Ya</td><td>Ya</td><td>Layout utama</td></tr>
        <tr><td>inline</td><td>Tidak</td><td>Tidak</td><td>Teks, link</td></tr>
        <tr><td>inline-block</td><td>Tidak</td><td>Ya</td><td>Tombol, badge</td></tr>
        <tr><td>none</td><td>-</td><td>-</td><td>Hide/show</td></tr>
      </table>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bab 6: Display</title>
  <style>
    .block-demo {
      display: block;
      width: 200px; height: 40px;
      margin: 8px auto;
      background: #bbdefb;
      border: 2px solid #1565c0;
    }
    .inline-demo {
      display: inline;
      width: 200px; height: 60px;
      background: #fff9c4;
      border: 2px solid #f9a825;
      padding: 10px;
    }
    .inline-block-demo {
      display: inline-block;
      width: 120px; height: 50px;
      margin: 8px;
      background: #c8e6c9;
      border: 2px solid #2e7d32;
      text-align: center;
      line-height: 50px;
    }
    .none-demo {
      display: block;
      background: #ffcdd2;
      border: 2px solid #c62828;
      padding: 12px;
    }
  </style>
</head>
<body>
  <h1>Display Properties</h1>
  <h3>Block</h3>
  <div class="block-demo">Block 1</div>
  <div class="block-demo">Block 2</div>
  <h3>Inline</h3>
  <span class="inline-demo">Inline A</span>
  <span class="inline-demo">Inline B</span>
  <span class="inline-demo">Inline C</span>
  <p><small>width/height diabaikan! Aku cuma selebar konten.</small></p>
  <h3>Inline-Block</h3>
  <div class="inline-block-demo">IB 1</div>
  <div class="inline-block-demo">IB 2</div>
  <div class="inline-block-demo">IB 3</div>
  <h3>None</h3>
  <div class="none-demo">Aku akan hilang! (ganti display jadi none)</div>
</body>
</html>`
  },
  {
    id: 7,
    title: "Bab 7: Positioning & z-index",
    theory: `
      <h2>Positioning — Mengontrol Posisi Elemen Secara Presisi</h2>
      <h3>Document Flow</h3>
      <p>Secara default elemen HTML mengalir dalam <strong>normal flow</strong>. Property <code>position</code> memungkinkan kita melanggar aturan ini.</p>
      <table border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:16px 0;">
        <tr><th>Position</th><th>Patokan</th><th>Ikut Scroll?</th></tr>
        <tr><td><code>static</code></td><td>Normal flow</td><td>Ya</td></tr>
        <tr><td><code>relative</code></td><td>Dari posisi asli</td><td>Ya</td></tr>
        <tr><td><code>absolute</code></td><td>Parent non-static terdekat</td><td>Ya</td></tr>
        <tr><td><code>fixed</code></td><td>Viewport</td><td>Tetap</td></tr>
        <tr><td><code>sticky</code></td><td>Hybrid</td><td>Hybrid</td></tr>
      </table>
      <h3>Position Values</h3>
      <pre><code>/* relative — geser dari posisi asli, ruang asli tetap */\n.relative {\n  position: relative;\n  top: 20px; left: 30px;\n}\n\n/* absolute — ke luar flow, patokan ke parent relative */\n.parent { position: relative; }\n.child {\n  position: absolute;\n  top: 0; right: 0;\n}\n\n/* fixed — tetap di viewport */\n.fixed {\n  position: fixed;\n  bottom: 20px; right: 20px;\n  z-index: 1000;\n}\n\n/* sticky — relatif sampai scroll mencapai batas */\n.sticky {\n  position: sticky;\n  top: 0;\n}</code></pre>
      <h3>z-index</h3>
      <p>Menentukan <strong>tumpukan</strong> elemen yang overlap. Nilai lebih besar = lebih depan. Hanya berlaku untuk elemen <strong>positioned</strong> (non-static).</p>
      <blockquote><strong>Penting:</strong> z-index relatif terhadap <strong>stacking context</strong>. Elemen dengan opacity &lt; 1, transform, filter bisa create stacking context baru.</blockquote>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bab 7: Positioning</title>
  <style>
    body { padding-bottom: 400px; }
    .card { position: relative; width: 300px; margin: 30px auto; padding: 24px; background: white; border: 2px solid #e0e0e0; border-radius: 12px; }
    .badge { position: absolute; top: -10px; right: -10px; background: #e53935; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; }
    .relative-demo { position: relative; top: 20px; left: 30px; background: #e3f2fd; padding: 12px; border: 2px solid #1565c0; }
    .absolute-demo { position: absolute; bottom: 0; right: 0; background: #c8e6c9; padding: 8px 16px; border: 2px solid #2e7d32; font-size: 12px; }
    .fixed-demo { position: fixed; bottom: 20px; right: 20px; background: #1565c0; color: white; padding: 12px 24px; border-radius: 50px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); }
    .box-stack { position: relative; width: 300px; height: 200px; margin: 40px auto; }
    .stack-item { position: absolute; width: 150px; height: 100px; padding: 12px; color: white; font-weight: bold; border-radius: 8px; }
    .stack-1 { top: 0; left: 0; background: #e53935; z-index: 1; }
    .stack-2 { top: 30px; left: 40px; background: #43a047; z-index: 2; }
    .stack-3 { top: 60px; left: 80px; background: #1e88e5; z-index: 3; }
    .sticky-header { position: sticky; top: 0; background: #283593; color: white; padding: 12px; text-align: center; z-index: 100; }
  </style>
</head>
<body>
  <div class="sticky-header">Aku sticky — scroll dulu!</div>
  <h1>Positioning & z-index</h1>
  <h3>Relative</h3>
  <div class="relative-demo">Geser 20px ke bawah, 30px ke kanan</div>
  <h3>Absolute + Relative Parent</h3>
  <div class="card">
    <div class="badge">BARU!</div>
    <h3>Card Judul</h3>
    <p>Badge di pojok kanan atas pakai absolute.</p>
    <div class="absolute-demo">Absolute di pojok kanan bawah card</div>
  </div>
  <h3>z-index Stacking</h3>
  <div class="box-stack">
    <div class="stack-item stack-1">z-index: 1</div>
    <div class="stack-item stack-2">z-index: 2</div>
    <div class="stack-item stack-3">z-index: 3</div>
  </div>
  <div class="fixed-demo">Aku fixed — scroll aja!</div>
</body>
</html>`
  },
  {
    id: 8,
    title: "Bab 8: Tipografi Web",
    theory: `
      <h2>Tipografi Web — Seni Mengatur Teks di Layar</h2>
      <h3>Kenapa Tipografi Penting?</h3>
      <p>95% konten web adalah teks. Tipografi yang baik bikin tulisanmu <strong>enak dibaca</strong>, terlihat <strong>profesional</strong>, dan menyampaikan <strong>suasana</strong> yang tepat.</p>
      <h3>1. font-family</h3>
      <p>Gunakan <strong>font stack</strong> (beberapa font sebagai fallback).</p>
      <pre><code>body {\n  font-family: 'Inter', -apple-system, 'Segoe UI', Roboto, sans-serif;\n}</code></pre>
      <h3>2. font-weight (100-900)</h3>
      <pre><code>font-weight: 100;  /* Thin */\nfont-weight: 400;  /* Normal */\nfont-weight: 700;  /* Bold */\nfont-weight: 900;  /* Black */</code></pre>
      <h3>3. line-height</h3>
      <p>Property paling <strong>krusial buat readability</strong>. Gunakan unitless (angka).</p>
      <pre><code>body { line-height: 1.6; }     /* Teks panjang */\nh1, h2 { line-height: 1.2; }  /* Judul */</code></pre>
      <h3>4. letter-spacing & word-spacing</h3>
      <pre><code>letter-spacing: 2px;        /* Renggang */\nletter-spacing: -0.5px;    /* Rapat */</code></pre>
      <h3>5. Google Fonts</h3>
      <p>Link di &lt;head&gt;, lalu pake di CSS.</p>
      <pre><code>&lt;link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet"&gt;\n\nbody { font-family: 'Inter', sans-serif; }</code></pre>
      <h3>6. font-display: swap</h3>
      <p>Memprioritaskan teks cepat terbaca — tampilkan fallback dulu, ganti setelah font下载 selesai.</p>
      <h3>Property Lainnya</h3>
      <pre><code>text-align: left | center | right | justify;\ntext-transform: uppercase | lowercase | capitalize;\nwhite-space: nowrap;\ntext-overflow: ellipsis; /* "..." kalo kepotong */</code></pre>
      <blockquote><strong>Best Practice:</strong> Max 2-3 jenis font per halaman. line-height 1.5-1.7 untuk artikel. Body text minimal <strong>16px</strong>. Kontras minimal 4.5:1.</blockquote>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bab 8: Tipografi Web</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Inter', -apple-system, 'Segoe UI', Roboto, sans-serif;
      font-size: 18px;
      line-height: 1.6;
      color: #1a1a1a;
      max-width: 650px;
      margin: 0 auto;
      padding: 20px;
    }
    h1 {
      font-family: 'Playfair Display', Georgia, serif;
      font-weight: 700;
      font-size: 2.5rem;
      line-height: 1.2;
      color: #0d47a1;
    }
    h2 {
      font-weight: 600;
      font-size: 1.5rem;
      margin-top: 2em;
    }
    p { margin: 0 0 1.2em 0; }
    .caption { font-size: 0.85rem; font-style: italic; color: #666; text-align: center; }
    .heavy { font-weight: 900; text-transform: uppercase; letter-spacing: 2px; }
    .code { font-family: 'JetBrains Mono', monospace; background: #f5f5f5; padding: 2px 6px; border-radius: 4px; font-size: 0.9rem; }
    blockquote { border-left: 4px solid #1565c0; margin: 1.5em 0; padding: 0.5em 1em; background: #e3f2fd; font-style: italic; }
  </style>
</head>
<body>
  <h1>Seni Tipografi di Web</h1>
  <p class="caption">Typography is the craft of making language visible.</p>
  <p>Tipografi yang baik bukan cuma soal pilih font. Ini soal readability, hierarchy, dan mood. Coba ubah line-height dari 1.4 sampai 2.0 — bandingkan!</p>
  <h2>Mengapa Line-height Penting?</h2>
  <p>Line-height memberikan "ruang napas" bagi teks. Untuk artikel panjang: 1.5 sampai 1.7. Untuk judul: 1.1 sampai 1.3.</p>
  <h2>Font Weight</h2>
  <p style="font-weight:100;">Weight 100 (Thin)</p>
  <p style="font-weight:400;">Weight 400 (Normal)</p>
  <p style="font-weight:700;">Weight 700 (Bold)</p>
  <p style="font-weight:900;" class="heavy">Weight 900 (Black)</p>
  <h2>Letter Spacing</h2>
  <p style="letter-spacing:4px;">Letter-spacing 4px — untuk judul</p>
  <p style="word-spacing:12px;">Word-spacing 12px</p>
  <blockquote>"Typography is the art and technique of arranging type to make written language legible."</blockquote>
</body>
</html>`
  },
  {
    id: 9,
    title: "Bab 9: Warna & Latar Belakang",
    theory: `
      <h2>Warna & Latar Belakang — Memberi Jiwa pada Halaman</h2>
      <h3>Format Warna di CSS</h3>
      <table border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:16px 0;">
        <tr><th>Format</th><th>Contoh</th><th>Keterangan</th></tr>
        <tr><td>HEX</td><td><code>#ff5722</code></td><td>6 digit, paling populer</td></tr>
        <tr><td>HEX with Alpha</td><td><code>#ff572280</code></td><td>8 digit, 2 digit terakhir opacity</td></tr>
        <tr><td>RGB</td><td><code>rgb(255, 87, 34)</code></td><td>Red, Green, Blue 0-255</td></tr>
        <tr><td>RGBA</td><td><code>rgba(255, 87, 34, 0.5)</code></td><td>RGB + Alpha 0.0-1.0</td></tr>
        <tr><td>HSL</td><td><code>hsl(14, 100%, 57%)</code></td><td>Hue 0-360, Saturation, Lightness</td></tr>
        <tr><td>HSLA</td><td><code>hsla(14, 100%, 57%, 0.5)</code></td><td>HSL + Alpha</td></tr>
      </table>
      <h3>Background-Image & Properties</h3>
      <pre><code>.hero {\n  background-image: url('hero.jpg');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed; /* Parallax */\n}</code></pre>
      <h3>Gradients</h3>
      <pre><code>background: linear-gradient(135deg, #667eea, #764ba2);\nbackground: radial-gradient(circle, #00bcd4, #006064);\nbackground: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('bg.jpg');</code></pre>
      <h3>Background Shorthand</h3>
      <pre><code>background: #f0f0f0 url('bg.png') repeat-x top center / auto;</code></pre>
      <h3>Tips Warna</h3>
      <ul>
        <li>60-30-10 rule: 60% netral, 30% primer, 10% aksen</li>
        <li>Kontras teks-background minimal 4.5:1</li>
        <li>Simpan warna sebagai CSS Variables (Bab 18)</li>
      </ul>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bab 9: Warna</title>
  <style>
    body { font-family: 'Segoe UI', sans-serif; margin: 0; padding: 20px; background: #fafafa; }
    h1 { color: #1a237e; text-align: center; }
    .color-box { padding: 20px; margin: 16px 0; border-radius: 12px; color: white; font-weight: bold; }
    .hex-box { background-color: #ff5722; }
    .rgba-box { background-color: rgba(21, 101, 192, 0.8); }
    .hsl-box { background-color: hsl(120, 60%, 40%); }
    .hsla-box { background-color: hsla(320, 80%, 50%, 0.6); }
    .gradient-linear { background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 40px; border-radius: 12px; margin: 16px 0; }
    .gradient-radial { background: radial-gradient(circle at top left, #f093fb, #f5576c); color: white; padding: 40px; border-radius: 12px; margin: 16px 0; }
    .bg-demo { background-image: url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'); background-size: cover; background-position: center; height: 250px; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 16px 0; }
    .bg-demo h2 { background: rgba(0,0,0,0.6); color: white; padding: 16px 32px; border-radius: 8px; }
    .opacity-box { background: #1a237e; color: white; padding: 16px; margin: 8px; display: inline-block; width: 120px; text-align: center; }
  </style>
</head>
<body>
  <h1>Warna & Latar Belakang</h1>
  <h3>Format Warna</h3>
  <div class="color-box hex-box">HEX: #ff5722</div>
  <div class="color-box rgba-box">RGBA: rgba(21, 101, 192, 0.8)</div>
  <div class="color-box hsl-box">HSL: hsl(120, 60%, 40%)</div>
  <div class="color-box hsla-box">HSLA: hsla(320, 80%, 50%, 0.6)</div>
  <h3>Gradients</h3>
  <div class="gradient-linear">Linear Gradient</div>
  <div class="gradient-radial">Radial Gradient</div>
  <h3>Background Image</h3>
  <div class="bg-demo"><h2>Gunung dengan overlay</h2></div>
  <h3>Opacity</h3>
  <div>
    <div class="opacity-box" style="opacity:1.0">100%</div>
    <div class="opacity-box" style="opacity:0.7">70%</div>
    <div class="opacity-box" style="opacity:0.4">40%</div>
    <div class="opacity-box" style="opacity:0.15">15%</div>
  </div>
</body>
</html>`
  },
  {
    id: 10,
    title: "Bab 10: Borders & Shadows",
    theory: `
      <h2>Borders & Shadows — Membingkai dan Memberi Kedalaman</h2>
      <h3>Border — Garis Tepi yang Fleksibel</h3>
      <pre><code>border: 2px solid #333;\nborder: 4px dashed red;\nborder: 6px dotted #00bcd4;\nborder: 8px double #ff5722;\nborder-top: 3px solid #1a237e;\nborder-left: none;</code></pre>
      <h3>Border-Radius</h3>
      <pre><code>border-radius: 8px;           /* Semua sudut */\nborder-radius: 50%;           /* Lingkaran (kalo lebar=tinggi) */\nborder-radius: 10px 20px 30px 40px; /* Per sudut */\nborder-radius: 999px;         /* Pill shape */</code></pre>
      <h3>Box-Shadow — Efek Bayangan</h3>
      <pre><code>/* Sintaks: offset-x offset-y blur spread color inset */\nbox-shadow: 2px 2px 4px rgba(0,0,0,0.2);\nbox-shadow: 0 8px 30px rgba(0,0,0,0.15);\nbox-shadow: inset 0 2px 4px rgba(0,0,0,0.1);\n\n/* Multiple shadows */\nbox-shadow:\n  0 4px 8px rgba(0,0,0,0.1),\n  0 8px 24px rgba(0,0,0,0.08);</code></pre>
      <h3>Text-Shadow</h3>
      <pre><code>text-shadow: 1px 1px 2px rgba(0,0,0,0.5);\n\n/* Efek neon */\ntext-shadow:\n  0 0 4px #fff,\n  0 0 8px #ff00de;\n\n/* Efek 3D */\ntext-shadow:\n  1px 1px 0 #ccc,\n  2px 2px 0 #bbb;</code></pre>
      <h3>Border vs Outline</h3>
      <table border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:16px 0;">
        <tr><th>Properti</th><th>Border</th><th>Outline</th></tr>
        <tr><td>Posisi</td><td>Antara padding & margin</td><td>Di luar border</td></tr>
        <tr><td>Mempengaruhi layout?</td><td>Ya</td><td>Tidak</td></tr>
        <tr><td>Per sisi?</td><td>Ya</td><td>Tidak</td></tr>
      </table>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bab 10: Borders & Shadows</title>
  <style>
    body { font-family: 'Segoe UI', sans-serif; padding: 20px; background: #f5f5f5; }
    h1 { text-align: center; }
    .card { width: 180px; padding: 24px 16px; background: white; text-align: center; border-radius: 12px; }
    .container { display: flex; gap: 20px; flex-wrap: wrap; }
    .border-solid { border: 3px solid #1565c0; }
    .border-dashed { border: 3px dashed #e53935; }
    .border-dotted { border: 4px dotted #2e7d32; }
    .border-double { border: 6px double #6a1b9a; }
    .border-no-top { border: 3px solid #1565c0; border-top: none; }
    .radius-box { width: 120px; height: 120px; background: linear-gradient(135deg, #667eea, #764ba2); color: white; display: flex; align-items: center; justify-content: center; text-align: center; }
    .radius-small { border-radius: 8px; }
    .radius-large { border-radius: 24px; }
    .radius-round { border-radius: 50%; }
    .shadow-card { width: 180px; padding: 20px; background: white; border-radius: 12px; text-align: center; }
    .shadow-none { box-shadow: none; border: 1px solid #ddd; }
    .shadow-light { box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .shadow-medium { box-shadow: 0 8px 24px rgba(0,0,0,0.12); }
    .shadow-heavy { box-shadow: 0 16px 48px rgba(0,0,0,0.2); }
    .shadow-inset { box-shadow: inset 0 4px 8px rgba(0,0,0,0.15); background: #f0f0f0; }
    .text-shadow-demo { font-size: 36px; font-weight: bold; color: #1a237e; margin: 30px 0; }
  </style>
</head>
<body>
  <h1>Borders & Shadows</h1>
  <h3>Border Styles</h3>
  <div class="container">
    <div class="card border-solid">Solid</div>
    <div class="card border-dashed">Dashed</div>
    <div class="card border-dotted">Dotted</div>
    <div class="card border-double">Double</div>
    <div class="card border-no-top">Tanpa border atas</div>
  </div>
  <h3>Border Radius</h3>
  <div class="container">
    <div class="radius-box radius-small">8px</div>
    <div class="radius-box radius-large">24px</div>
    <div class="radius-box radius-round">50%</div>
  </div>
  <h3>Box Shadow</h3>
  <div class="container">
    <div class="shadow-card shadow-none">No shadow</div>
    <div class="shadow-card shadow-light">Light</div>
    <div class="shadow-card shadow-medium">Medium</div>
    <div class="shadow-card shadow-heavy">Heavy</div>
    <div class="shadow-card shadow-inset">Inset</div>
  </div>
  <h3>Text Shadow</h3>
  <div class="text-shadow-demo" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">Teks dengan bayangan</div>
</body>
</html>`
  },
  {
    id: 11,
    title: "Bab 11: Flexbox (1D Layout)",
    theory: `
      <h2>Flexbox — Layout 1 Dimensi yang Fleksibel</h2>
      <h3>Apa itu Flexbox?</h3>
      <p>Flexbox adalah model layout untuk mendistribusikan ruang dan menyelaraskan konten dalam <strong>satu dimensi</strong> — baris (row) atau kolom (column).</p>
      <h3>Konsep: Container & Items</h3>
      <ul>
        <li><strong>Flex Container</strong> — Parent dengan <code>display: flex</code></li>
        <li><strong>Flex Items</strong> — Anak langsung dari container</li>
      </ul>
      <h3>Main Axis vs Cross Axis</h3>
      <p><strong>Main axis</strong> = arah utama (default: horizontal). <strong>Cross axis</strong> = tegak lurus (default: vertikal). Kalau <code>flex-direction: column</code>, sumbunya bertukar.</p>
      <h3>Properti Container</h3>
      <pre><code>flex-direction: row | column | row-reverse | column-reverse;\njustify-content: flex-start | center | space-between | space-around | space-evenly;\nalign-items: stretch | center | flex-start | flex-end | baseline;\nflex-wrap: nowrap | wrap;\ngap: 16px;</code></pre>
      <h3>Properti Items</h3>
      <pre><code>flex-grow: 0 | 1 | N;    /* Seberapa item mau mekar */\nflex-shrink: 0 | 1;      /* Seberapa item mau mengecil */\nflex-basis: auto | 0 | Npx; /* Ukuran awal */\nflex: 1;                 /* Shorthand: grow 1, shrink 1, basis 0 */\nflex: none;              /* 0 0 auto — ukuran sesuai konten */\nalign-self: center;      /* Override align-items untuk 1 item */\norder: 0 | N;            /* Ubah urutan visual */</code></pre>
      <blockquote><strong>Triks:</strong> <code>display: flex; justify-content: center; align-items: center;</code> — centering sempurna cuma 3 baris!</blockquote>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bab 11: Flexbox</title>
  <style>
    body { font-family: 'Segoe UI', sans-serif; padding: 20px; background: #fafafa; }
    .container { display: flex; flex-direction: row; justify-content: flex-start; align-items: stretch; flex-wrap: nowrap; gap: 12px; background: #e3f2fd; border: 2px solid #1565c0; border-radius: 12px; padding: 16px; min-height: 150px; margin: 20px 0; }
    .item { background: #1e88e5; color: white; padding: 16px 24px; border-radius: 8px; font-weight: bold; }
    .item:nth-child(2) { background: #43a047; }
    .item:nth-child(3) { background: #e53935; }
    .navbar { display: flex; justify-content: space-between; align-items: center; background: #1a237e; color: white; padding: 12px 24px; border-radius: 12px; margin: 20px 0; }
    .navbar-links { display: flex; gap: 20px; }
    .navbar-links a { color: white; text-decoration: none; }
    .card-grid { display: flex; flex-wrap: wrap; gap: 16px; margin: 20px 0; }
    .card { flex: 1 1 250px; background: white; border-radius: 12px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .center-demo { display: flex; justify-content: center; align-items: center; height: 120px; background: #fff3e0; border-radius: 12px; border: 2px solid #e65100; margin: 20px 0; }
  </style>
</head>
<body>
  <h1>Flexbox — 1D Layout</h1>
  <h3>Flex Container & Items</h3>
  <div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
  </div>
  <h3>Navbar Pattern</h3>
  <div class="navbar">
    <strong>MyLogo</strong>
    <div class="navbar-links">
      <a href="#">Beranda</a>
      <a href="#">Profil</a>
      <a href="#">Kontak</a>
    </div>
  </div>
  <h3>Card Grid (Responsif)</h3>
  <div class="card-grid">
    <div class="card"><h4>Card 1</h4><p>Flex: 1 1 250px</p></div>
    <div class="card"><h4>Card 2</h4><p>Kecilkan layar, card akan turun!</p></div>
    <div class="card"><h4>Card 3</h4><p>flex-wrap yang handle</p></div>
    <div class="card"><h4>Card 4</h4><p>Tambah card lihat reaksinya</p></div>
  </div>
  <h3>Centering Sempurna</h3>
  <div class="center-demo">
    <span>Aku di tengah! (justify-content + align-items)</span>
  </div>
</body>
</html>`
  },
  {
    id: 12,
    title: "Bab 12: CSS Grid (2D Layout)",
    theory: `
      <h2>CSS Grid — Layout 2 Dimensi yang Powerful</h2>
      <h3>Apa itu CSS Grid?</h3>
      <p>CSS Grid adalah sistem layout <strong>2 dimensi</strong> — bisa mengatur baris dan kolom <strong>secara bersamaan</strong>. Kalau Flexbox itu "penggaris", Grid itu "papan catur".</p>
      <h3>Konsep Dasar</h3>
      <ul>
        <li><strong>Grid Container</strong> — <code>display: grid</code></li>
        <li><strong>Grid Items</strong> — Anak langsung container</li>
        <li><strong>Grid Lines</strong> — Garis pemisah (mulai dari 1)</li>
        <li><strong>fr unit</strong> — Fraction / porsi dari ruang tersisa</li>
      </ul>
      <h3>Properti Container</h3>
      <pre><code>grid-template-columns: 200px 1fr 1fr;\ngrid-template-rows: 100px auto 80px;\ngrid-template-columns: repeat(3, 1fr);  /* 3 kolom sama */\ngrid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsif! */\ngap: 16px;</code></pre>
      <h3>Grid Template Areas (Named Areas)</h3>
      <pre><code>.layout {\n  display: grid;\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: 80px 1fr 60px;\n  grid-template-areas:\n    "sidebar header"\n    "sidebar main"\n    "sidebar footer";\n}\nheader { grid-area: header; }\naside  { grid-area: sidebar; }\nmain   { grid-area: main; }\nfooter { grid-area: footer; }</code></pre>
      <h3>Properti Items</h3>
      <pre><code>.item { grid-column: 1 / 3; }    /* Line 1 ke 3 */\n.item { grid-column: 1 / span 2; } /* Span 2 kolom */\n.item { grid-area: 2 / 1 / 4 / 3; } /* row-start / col-start / row-end / col-end */</code></pre>
      <blockquote><strong>Tips:</strong> Grid untuk layout halaman utuh. Flexbox untuk komponen. Kombinasikan keduanya!</blockquote>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bab 12: CSS Grid</title>
  <style>
    body { font-family: 'Segoe UI', sans-serif; padding: 20px; background: #fafafa; }
    .grid-basic { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; background: #e3f2fd; border: 2px solid #1565c0; border-radius: 12px; padding: 16px; margin: 20px 0; }
    .grid-basic > div { background: #1e88e5; color: white; padding: 20px; border-radius: 8px; text-align: center; font-weight: bold; }
    .grid-span { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; background: #f3e5f5; border: 2px solid #6a1b9a; border-radius: 12px; padding: 16px; margin: 20px 0; }
    .grid-span > div { background: #ab47bc; color: white; padding: 20px; border-radius: 8px; text-align: center; }
    .wide { grid-column: span 2; background: #8e24aa; }
    .tall { grid-row: span 2; background: #7b1fa2; }
    .holy-grail { display: grid; grid-template-columns: 200px 1fr 200px; grid-template-rows: auto 1fr auto; grid-template-areas: "header header header" "nav main aside" "footer footer footer"; gap: 0; min-height: 400px; border-radius: 12px; overflow: hidden; margin: 20px 0; }
    .hg-header { grid-area: header; background: #1a237e; color: white; padding: 20px; }
    .hg-nav { grid-area: nav; background: #283593; color: white; padding: 20px; }
    .hg-main { grid-area: main; background: #f5f5f5; padding: 20px; }
    .hg-aside { grid-area: aside; background: #e8eaf6; padding: 20px; }
    .hg-footer { grid-area: footer; background: #0d47a1; color: white; padding: 20px; }
    .auto-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin: 20px 0; }
    .auto-grid > div { background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 32px 20px; border-radius: 12px; text-align: center; }
  </style>
</head>
<body>
  <h1>CSS Grid — 2D Layout</h1>
  <h3>Basic Grid</h3>
  <div class="grid-basic">
    <div>1</div><div>2</div><div>3</div>
    <div>4</div><div>5</div><div>6</div>
  </div>
  <h3>Grid dengan Span</h3>
  <div class="grid-span">
    <div>1</div><div class="wide">2 (span 2)</div>
    <div>3</div><div class="tall">4 (span 2)</div>
    <div>5</div><div>6</div><div>7</div>
  </div>
  <h3>Holy Grail (Grid Areas)</h3>
  <div class="holy-grail">
    <header class="hg-header">Header</header>
    <nav class="hg-nav">Sidebar Nav</nav>
    <main class="hg-main">Main Content</main>
    <aside class="hg-aside">Aside</aside>
    <footer class="hg-footer">Footer</footer>
  </div>
  <h3>Auto-fit Grid (Responsif Otomatis)</h3>
  <div class="auto-grid">
    <div>Item</div><div>Item</div><div>Item</div><div>Item</div><div>Item</div><div>Item</div>
  </div>
</body>
</html>`
  },
  {
    id: 13,
    title: "Bab 13: Unit Relatif (px, rem, em, %, vh, vw)",
    theory: `
      <h2>Unit Relatif — Ukuran yang Fleksibel dan Responsif</h2>
      <h3>px (Pixels) — Ukuran Absolut</h3>
      <p><code>px</code> adalah unit <strong>absolut</strong>. 1px = 1 piksel di layar. Cocok untuk <strong>border, shadow, dan ukuran yang harus presisi</strong>. Tapi <strong>tidak responsif</strong> — orang dengan preferensi font besar gak akan kebantu.</p>
      <h3>rem (Root EM) — Relatif terhadap Root Font Size</h3>
      <p><code>rem</code> relatif terhadap <strong>root font size</strong> (&lt;html&gt;, default 16px). Paling direkomendasikan untuk ukuran teks.</p>
      <pre><code>html { font-size: 16px; } /* Default browser */\n\nh1 { font-size: 2rem; }  /* = 32px */\np  { font-size: 1rem; }  /* = 16px */\n.small { font-size: 0.875rem; } /* = 14px */</code></pre>
      <h3>em — Relatif terhadap Parent Font Size</h3>
      <p><code>em</code> relatif terhadap <strong>font-size parent</strong>-nya. Hati-hati efek <strong> compounding </strong> (akumulasi) di nested element.</p>
      <pre><code>.parent { font-size: 20px; }\n.parent .child { font-size: 1.5em; } /* = 30px (20 * 1.5) */\n.parent .child .grandchild { font-size: 1.5em; } /* = 45px (30 * 1.5)! */</code></pre>
      <blockquote><strong>Tips:</strong> Pake <code>em</code> untuk <strong>padding/margin</strong> yang skalanya mengikuti ukuran teks. Contoh: tombol dengan <code>padding: 0.5em 1em</code> — makin besar font, makin besar padding otomatis.</blockquote>
      <h3>% (Persentase) — Relatif terhadap Parent</h3>
      <p>Persentase relatif terhadap <strong>nilai property yang sama dari parent</strong>.</p>
      <pre><code>.parent { width: 500px; }\n.child { width: 50%; } /* = 250px */</code></pre>
      <h3>vh & vw (Viewport Units)</h3>
      <p>Relatif terhadap ukuran <strong>jendela browser</strong> (viewport).</p>
      <pre><code>.hero { height: 100vh; }        /* Setinggi viewport */\n.sidebar { width: 25vw; }      /* 25% lebar viewport */\n.full { width: 100vw; }        /* Full lebar (hati-hati: termasuk scrollbar) */</code></pre>
      <h3>vmin & vmax</h3>
      <pre><code>vmin — nilai terkecil antara vh dan vw\nvmax — nilai terbesar antara vh dan vw\n\n.responsive-square { width: 50vmin; height: 50vmin; } /* Persegi responsif */</code></pre>
      <table border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:16px 0;">
        <tr><th>Unit</th><th>Relatif terhadap</th><th>Kapan dipakai</th></tr>
        <tr><td><code>px</code></td><td>Absolut</td><td>Border, shadow, ukuran presisi</td></tr>
        <tr><td><code>rem</code></td><td>Root font-size</td><td>Ukuran teks (PALING DIREKOMENDASIKAN)</td></tr>
        <tr><td><code>em</code></td><td>Parent font-size</td><td>Padding/margin tombol, spacing komponen</td></tr>
        <tr><td><code>%</code></td><td>Parent property</td><td>Lebar layout, ukuran gambar</td></tr>
        <tr><td><code>vh</code></td><td>Viewport height</td><td>Full-screen hero, section</td></tr>
        <tr><td><code>vw</code></td><td>Viewport width</td><td>Full-width elements</td></tr>
        <tr><td><code>vmin</code></td><td>Min(vh, vw)</td><td>Persegi responsif</td></tr>
        <tr><td><code>vmax</code></td><td>Max(vh, vw)</td><td>Dekorasi full-screen</td></tr>
      </table>
      <blockquote><strong>Best Practice:</strong> Gunakan <strong>rem</strong> untuk font-size, <strong>em</strong> untuk spacing di komponen, <strong>%</strong> untuk lebar layout, dan <strong>vh/vw</strong> untuk full-screen section.</blockquote>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bab 13: Unit Relatif</title>
  <style>
    body { font-family: 'Segoe UI', sans-serif; padding: 20px; background: #fafafa; }
    h1 { font-size: 2rem; color: #1a237e; }
    .demo { margin: 16px 0; padding: 12px; border-radius: 8px; background: #e3f2fd; border: 1px solid #1565c0; }
    .px-unit { font-size: 24px; background: #fff3e0; }
    .rem-unit { font-size: 1.5rem; background: #e8f5e9; }
    .em-parent { font-size: 20px; background: #f3e5f5; }
    .em-child { font-size: 1.5em; padding: 0.5em 1em; background: #ce93d8; display: inline-block; margin: 4px; }
    .vh-demo { height: 20vh; background: linear-gradient(135deg, #667eea, #764ba2); color: white; display: flex; align-items: center; justify-content: center; border-radius: 12px; font-size: 1.2rem; }
    .vw-demo { width: 80vw; background: #ff7043; color: white; padding: 16px; border-radius: 12px; text-align: center; }
    .percent-demo { width: 80%; background: #26a69a; color: white; padding: 16px; border-radius: 12px; text-align: center; }
  </style>
</head>
<body>
  <h1>Unit Relatif</h1>
  <div class="demo px-unit">font-size: 24px (absolut)</div>
  <div class="demo rem-unit">font-size: 1.5rem (= 24px, tapi ikut root)</div>
  <div class="em-parent" style="font-size:16px">
    Parent font-size: 16px
    <div class="em-child">em-child: 1.5em</div>
  </div>
  <div class="em-parent" style="font-size:24px">
    Parent font-size: 24px
    <div class="em-child">em-child: 1.5em (lebih besar!)</div>
  </div>
  <h3>Persentase</h3>
  <div style="width:500px;border:2px dashed #999;padding:4px;">
    <div class="percent-demo">width: 80% (dari parent 500px = 400px)</div>
  </div>
  <h3>Viewport Units</h3>
  <div class="vh-demo">height: 20vh (20% dari tinggi viewport)</div>
  <div class="vw-demo">width: 80vw (80% dari lebar viewport)</div>
  <blockquote>Coba resize browser — lihat bagaimana vh dan vw berubah!</blockquote>
</body>
</html>`
  },
  {
    id: 14,
    title: "Bab 14: Media Queries",
    theory: `
      <h2>Media Queries — CSS yang Adaptif Terhadap Perangkat</h2>
      <h3>Apa itu Media Queries?</h3>
      <p>Media queries memungkinkan CSS berubah berdasarkan <strong>karakteristik perangkat</strong> — terutama <strong>lebar layar (viewport)</strong>. Ini adalah fondasi dari <strong>responsive design</strong>.</p>
      <h3>Sintaks Dasar</h3>
      <pre><code>@media (condition) {\n  /* CSS rules di sini */\n}</code></pre>
      <h3>max-width vs min-width</h3>
      <pre><code>/* max-width: terapkan UNTUK layar ≤ nilai */\n@media (max-width: 768px) {\n  body { font-size: 14px; }\n}\n\n/* min-width: terapkan UNTUK layar ≥ nilai */\n@media (min-width: 768px) {\n  body { font-size: 18px; }\n}</code></pre>
      <h3>Mobile-First vs Desktop-First</h3>
      <table border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:16px 0;">
        <tr><th>Pendekatan</th><th>Default</th><th>Media Query</th></tr>
        <tr><td><strong>Mobile-First</strong></td><td>Gaya untuk mobile</td><td><code>min-width</code> — tambah gaya saat layar ≥</td></tr>
        <tr><td><strong>Desktop-First</strong></td><td>Gaya untuk desktop</td><td><code>max-width</code> — ubah gaya saat layar ≤</td></tr>
      </table>
      <h3>Common Breakpoints</h3>
      <pre><code>/* Mobile-First — paling direkomendasikan! */\n\n/* Default: mobile styles */\n\n@media (min-width: 576px) { /* Tablet kecil / HP landscape */ }\n@media (min-width: 768px) { /* Tablet */ }\n@media (min-width: 992px) { /* Desktop kecil / Laptop */ }\n@media (min-width: 1200px) { /* Desktop besar */ }\n@media (min-width: 1400px) { /* Layar lebar */ }</code></pre>
      <h3>Media Query untuk Print</h3>
      <pre><code>@media print {\n  nav, .sidebar, .ads { display: none; }\n  body { font-size: 12pt; color: black; }\n  a[href]::after { content: " (" attr(href) ")"; }\n}</code></pre>
      <h3>Kombinasi Kondisi</h3>
      <pre><code>@media (min-width: 768px) and (max-width: 991px) {\n  /* Tablet saja */\n}\n\n@media (min-width: 768px), (max-width: 300px) {\n  /* Atau: tablet ATAU layar sangat kecil */\n}</code></pre>
      <blockquote><strong>Best Practice:</strong> Gunakan <strong>Mobile-First</strong> dengan <code>min-width</code>. Mulai dari layout mobile, lalu tambah kompleksitas seiring layar membesar.</blockquote>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bab 14: Media Queries</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: 'Segoe UI', sans-serif; margin: 0; padding: 20px; background: #fafafa; }

    .container { display: flex; gap: 16px; flex-wrap: wrap; }
    .card { flex: 1 1 100%; background: white; border-radius: 12px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }

    h1 { font-size: 1.5rem; }
    .sidebar { display: none; }
    .nav { display: flex; flex-direction: column; gap: 8px; background: #1a237e; color: white; padding: 12px; border-radius: 8px; margin-bottom: 16px; }
    .nav a { color: white; text-decoration: none; padding: 4px 0; }

    /* Tablet ke atas */
    @media (min-width: 600px) {
      h1 { font-size: 2rem; }
      .card { flex: 1 1 calc(50% - 8px); }
      .nav { flex-direction: row; gap: 20px; }
    }

    /* Desktop */
    @media (min-width: 900px) {
      .layout { display: flex; gap: 20px; }
      .main-content { flex: 1; }
      .sidebar { display: block; width: 250px; background: #e8eaf6; padding: 20px; border-radius: 12px; }
      .card { flex: 1 1 calc(33.33% - 11px); }
    }

    /* Large Desktop */
    @media (min-width: 1200px) {
      body { padding: 40px; max-width: 1200px; margin: 0 auto; }
      .card { flex: 1 1 calc(25% - 12px); }
    }

    /* Print */
    @media print {
      .nav, .sidebar { display: none; }
      .card { box-shadow: none; border: 1px solid #ddd; break-inside: avoid; }
    }
  </style>
</head>
<body>
  <h1>Media Queries</h1>
  <nav class="nav">
    <a href="#">Beranda</a>
    <a href="#">Tentang</a>
    <a href="#">Layanan</a>
    <a href="#">Kontak</a>
  </nav>
  <div class="layout">
    <div class="main-content">
      <div class="container">
        <div class="card"><h3>Card 1</h3><p>Resize browser untuk lihat perubahan!</p></div>
        <div class="card"><h3>Card 2</h3><p>Mobile: 1 kolom. Tablet: 2 kolom. Desktop: 3-4 kolom.</p></div>
        <div class="card"><h3>Card 3</h3><p>Breakpoints: 600px, 900px, 1200px.</p></div>
        <div class="card"><h3>Card 4</h3><p>Mobile-first approach.</p></div>
      </div>
    </div>
    <aside class="sidebar">
      <h3>Sidebar</h3>
      <p>Sidebar muncul di layar ≥ 900px.</p>
      <ul>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
      </ul>
    </aside>
  </div>
</body>
</html>`
  },
  {
    id: 15,
    title: "Bab 15: Mobile-First Approach",
    theory: `
      <h2>Mobile-First Approach — Desain untuk Genggaman, Skalakan ke Layar Lebar</h2>
      <h3>Apa itu Mobile-First?</h3>
      <p>Mobile-First adalah pendekatan <strong>responsive design</strong> di mana kita mulai mendesain untuk <strong>layar terkecil (mobile)</strong> terlebih dahulu, lalu <strong>menambahkan</strong> gaya untuk layar yang lebih besar menggunakan <code>min-width</code> media queries.</p>
      <h3>Kenapa Mobile-First?</h3>
      <ul>
        <li><strong>Mayoritas traffic web dari mobile</strong> — lebih dari 60% pengguna Internet mengakses via HP</li>
        <li><strong>Progressive enhancement</strong> — semua pengguna dapet konten dasar, pengguna dengan layar besar dapet bonus layout</li>
        <li><strong>Performance lebih baik</strong> — mobile gak perlu nge-download CSS untuk desktop yang gak dipake</li>
        <li><strong>Prioritas konten</strong> — dipaksa mikir "apa yang paling penting?" untuk layar kecil</li>
      </ul>
      <h3>Cara Kerja Mobile-First</h3>
      <pre><code>/* STEP 1: BASE — gaya untuk semua perangkat (MOBILE) */\n.container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* STEP 2: TABLET — tambah fitur untuk layar ≥ 768px */\n@media (min-width: 768px) {\n  .container {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n  .item { flex: 1 1 45%; }\n}\n\n/* STEP 3: DESKTOP — layout penuh untuk layar ≥ 1024px */\n@media (min-width: 1024px) {\n  .container { flex-wrap: nowrap; }\n  .item { flex: 1; }\n  .sidebar { display: block; }\n}</code></pre>
      <h3>Desktop-First vs Mobile-First</h3>
      <table border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:16px 0;">
        <tr><th>Aspek</th><th>Mobile-First (min-width)</th><th>Desktop-First (max-width)</th></tr>
        <tr><td>Default</td><td>Mobile</td><td>Desktop</td></tr>
        <tr><td>Media Query</td><td>min-width (semakin besar)</td><td>max-width (semakin kecil)</td></tr>
        <tr><td>Kompleksitas</td><td>Bertambah seiring layar</td><td>Berkurang seiring layar</td></tr>
        <tr><td>Prioritas</td><td>Konten & performa</td><td>Layout & visual</td></tr>
      </table>
      <h3>HTML Viewport Meta Tag — WAJIB!</h3>
      <p>Untuk responsive design, jangan lupa meta viewport di &lt;head&gt;:</p>
      <pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></pre>
      <h3>Common Mobile-First Patterns</h3>
      <pre><code>/* Navigation: hamburger di mobile, horizontal di desktop */\n.nav { display: none; } /* Default: sembunyi */\n.nav-toggle { display: block; } /* Tombol hamburger */\n\n@media (min-width: 768px) {\n  .nav { display: flex; }\n  .nav-toggle { display: none; }\n}\n\n/* Cards: single column → multi column */\n.card-grid { display: grid; gap: 16px; }\n@media (min-width: 600px) {\n  .card-grid { grid-template-columns: repeat(2, 1fr); }\n}\n@media (min-width: 900px) {\n  .card-grid { grid-template-columns: repeat(3, 1fr); }\n}</code></pre>
      <blockquote><strong>Best Practice:</strong> Tulis <strong>base styles untuk mobile</strong> di luar media query. Lalu tambah <code>@media (min-width: ...)</code> untuk layar yang lebih besar. Ingat: <strong>mobile-first = content-first</strong>.</blockquote>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bab 15: Mobile-First</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: 'Segoe UI', sans-serif; margin: 0; padding: 16px; background: #fafafa; }

    /* ===== MOBILE FIRST: Base styles ===== */
    .header { text-align: center; margin-bottom: 20px; }
    .header h1 { font-size: 1.5rem; margin: 0; }

    .nav { background: #1a237e; border-radius: 12px; padding: 8px; margin-bottom: 20px; }
    .nav a { display: block; color: white; text-decoration: none; padding: 8px 16px; border-radius: 8px; }
    .nav a:hover { background: rgba(255,255,255,0.1); }

    .feature { background: #e3f2fd; padding: 16px; border-radius: 12px; margin-bottom: 16px; }
    .feature h3 { margin: 0 0 8px 0; color: #1565c0; }
    .feature p { margin: 0; font-size: 0.9rem; }

    .grid { display: grid; gap: 12px; margin-bottom: 20px; }
    .card { background: white; border-radius: 12px; padding: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }

    /* ===== TABLET: min-width 600px ===== */
    @media (min-width: 600px) {
      body { padding: 24px; }
      .header h1 { font-size: 2rem; }
      .nav a { display: inline-block; }
      .features { display: flex; gap: 16px; }
      .feature { flex: 1; margin-bottom: 0; }
      .grid { grid-template-columns: repeat(2, 1fr); }
    }

    /* ===== DESKTOP: min-width 900px ===== */
    @media (min-width: 900px) {
      body { padding: 32px; max-width: 1000px; margin: 0 auto; }
      .layout { display: flex; gap: 24px; }
      .content { flex: 1; }
      .sidebar { width: 280px; background: #f3e5f5; padding: 20px; border-radius: 12px; }
      .grid { grid-template-columns: repeat(3, 1fr); }
    }

    /* ===== PRINT ===== */
    @media print {
      .nav { display: none; }
      .card { box-shadow: none; border: 1px solid #ddd; }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Mobile-First Approach</h1>
    <p>Resize browser — lihat perubahan dari mobile ke desktop!</p>
  </div>

  <nav class="nav">
    <a href="#">Beranda</a>
    <a href="#">Tentang</a>
    <a href="#">Layanan</a>
    <a href="#">Kontak</a>
  </nav>

  <div class="layout">
    <div class="content">
      <div class="features">
        <div class="feature">
          <h3>Cepat</h3>
          <p>Mobile-first prioritaskan performa untuk perangkat dengan koneksi terbatas.</p>
        </div>
        <div class="feature">
          <h3>Responsif</h3>
          <p>Konten tetap terbaca di layar sekecil apapun.</p>
        </div>
        <div class="feature">
          <h3>Aksesibel</h3>
          <p>Semua pengguna dapat mengakses konten dasar tanpa hambatan.</p>
        </div>
      </div>

      <div class="grid">
        <div class="card"><h3>Card 1</h3><p>Mobile: 1 kolom. Tablet: 2 kolom. Desktop: 3 kolom.</p></div>
        <div class="card"><h3>Card 2</h3><p>Tidak perlu media query khusus — cukup pakai grid.</p></div>
        <div class="card"><h3>Card 3</h3><p>Base style untuk semua, lalu enhancement untuk layar besar.</p></div>
        <div class="card"><h3>Card 4</h3><p>Mobile-first = progressive enhancement.</p></div>
      </div>
    </div>

    <aside class="sidebar" style="display:none;">
      <h3>Sidebar</h3>
      <p>Sidebar muncul di layar ≥ 900px.</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </aside>
  </div>
</body>
</html>`
  },
  {
    id: 16,
    title: "Bab 16: Transform & Transition",
    theory: `
      <h2>Transform & Transition — Gerak dan Perubahan yang Halus</h2>
      <h3>Transform — Mengubah Bentuk, Posisi, dan Rotasi</h3>
      <p>Property <code>transform</code> memungkinkan kita memanipulasi elemen secara visual tanpa mempengaruhi layout sekitarnya.</p>
      <h4>Fungsi Transform</h4>
      <pre><code>/* translate — memindahkan */\ntransform: translateX(50px);   /* Geser horizontal */\ntransform: translateY(-20px);  /* Geser vertikal (negatif = ke atas) */\ntransform: translate(50px, -20px); /* Gabungan */\ntransform: translate(-50%, -50%); /* Centering sempurna! */\n\n/* rotate — memutar */\ntransform: rotate(45deg);      /* Searah jarum jam */\ntransform: rotate(-90deg);     /* Berlawanan */\ntransform: rotate(360deg);     /* Full circle */\n\n/* scale — memperbesar/memperkecil */\ntransform: scale(1.2);         /* 120% ukuran asli */\ntransform: scale(0.5);         /* 50% */\ntransform: scaleX(2);          /* Melebar 2x */\ntransform: scaleY(0.5);        /* Memipih */\n\n/* skew — memiringkan */\ntransform: skewX(10deg);       /* Miring horizontal */\ntransform: skewY(10deg);       /* Miring vertikal */\ntransform: skew(10deg, 5deg);  /* Gabungan */\n\n/* Multiple transforms */\ntransform: translate(50px, -50px) rotate(45deg) scale(1.1);</code></pre>
      <h4>transform-origin — Titik Poros</h4>
      <pre><code>transform-origin: center center; /* Default: tengah */\ntransform-origin: top left;      /* Poros di pojok kiri atas */\ntransform-origin: 0 100%;        /* Poros di kiri bawah (px / %) */</code></pre>
      <h3>Transition — Animasi Antar State</h3>
      <p><code>transition</code> membuat perubahan property menjadi <strong>halus (animated)</strong>, bukan instan.</p>
      <pre><code>.btn {\n  background: blue;\n  transition: background 0.3s ease;\n}\n.btn:hover {\n  background: darkblue;\n  /* Perubahan terjadi dalam 0.3 detik */\n}</code></pre>
      <h4>Komponen Transition</h4>
      <pre><code>/* Shorthand: property duration timing-function delay */\ntransition: all 0.3s ease;\ntransition: background-color 0.3s ease, transform 0.5s ease-in-out;\ntransition: opacity 0.2s ease 0.1s; /* delay 0.1s */\n\n/* Timing functions */\ntransition-timing-function: ease;         /* Mulai cepat, akhir lambat */\ntransition-timing-function: linear;       /* Konstan */\ntransition-timing-function: ease-in;      /* Mulai lambat */\ntransition-timing-function: ease-out;     /* Akhir lambat */\ntransition-timing-function: ease-in-out;  /* Mulai & akhir lambat */\ntransition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55); /* Custom */</code></pre>
      <h4>Property yang Bisa di-Transition</h4>
      <p>Hanya property <strong>numerik</strong> yang bisa di-animasi: opacity, transform, color, background, width, height, margin, padding, box-shadow, border-radius, dll.</p>
      <blockquote><strong>Performance Tips:</strong> Untuk animasi halus (60fps), prefer <strong>transform</strong> dan <strong>opacity</strong>. Hindari menganimasi width, height, margin, top, left — karena memicu <strong>layout recalculations</strong> yang berat. Gunakan <code>transform: translate()</code> untuk pergerakan.</blockquote>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bab 16: Transform & Transition</title>
  <style>
    body { font-family: 'Segoe UI', sans-serif; padding: 20px; background: #f5f5f5; text-align: center; }
    h1 { color: #1a237e; }
    .demo-grid { display: flex; flex-wrap: wrap; gap: 30px; justify-content: center; margin: 30px 0; }
    .box { width: 120px; height: 120px; background: linear-gradient(135deg, #667eea, #764ba2); color: white; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-weight: bold; cursor: pointer; transition: all 0.3s ease; }
    .translate-box:hover { transform: translate(20px, -10px); }
    .rotate-box:hover { transform: rotate(45deg); }
    .scale-box:hover { transform: scale(1.2); }
    .skew-box:hover { transform: skew(10deg, 5deg); }
    .multi-box:hover { transform: translateY(-10px) rotate(10deg) scale(1.1); }
    .origin-box { transform-origin: top left; }
    .origin-box:hover { transform: rotate(45deg); }
    .custom-transition { transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55), background 0.3s; }
    .custom-transition:hover { transform: scale(1.2) rotate(10deg); background: linear-gradient(135deg, #f093fb, #f5576c); }
    .button { display: inline-block; padding: 14px 32px; background: #1565c0; color: white; border: none; border-radius: 50px; font-size: 16px; font-weight: bold; cursor: pointer; transition: all 0.3s ease; margin: 10px; }
    .button:hover { transform: translateY(-3px); box-shadow: 0 8px 25px rgba(21, 101, 192, 0.4); }
    .button:active { transform: translateY(0); box-shadow: 0 2px 8px rgba(21, 101, 192, 0.3); }
  </style>
</head>
<body>
  <h1>Transform & Transition</h1>
  <p>Hover kursor di atas kotak-kotak di bawah!</p>
  <div class="demo-grid">
    <div class="box translate-box">Translate</div>
    <div class="box rotate-box">Rotate</div>
    <div class="box scale-box">Scale</div>
    <div class="box skew-box">Skew</div>
    <div class="box multi-box">Multiple</div>
    <div class="box origin-box">Origin TL</div>
    <div class="box custom-transition">Custom</div>
  </div>
  <h3>Tombol dengan Efek Hover</h3>
  <button class="button">Hover aku!</button>
  <button class="button" style="background:#e53935;">Klik aku!</button>
  <blockquote><strong>Tips:</strong> Untuk performa animasi terbaik, gunakan <code>transform</code> dan <code>opacity</code>. Hindari menganimasi <code>width</code> atau <code>height</code>.</blockquote>
</body>
</html>`
  },
  {
    id: 17,
    title: "Bab 17: Keyframe Animations",
    theory: `
      <h2>Keyframe Animations — Gerakan Berkelanjutan</h2>
      <h3>Apa itu Keyframe Animation?</h3>
      <p>Berbeda dengan <code>transition</code> yang hanya berlangsung saat ada perubahan state (hover, focus), <strong>keyframe animation</strong> bisa berjalan <strong>otomatis, berulang, dan memiliki banyak tahapan (keyframes)</strong>.</p>
      <h3>@keyframes — Mendefinisikan Animasi</h3>
      <pre><code>@keyframes nama-animasi {\n  from { /* atau 0% */ }\n  to   { /* atau 100% */ }\n}\n\n/* Contoh: */\n@keyframes fadeIn {\n  from { opacity: 0; transform: translateY(20px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n/* Multi tahap: */\n@keyframes pulse {\n  0%   { transform: scale(1); }\n  50%  { transform: scale(1.1); }\n  100% { transform: scale(1); }\n}</code></pre>
      <h3>animation Shorthand</h3>
      <pre><code>.element {\n  animation: name duration timing-function delay iteration-count direction fill-mode;\n}\n\n/* Contoh lengkap: */\n.spinner {\n  animation: spin 1s linear infinite;\n}\n\n/* Property terpisah: */\nanimation-name: spin;\nanimation-duration: 2s;\nanimation-timing-function: ease-in-out;\nanimation-delay: 0.5s;\nanimation-iteration-count: infinite; /* atau 3 */\nanimation-direction: normal | reverse | alternate | alternate-reverse;\nanimation-fill-mode: none | forwards | backwards | both;\nanimation-play-state: running | paused;</code></pre>
      <h3>animation-direction</h3>
      <pre><code>normal:          0% → 100% (default)\nreverse:         100% → 0%\nalternate:       0% → 100% → 0% (bolak-balik)\nalternate-reverse: 100% → 0% → 100%</code></pre>
      <h3>animation-fill-mode</h3>
      <pre><code>none:      Kembali ke gaya awal setelah animasi\nforwards:  Tetap di keyframe terakhir (100%)\nbackwards: Terapkan gaya keyframe pertama (0%) sebelum delay\nboth:      Gabungan forwards + backwards</code></pre>
      <h3>Animation vs Transition</h3>
      <table border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:16px 0;">
        <tr><th>Aspek</th><th>Transition</th><th>Animation</th></tr>
        <tr><td>Trigger</td><td>State berubah (hover, dll)</td><td>Otomatis (atau via class)</td></tr>
        <tr><td>Iterasi</td><td>Sekali</td><td>Bisa infinite</td></tr>
        <tr><td>Tahapan</td><td>Awal → Akhir</td><td>Multi tahap (0%, 50%, 100%)</td></tr>
        <tr><td>Kontrol</td><td>Terbatas</td><td>Lebih banyak (arah, mode, dll)</td></tr>
      </table>
      <h3>Popular Animations</h3>
      <pre><code>/* Pulse */\n@keyframes pulse {\n  0%, 100% { transform: scale(1); }\n  50% { transform: scale(1.05); }\n}\n\n/* Bounce */\n@keyframes bounce {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-20px); }\n}\n\n/* Spin */\n@keyframes spin {\n  to { transform: rotate(360deg); }\n}\n\n/* Shake */\n@keyframes shake {\n  0%, 100% { transform: translateX(0); }\n  25% { transform: translateX(-10px); }\n  75% { transform: translateX(10px); }\n}</code></pre>
      <blockquote><strong>Performance Tips:</strong> Animasi yang hanya menggunakan <strong>transform</strong> dan <strong>opacity</strong> bisa di-accelerate oleh GPU (60fps). Hindari menganimasi <code>width</code>, <code>height</code>, <code>top</code>, <code>left</code>, <code>margin</code>, <code>padding</code>. Gunakan <code>will-change: transform, opacity</code> untuk memberi tahu browser elemen yang akan di-animasi.</blockquote>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bab 17: Keyframe Animations</title>
  <style>
    body { font-family: 'Segoe UI', sans-serif; padding: 20px; background: #1a1a2e; text-align: center; color: white; }
    h1 { color: #e94560; }
    .demo-grid { display: flex; flex-wrap: wrap; gap: 40px; justify-content: center; margin: 40px 0; }
    .anim-box { width: 100px; height: 100px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; }

    /* Pulse */
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.15); }
    }
    .pulse { animation: pulse 1.5s ease-in-out infinite; background: linear-gradient(135deg, #e94560, #c23152); }

    /* Bounce */
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-30px); }
    }
    .bounce { animation: bounce 1s ease-in-out infinite; background: linear-gradient(135deg, #0f3460, #16213e); }

    /* Spin */
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    .spin { animation: spin 2s linear infinite; border-radius: 50%; background: conic-gradient(#e94560, #667eea, #e94560); }

    /* Shake */
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-12px); }
      75% { transform: translateX(12px); }
    }
    .shake { animation: shake 0.5s ease-in-out infinite; background: linear-gradient(135deg, #f093fb, #f5576c); }

    /* Fade In + Slide Up */
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .fade-in-up { animation: fadeInUp 1s ease forwards; background: linear-gradient(135deg, #4facfe, #00f2fe); }

    /* Combined */
    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      33% { transform: translateY(-15px) rotate(3deg); }
      66% { transform: translateY(-5px) rotate(-3deg); }
    }
    .float { animation: float 3s ease-in-out infinite; background: linear-gradient(135deg, #43e97b, #38f9d7); }

    /* Loading bar */
    @keyframes loading {
      from { width: 0%; }
      to { width: 100%; }
    }
    .loading-bar { width: 300px; height: 8px; background: #333; border-radius: 4px; margin: 20px auto; overflow: hidden; }
    .loading-bar-fill { height: 100%; background: linear-gradient(90deg, #667eea, #e94560); animation: loading 2s ease-in-out infinite; border-radius: 4px; }
  </style>
</head>
<body>
  <h1>Keyframe Animations</h1>
  <div class="demo-grid">
    <div class="anim-box pulse">Pulse</div>
    <div class="anim-box bounce">Bounce</div>
    <div class="anim-box spin">Spin</div>
    <div class="anim-box shake">Shake</div>
    <div class="anim-box fade-in-up">Fade Up</div>
    <div class="anim-box float">Float</div>
  </div>
  <h3>Loading Bar</h3>
  <div class="loading-bar">
    <div class="loading-bar-fill"></div>
  </div>
  <h3>Animation Properties</h3>
  <div style="text-align:left;max-width:500px;margin:20px auto;background:#16213e;padding:20px;border-radius:12px;">
    <p><strong>animation:</strong> name duration timing-function delay iteration-count direction fill-mode;</p>
    <p>Coba ubah nilai di @keyframes atau property animation-nya untuk lihat perubahan!</p>
  </div>
</body>
</html>`
  },
  {
    id: 18,
    title: "Bab 18: CSS Variables (Custom Properties)",
    theory: `
      <h2>CSS Variables (Custom Properties) — Kode CSS yang Lebih Cerdas</h2>
      <h3>Apa itu CSS Variables?</h3>
      <p>CSS Variables (resminya <strong>Custom Properties</strong>) memungkinkan kita menyimpan nilai CSS ke dalam <strong>variabel</strong> dan menggunakannya di banyak tempat. Ini bikin CSS lebih <strong>DRY (Don't Repeat Yourself)</strong>, mudah di-maintain, dan mendukung <strong>dynamic theming</strong>.</p>
      <h3>Mendeklarasikan Variabel</h3>
      <p>Gunakan <strong>dua tanda hubung (--)</strong> diikuti nama variabel. Biasanya dideklarasikan di <code>:root</code> agar global.</p>
      <pre><code>:root {\n  --primary: #1565c0;\n  --danger: #e53935;\n  --success: #2e7d32;\n  --text-color: #333;\n  --border-radius: 8px;\n  --shadow: 0 2px 8px rgba(0,0,0,0.1);\n}</code></pre>
      <h3>Menggunakan Variabel — var()</h3>
      <pre><code>.btn {\n  background: var(--primary);\n  color: white;\n  border-radius: var(--border-radius);\n  box-shadow: var(--shadow);\n}\n\n.btn-danger {\n  background: var(--danger);\n}</code></pre>
      <h3>Default Value di var()</h3>
      <p>Bisa kasih <strong>nilai fallback</strong> kalau variabel gak terdefinisi:</p>
      <pre><code>.card {\n  background: var(--card-bg, white); /* Fallback: white */\n  color: var(--text-color, #333);\n  border: 1px solid var(--border-color, #ddd);\n}</code></pre>
      <h3>Scope — Variabel Bisa Lokal</h3>
      <p>CSS Variables mengikuti aturan <strong>cascade</strong> — bisa di-override di scope tertentu.</p>
      <pre><code>.card {\n  --card-padding: 16px;\n  padding: var(--card-padding);\n}\n\n.card-large {\n  --card-padding: 32px; /* Override lokal */\n}</code></pre>
      <h3>Dynamic Theming (Dark/Light Mode)</h3>
      <p>Dengan CSS Variables, ganti tema jadi semudah mengganti nilai variabel:</p>
      <pre><code>:root {\n  --bg: #ffffff;\n  --text: #1a1a1a;\n  --card-bg: #f5f5f5;\n}\n\n[data-theme="dark"] {\n  --bg: #1a1a2e;\n  --text: #e0e0e0;\n  --card-bg: #16213e;\n}\n\nbody {\n  background: var(--bg);\n  color: var(--text);\n}</code></pre>
      <h3>Update via JavaScript</h3>
      <p>Kita bisa ubah variabel CSS langsung dari JavaScript — ini yang bikin theming jadi powerful!</p>
      <pre><code>// Ubah satu variabel:\ndocument.documentElement.style.setProperty('--primary', '#e94560');\n\n// Ganti tema:\nfunction setTheme(theme) {\n  if (theme === 'dark') {\n    document.documentElement.setAttribute('data-theme', 'dark');\n  } else {\n    document.documentElement.removeAttribute('data-theme');\n  }\n}</code></pre>
      <h3>Best Practices</h3>
      <ul>
        <li>Deklarasikan <strong>semua warna utama</strong> sebagai variabel di :root</li>
        <li>Gunakan nama yang <strong>semantik</strong> (<code>--primary</code>, <code>--text-muted</code>) bukan deskriptif (<code>--red</code>, <code>--blue</code>)</li>
        <li>Buat file <code>variables.css</code> terpisah untuk project besar</li>
        <li>Variabel bisa di-calc: <code>--spacing: 8px; margin: calc(var(--spacing) * 2);</code></li>
        <li>CSS Variables <strong>gak bisa dipake di media queries</strong> — tapi bisa dipake di dalam blok media query</li>
      </ul>
      <blockquote><strong>Best Practice:</strong> CSS Variables mengubah cara kita menulis CSS secara fundamental. Mulai gunakan variabel sejak dini, terutama untuk <strong>warna, spacing, font-size, dan border-radius</strong>. Ini bikin theming dan maintenance jauh lebih mudah.</blockquote>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bab 18: CSS Variables</title>
  <style>
    /* ============================================ */
    /* 🎯 TUGAS: Mainkan CSS Variables!             */
    /* Ubah nilai variabel di :root atau via JS     */
    /* untuk melihat dynamic theming.              */
    /* ============================================ */

    :root {
      /* 🎯 COBA: Ubah nilai-nilai di bawah */
      --primary: #1565c0;
      --danger: #e53935;
      --success: #2e7d32;
      --warning: #f9a825;
      --bg: #f5f5f5;
      --text: #1a1a1a;
      --card-bg: #ffffff;
      --radius: 12px;
      --shadow: 0 2px 12px rgba(0,0,0,0.1);
      --font: 'Segoe UI', sans-serif;
    }

    /* Dark mode — aktifkan via JavaScript */
    [data-theme="dark"] {
      --primary: #64b5f6;
      --danger: #ef5350;
      --success: #66bb6a;
      --warning: #ffd54f;
      --bg: #121212;
      --text: #e0e0e0;
      --card-bg: #1e1e1e;
      --shadow: 0 2px 12px rgba(0,0,0,0.5);
    }

    body {
      font-family: var(--font);
      background: var(--bg);
      color: var(--text);
      margin: 0;
      padding: 20px;
      transition: background 0.3s, color 0.3s;
    }

    h1 { color: var(--primary); text-align: center; }

    .container { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; }

    .card {
      background: var(--card-bg);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      padding: 24px;
      width: 200px;
      text-align: center;
      transition: all 0.3s;
    }

    .btn {
      display: inline-block;
      padding: 12px 24px;
      border: none;
      border-radius: var(--radius);
      font-weight: bold;
      cursor: pointer;
      margin: 8px;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .btn:hover { transform: translateY(-2px); box-shadow: var(--shadow); }
    .btn-primary { background: var(--primary); color: white; }
    .btn-danger { background: var(--danger); color: white; }
    .btn-success { background: var(--success); color: white; }

    .controls { text-align: center; margin: 30px 0; }
    .controls button { margin: 8px; }
  </style>
</head>
<body>
  <h1>CSS Variables (Custom Properties)</h1>

  <div class="controls">
    <button class="btn btn-primary" onclick="document.documentElement.removeAttribute('data-theme')">☀️ Light Mode</button>
    <button class="btn btn-danger" onclick="document.documentElement.setAttribute('data-theme', 'dark')">🌙 Dark Mode</button>
    <button class="btn btn-success" onclick="document.documentElement.style.setProperty('--primary', '#e94560'); this.style.background='#e94560';">🎨 Ganti Primary</button>
  </div>

  <div class="container">
    <div class="card">
      <h3 style="color:var(--primary);">Card 1</h3>
      <p>Background dan teks menggunakan CSS Variables.</p>
    </div>
    <div class="card">
      <h3 style="color:var(--success);">Card 2</h3>
      <p>Ganti tema lihat perubahannya secara instan!</p>
    </div>
    <div class="card">
      <h3 style="color:var(--danger);">Card 3</h3>
      <p>CSS Variables membuat theming semudah mengganti nilai.</p>
    </div>
  </div>

  <blockquote style="max-width:600px;margin:30px auto;text-align:center;">
    Klik tombol Dark Mode — atau klik "Ganti Primary" untuk lihat dynamic theming!
    Semua perubahan dilakukan via JavaScript yang mengupdate CSS Variables.
  </blockquote>
</body>
</html>`
  }
];
