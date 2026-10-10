# Product Requirements Document (PRD)
## Platform Pembelajaran Web Development Interaktif (Fase 1: Modul HTML)

---

## 1. Ringkasan Eksekutif (Executive Summary)
Produk ini adalah sebuah platform website interaktif satu halaman (*Single Page Application* sederhana) yang dirancang untuk menjadi modul pembelajaran mandiri untuk *Web Development*. Platform ini menggunakan pendekatan "belajar sambil praktek" di mana materi teori disandingkan langsung dengan *live code editor* dan *preview*. 
Pada Fase 1 (MVP), platform akan berfokus 100% pada penyelesaian Modul HTML, dengan menyiapkan kerangka arsitektur (struktur UI dan navigasi) yang dapat dengan mudah diskalakan untuk menampung Modul CSS dan JavaScript di masa depan.

## 2. Tujuan & Sasaran (Goals & Objectives)
*   **Interaktivitas:** Menyediakan area *live coding* di mana pengguna dapat mengetik kode HTML dan langsung melihat hasilnya (*live preview*) tanpa perlu menginstal *code editor* eksternal.
*   **Kemudahan Manajemen Konten:** Merancang struktur data (menggunakan array objek/JSON di JavaScript) agar instruktur/AI dapat dengan mudah menambah atau memodifikasi bab pembelajaran tanpa merombak struktur HTML utama.
*   **Skalabilitas:** Membangun antarmuka yang menyediakan slot yang dikunci (*locked/coming soon*) untuk modul CSS dan JavaScript.
*   **Responsivitas:** Memastikan website dapat digunakan dengan nyaman baik di desktop (tampilan *split-screen*) maupun mobile (tampilan *stack* atas-bawah).

## 3. Target Pengguna
*   Pemula mutlak yang belum memiliki pengalaman *coding*.
*   Pelajar yang lebih suka praktek langsung daripada hanya membaca teori panjang lebar.
*   Pengguna yang ingin belajar melalui *browser* tanpa repot melakukan instalasi perangkat lunak (VS Code, dll).

## 4. Ruang Lingkup MVP (Fase 1: HTML Only)
Platform harus mencakup fitur-fitur inti berikut:

### A. Navigasi Samping (Sidebar)
*   Menampilkan daftar Modul Utama (HTML, CSS, JS).
*   **Modul HTML** (Aktif dan bisa di-*expand*):
    *   Bab 1: Pengenalan HTML & Struktur Dasar
    *   Bab 2: Text Formatting & Paragraf
    *   Bab 3: Links (Hyperlinks) & Gambar
    *   Bab 4: Lists (Unordered & Ordered)
    *   Bab 5: Tables
    *   Bab 6: Forms Dasar
    *   Bab 7: HTML5 Semantic Elements
*   **Modul CSS & JS** (Ditampilkan namun dengan status *disabled* atau *locked icon*).

### B. Area Konten Utama (Main Content Area)
*   **Judul Bab:** Menampilkan judul materi yang sedang dipelajari.
*   **Teks Materi:** Area teks kaya (*rich text*) untuk penjelasan teori, contoh kode statis, dan gambar ilustrasi (jika ada).
*   **Navigasi Halaman:** Tombol "Bab Sebelumnya" dan "Bab Selanjutnya" di bagian bawah konten.

### C. Area Interaktif (Live Code Playground)
*   Terletak di sebelah kanan (desktop) atau di bawah konten (mobile).
*   **Code Editor:** Textarea dengan *syntax highlighting* sederhana (opsional untuk MVP) atau setidaknya teks *monospace* dengan warna latar gelap (tema *dark mode* pada editor). Editor ini sudah terisi dengan contoh kode bawaan sesuai materi bab yang sedang dibuka.
*   **Live Output (Preview):** Sebuah `<iframe>` atau kontainer `<div>` yang me-render hasil ketikan dari Code Editor secara *real-time* atau dipicu oleh tombol "Run Code".
*   **Tombol Reset:** Untuk mengembalikan kode ke contoh awal bawaan bab tersebut.

## 5. Spesifikasi Teknis & Arsitektur
Untuk memastikan kemudahan bagi AI dalam men-generate (*prompting*) dan mengedit (*maintenance*), sistem harus menggunakan stack *vanilla*:
*   **HTML5:** Struktur dasar yang semantik.
*   **CSS3:** *Vanilla CSS* murni (tanpa framework/Tailwind) agar kode terpusat dan mudah di-*copy-paste*. Desain modern minimalis, mendukung *Flexbox* / *CSS Grid*.
*   **JavaScript (Vanilla ES6):** 
    *   Digunakan untuk merender konten secara dinamis tanpa *reload* halaman.
    *   Logika *Live Preview*: Mengambil *value* dari textarea dan memasukkannya ke dalam `innerHTML` milik div output atau melalui `srcdoc` pada iframe.
*   **Struktur Data Konten (Sangat Penting):**
    Seluruh materi HTML **harus** disimpan dalam sebuah *Array of Objects* di dalam JavaScript untuk memudahkan penambahan materi oleh AI nanti.
    *Contoh format data:*
    ```javascript
    const htmlModules = [
      {
        id: 1,
        title: "Pengenalan HTML",
        theory: "<p>HTML adalah kerangka website...</p>",
        initialCode: "<h1>Halo Dunia</h1>",
      },
      // bab selanjutnya...
    ];
    ```

## 6. Panduan UI/UX (Desain)
*   **Tema:** Modern, profesional, kombinasi latar belakang terang untuk area baca (*off-white/light gray*) dan latar belakang gelap (*dark navy/charcoal*) untuk area *Code Editor*.
*   **Tipografi:** *Sans-serif* modern (seperti Inter, Roboto, atau Segoe UI) untuk teks utama, dan *Monospace* (seperti Fira Code, Consolas) untuk editor.
*   **Layout Desktop:** Layar terbagi (*Split Screen*).
    *   20%: Sidebar Navigasi.
    *   40%: Konten Teori.
    *   40%: Code Playground (dibagi vertikal: atas untuk Editor, bawah untuk Output).
*   **Layout Mobile:** Tersusun vertikal (Sidebar diciutkan menjadi menu *hamburger*, lalu Teori -> Editor -> Output).

## 7. Metrik Keberhasilan (Success Criteria) untuk Prompting AI
Ketika PRD ini diberikan kepada AI untuk *code generation*, hasilnya harus berupa:
1.  **Berjalan sempurna sebagai file lokal (file `index.html`, `style.css`, `script.js`).**
2.  **Tidak ada error di console browser.**
3.  **Data materi dan struktur UI terpisah dengan baik (mematuhi struktur data JSON di poin 5).**
4.  **Live editor merender tag HTML dasar (h1, p, b, i, a, img) dengan benar ke dalam area output.**

## 8. Panduan Menggunakan PRD ini untuk AI Developer (Meta-Prompt)
*(Bagian ini ditujukan untuk AI pembuat kode)*
"Sebagai AI, baca PRD di atas. Tugas Anda sekarang adalah menghasilkan kerangka awal (*boilerplate*) dari aplikasi ini. Buatkan 3 file dasar (HTML, CSS, JS). Untuk tahap awal ini, cukup buatkan **2 Bab pertama** di dalam data JavaScript (sebagai purwarupa/MVP). Pastikan fitur sinkronisasi *Live Preview* dari *textarea* ke *output container* sudah berfungsi dengan baik menggunakan Vanilla JS."
