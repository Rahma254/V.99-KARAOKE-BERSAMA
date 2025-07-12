import React from 'react';

// Komponen ini akan menampilkan semua info pembayaran dan kontak
export default function PaymentInfo() {

    const gopayNumber = '0895340205302';
    const waAdminNumber = '6285810526151'; // Format internasional untuk link wa.me

    // Fungsi untuk menyalin nomor GoPay ke clipboard
    const handleCopyGopay = (). => {
        navigator.clipboard.writeText(gopayNumber)
            .then(() => {
                alert('Nomor GoPay berhasil disalin!');
            })
            .catch(err => {
                console.error('Gagal menyalin teks: ', err);
                alert('Gagal menyalin nomor.');
            });
    };

    return (
        <div className="payment-container">
            {/* Kartu untuk Pembayaran GoPay */}
            <div className="payment-card">
                <h2>Pembayaran via GoPay</h2>
                <p>Silakan scan QR Code di bawah ini menggunakan aplikasi Gojek Anda.</p>
                
                <img 
                    src="https://i.ibb.co/tZ5w7S6/image.png" // Ini link langsung ke gambar QR Anda
                    alt="QR Code GoPay" 
                    className="qr-code"
                />

                <p>Atau transfer manual ke nomor:</p>
                <div className="gopay-details">
                    <span className="gopay-number">{gopayNumber}</span>
                    <button onClick={handleCopyGopay} className="copy-button">
                        Salin
                    </button>
                </div>
            </div>

            {/* Kartu untuk Kontak Admin */}
            <div className="payment-card">
                <h2>Butuh Bantuan?</h2>
                <p>
                    Jika mengalami kendala atau ingin konfirmasi pembayaran,
                    silakan hubungi admin kami melalui WhatsApp.
                </p>
                <a 
                    href={`https://wa.me/${waAdminNumber}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="whatsapp-button"
                >
                    Chat Admin di WhatsApp
                </a>
            </div>
        </div>
    );
}
