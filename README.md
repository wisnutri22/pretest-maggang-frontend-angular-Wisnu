# Soal test maggang Backend engineer dengan Springboot

Berikut adalah soal/pertanyaan yang perlu dijawab oleh peserta maggang

## knowledge base

1. Apa yang anda ketahui tentang Rest API?
REST API adalah sebuah arsitektur untuk membangun layanan web yang memungkinkan komunikasi antara client dan server menggunakan protokol HTTP, 
dengan menggunakan metode seperti GET, POST, PUT, dan DELETE untuk melakukan operasi pada sumber daya.

2. Apa yang anda ketahui tentang Server side and Client side processing?
Server-side processing adalah pemrosesan yang dilakukan di server sebelum mengirim data ke client, 
sementara client-side processing adalah pemrosesan yang dilakukan di browser pengguna setelah data diterima dari server.

3. Apa yang anda ketahui tentang Design pattern Dependency Injection?
Dependency Injection adalah pola desain yang memungkinkan objek untuk menerima dependensi mereka dari luar daripada membuatnya 
sendiri, yang membantu meningkatkan modularitas dan mempermudah pengujian.

4. Apa yang anda ketahui tentang Design pattern Dependency Injection?
Dependency Injection (DI) adalah pola desain yang memungkinkan objek menerima dependensi dari luar, bukan membuatnya sendiri, untuk meningkatkan modularitas, memudahkan pengujian, 
dan mengelola siklus hidup objek. Contohnya, dalam TypeScript, sebuah kelas Service menerima Repository melalui konstruktor, membuatnya lebih fleksibel dan mudah diuji.

5. Apa yang anda ketahui tentang Typescript dan Angular framework?
TypeScript adalah superset dari JavaScript yang menambahkan tipe statis, sementara Angular adalah framework untuk 
membangun aplikasi web dinamis dengan menggunakan TypeScript, menyediakan struktur dan alat untuk pengembangan yang lebih efisien.

66. Apa yang anda ketahui tentang Microfrontend?
Microfrontend adalah arsitektur di mana aplikasi frontend dibagi menjadi bagian-bagian kecil yang dapat dikembangkan, di-deploy, 
dan dikelola secara independen, memungkinkan tim untuk bekerja secara paralel dan meningkatkan skalabilitas.

## Design modules

Dalam suatu schenario ada requirement membuat aplikasi e-commerse seperti Tokopedia seperti berikut:

1. Catalog, pelanggan mencari product di toko
    ![catalog](imgs/catalog.png)
2. Item, bisa melihat detail informasi produk
    ![items](imgs/item.png)
3. Cart, pelanggan bisa menambahkan produk yang ingin di beli ke keranjang
    ![cart](imgs/cart.png)
4. Setelah di checkout, masuk ke list transaction
    ![list-transaction](imgs/list-transaction.png)
5. Kita juga bisa liat detail transactionya
    ![detail-transaction](imgs/detail-transaction.png)

Kemudian temen-temen buat serta jelankan component communication terkait design UI/UX tersebut. contohnya coba breakdown componenet yang ada di module catalog trus coba dijelaskan gimana comunikasinya antara module tersebut.

Jawaban 
1. Catalog
Deskripsi: Tempat pelanggan mencari produk.
Komponen:
Product List: Menampilkan daftar produk.
Search Bar: Memungkinkan pencarian produk berdasarkan nama atau tag.
Komunikasi: Ketika pelanggan menggunakan Search Bar, event pencarian akan memfilter Product List untuk menampilkan hasil yang relevan.
2. Item Detail
Deskripsi: Menampilkan informasi detail produk saat pelanggan memilih item.
Komponen:
Item Description: Menampilkan deskripsi dan spesifikasi produk.
Add to Cart Button: Tombol untuk menambahkan produk ke keranjang.
Komunikasi: Setelah produk dipilih di Catalog, informasi produk akan dikirim ke Item Detail untuk ditampilkan. Klik tombol "Add to Cart" akan mengirimkan event ke komponen Cart.
3. Cart
Deskripsi: Tempat pelanggan menambahkan produk yang ingin dibeli.
Komponen:
Product List in Cart: Menampilkan produk yang telah ditambahkan.
Checkout Button: Tombol untuk memproses pembayaran.
Komunikasi: Cart menerima data produk dari Item Detail saat tombol "Add to Cart" diklik. Setelah pelanggan menyelesaikan checkout, event checkout akan dikirim ke modul Transaction.
4. Transaction List
Deskripsi: Menampilkan daftar transaksi yang telah dilakukan.
Komponen:
Transaction Summary: Ringkasan transaksi.
View Detail Button: Tombol untuk melihat detail transaksi.
Komunikasi: Setelah checkout selesai, data transaksi baru akan ditambahkan ke Transaction List. Klik "View Detail" akan mengarahkan pelanggan ke detail transaksi.
5. Transaction Detail
Deskripsi: Menampilkan rincian transaksi yang telah dilakukan.
Komponen:
Transaction Items: Daftar produk yang dibeli dalam transaksi.
Total Price: Menampilkan total biaya transaksi.
Komunikasi: Mengambil data dari Transaction List saat pelanggan memilih untuk melihat detail transaksi, menampilkan informasi terkait.

## Praktek

Berdasarkan analisa tersebut, buat project monorepo (pada repository ini) dengan menggunakan framework [angular.io](https://angular.io/) seperti berikut specifikasinya:

- Data: data yang diperoleh harus menggunakan Rest API, temen-temen boleh menggunakan dummy api seperti [mockachino](https://www.mockachino.com/), [firebase](https://firebase.google.com/) atau sejenisnya
- CSS Framework: bebas, contohnya bootstrap, materialize-css, tailwindcss dan lain-lain
- arhitecture: Silahkan pilih monolith atau microfrontend
