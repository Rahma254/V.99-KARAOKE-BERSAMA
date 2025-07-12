import { useState } from 'react';
import ItemGallery from '../components/ItemGallery'; // Kita akan buat ini
import ConfirmationModal from '../components/ConfirmationModal'; // Dan ini juga
import Head from 'next/head'; // Opsional, untuk SEO di Next.js

// --- DATABASE ITEM ANDA ---
// Untuk kerapian, ini bisa juga dipisah ke file sendiri, misal: src/data/items.js
const itemsData = [
    { id: 'boxing-glove', name: 'Boxing Glove', price: 50, imageUrl: 'https://img.icons8.com/emoji/48/boxing-glove-emoji.png' },
    { id: 'badminton', name: 'Badminton', price: 20, imageUrl: 'https://img.icons8.com/emoji/48/badminton-emoji.png' },
    { id: 'bullseye', name: 'Bullseye', price: 100, imageUrl: 'https://img.icons8.com/emoji/48/bullseye.png' },
    // ... (salin sisa data item dari script sebelumnya di sini) ...
    { id: 'sauropod', name: 'Sauropod', price: 5000, imageUrl: 'https://img.icons8.com/emoji/48/sauropod.png' }
];

export default function TokoPage() {
    // State untuk mengelola saldo pengguna
    const [userBalance, setUserBalance] = useState(250000); 
    // State untuk mengelola modal konfirmasi
    const [selectedItem, setSelectedItem] = useState(null);

    // Fungsi untuk memformat angka menjadi Rupiah
    const formatRupiah = (number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(number);
    };

    const handleItemClick = (itemId) => {
        const item = itemsData.find(i => i.id === itemId);
        setSelectedItem(item);
    };

    const handleCloseModal = () => {
        setSelectedItem(null);
    };

    const handleConfirmPurchase = () => {
        if (!selectedItem) return;

        if (userBalance >= selectedItem.price) {
            setUserBalance(currentBalance => currentBalance - selectedItem.price);
            alert(`Berhasil mengirim hadiah "${selectedItem.name}"!`);
            // TODO: Tambahkan logika kirim notifikasi ke backend/host
        } else {
            alert('Maaf, saldo Anda tidak mencukupi.');
        }

        handleCloseModal();
    };

    return (
        <>
            <Head>
                <title>Toko Hadiah Virtual</title>
            </Head>

            <header className="header-container">
                <h1>Kirim Hadiah Simpatik</h1>
                <div className="user-balance">
                    <span>Saldo: {formatRupiah(userBalance)}</span>
                </div>
            </header>

            <main>
                <ItemGallery items={itemsData} onItemClick={handleItemClick} formatRupiah={formatRupiah} />
            </main>

            {/* Modal akan muncul jika ada item yang dipilih */}
            {selectedItem && (
                <ConfirmationModal
                    item={selectedItem}
                    onClose={handleCloseModal}
                    onConfirm={handleConfirmPurchase}
                    formatRupiah={formatRupiah}
                />
            )}
        </>
    );
}
