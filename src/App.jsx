import React from 'react';
import jsPDF from 'jspdf';
import logo from './assets/img/logo.png'

function App() {
  const downloadPDF = () => {

    const doc = new jsPDF();

    const imgData = logo; 
    doc.addImage(imgData, 'PNG', 20, 10, 30, 38);

    const opacity = 0.2;
    const gState = new doc.GState({opacity: opacity});
    doc.setGState(gState);
    doc.addImage(imgData, 'PNG', 75, 120, 60, 82);
    doc.setGState(new doc.GState({opacity: 1}));

    doc.setFont('helvetica', 'bold'); 
    doc.setFontSize(16); 
    doc.text(`PEMERINTAH KABUPATEN WAY KANAN`, 120, 18, { align: 'center' });
    doc.text(`DINAS PERKEBUNAN`, 120, 25, 'center');
    doc.setFontSize(11);   
    doc.text(`Jalan Jalaludin Sutan Alamsyah Nomor 15 Komplek Perkantoran`, 120, 32, 'center');
    doc.text(`PEMDA KM. 2 Blambangan Umpu - 34711`, 120, 39, 'center');
    doc.text(`Telepon/Fax (0723) 461203`, 120, 44, 'center');
    doc.setLineWidth(0.6); 
    doc.line(10, 50, 200, 50);
     
    doc.setFont('helvetica', 'normal'); 
    doc.text(`SURAT TANDA DAFTAR USAHA BUDIDAYA TANAMAN PERKEBUNAN (STD-B)`, 105, 58, 'center');
    doc.setLineWidth(0.3);
    doc.line(15, 63, 195, 63); 

    doc.text(`KABUPATEN`, 25, 75);
    doc.text(`: KAB. WAY KANAN`, 65, 75);
    doc.text(`KECAMATAN`, 25, 80);
    doc.text(`: Negara Batin`, 65, 80);
    doc.text(`Nomor`, 25, 90);
    doc.text(`: 65dd753e12690359cbc59add/ 01 /STDB/IV.05-WK/2024`, 65, 90);

    doc.setFont('helvetica', 'bold'); 
    doc.text(`A. Keterangan Pemilik`, 25, 100);
    doc.setFont('helvetica', 'normal'); 
    doc.text(`1. Nama`, 30, 105);
    doc.text(`:  Nur Rohim`, 90, 105);
    doc.text(`2. Tempat / Tanggal Lahir`, 30, 110);
    doc.text(`:  Karta Jaya , 30 Juli 1987`, 90, 110);
    doc.text(`3. Nomor KTP`, 30, 115);
    doc.text(`:  1808113007870002`, 90, 115);
    doc.text(`4. Alamat`, 30, 120);
    doc.text(`:  Karta Jaya , Negara Batin`, 90, 120);
    doc.text(`   KAB. WAY KANAN, LAMPUNG`, 90, 125);
    
    doc.setFont('helvetica', 'bold'); 
    doc.text(`B. Data Kebun`, 25, 135);
    doc.setFont('helvetica', 'normal'); 
    doc.text(`- Lokasi, Titik Koordinat Kebun`, 30, 140);
    doc.text(`:  Negara Batin / Latitude -4.3567483`, 90, 140);
    doc.text(`   Longitude 104.9294367`, 90, 145);
    doc.text(`- Status Kepemilikan Lahan`, 30, 150);
    doc.text(`:  SHM`, 90, 150);
    doc.text(`- Nomor`, 30, 155);
    doc.text(`:  0`, 90, 155);
    doc.text(`- Luas Areal`, 30, 160);
    doc.text(`:  2Ha`, 90, 160);
    doc.text(`- Jenis Tanaman`, 30, 165);
    doc.text(`:  Sawit`, 90, 165);
    doc.text(`- Produksi per hektar per tahun`, 30, 170);
    doc.text(`:  0`, 90, 170);
    doc.text(`- Asal Benih`, 30, 175);
    doc.text(`:  ppks`, 90, 175);
    doc.text(`- Jumlah Pohon`, 30, 180);
    doc.text(`:  280`, 90, 180);
    doc.text(`- Pola Tanam`, 30, 185);
    doc.text(`:  Tumpang Sari`, 90, 185);
    doc.text(`- Jenis Pupuk`, 30, 190);
    doc.text(`:  NPK`, 90, 190);
    doc.text(`- Mitra Pengolahan`, 30, 195);
    doc.text(`:  Pengepul`, 90, 195);
    doc.text(`- Jenis Tanah`, 30, 200);
    doc.text(`:  Podsolik merah kuning berpasir`, 90, 200);
    doc.text(`- Tahun Tanam`, 30, 205);
    doc.text(`:  2022`, 90, 205);
    doc.text(`- Usaha Lain dilahan Kebun`, 30, 210);
    doc.text(`:  `, 90, 210);
    doc.text(`Catatan :`, 25, 215);
    doc.text(`STD-B ini tidak berlaku apabila terjadi perubahan informasi tersebut diatas`, 25, 220);
    
    doc.text(`Blambangan Umpu, 28 Februari 2024`, 125, 230);
    doc.setFont('helvetica', 'bold'); 
    doc.text(`A.n. Bupati`, 135, 235);
    doc.text(`Kepala Dinas Perkebunan`, 135, 240);
    doc.text(`Kabupaten Way Kanan`, 135, 245);
    
    doc.text(`ROFIKI, S.T.P., MM.`, 135, 265);
    doc.text(`Pembina Tk. I`, 135, 270);
    doc.text(`NIP. 19760622 200701 1 005`, 135, 275);
    doc.setFont('helvetica', 'normal'); 
    
    doc.text(`Tembusan disampakan kepada Yth :`, 25, 280);
    doc.text(`1. Bupati Way Kanan`, 30, 285);
    doc.text(`2. Arsip`, 30, 290);
    
    doc.setLineWidth(1); 
    doc.rect(5, 7, 200, 287);
    
    doc.save('Surat.pdf');
  };
  return (
    <div className="container mt-5">
    <h1 className="text-center mb-4">Surat</h1>
    <div className="text-center">
      <button className="btn btn-primary" onClick={downloadPDF}>
        Unduh Surat dalam PDF
      </button>
    </div>
  </div>
  );
}

export default App;
