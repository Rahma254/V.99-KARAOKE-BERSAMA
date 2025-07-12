import { useState } from 'react';
import ItemGallery from '../components/ItemGallery';
import ConfirmationModal from '../components/ConfirmationModal';
import Head from 'next/head'; // Jika Anda menggunakan Next.js

// --- DATABASE ITEM ANDA (LENGKAP DENGAN URL CDN) ---
const itemsData = [
    { id: 'boxing-glove', name: 'Boxing Glove', price: 50, imageUrl: 'https://img.icons8.com/emoji/48/boxing-glove-emoji.png' },
    { id: 'badminton', name: 'Badminton', price: 20, imageUrl: 'https://img.icons8.com/emoji/48/badminton-emoji.png' },
    { id: 'bullseye', name: 'Bullseye', price: 100, imageUrl: 'https://img.icons8.com/emoji/48/bullseye.png' },
    { id: 'chess-pawn', name: 'Chess Pawn', price: 75, imageUrl: 'https://img.icons8.com/emoji/48/chess-pawn.png' },
    { id: 'japanese-dolls', name: 'Japanese Dolls', price: 500, imageUrl: 'https://img.icons8.com/emoji/48/japanese-dolls.png' },
    { id: 'kite', name: 'Kite', price: 1000, imageUrl: 'https://img.icons8.com/emoji/48/kite-.png' },
    { id: 'nesting-dolls', name: 'Nesting Dolls', price: 2000, imageUrl: 'https://img.icons8.com/emoji/48/nesting-dolls.png' },
    { id: 'teddy-bear', name: 'Teddy Bear', price: 3000, imageUrl: 'https://img.icons8.com/emoji/48/teddy-bear-.png' },
    { id: 'ant', name: 'Ant', price: 5000, imageUrl: 'https://img.icons8.com/emoji/48/ant-emoji.png' },
    { id: 'butterfly', name: 'Butterfly', price: 7000, imageUrl: 'https://img.icons8.com/emoji/48/butterfly-emoji.png' },
    { id: 'dog-face', name: 'Dog Face', price: 9000, imageUrl: 'https://img.icons8.com/emoji/48/dog-face.png' },
    { id: 'elephant', name: 'Elephant', price: 10000, imageUrl: 'https://img.icons8.com/emoji/48/elephant-emoji.png' },
    { id: 'ewe', name: 'Ewe', price: 12000, imageUrl: 'https://img.icons8.com/emoji/48/ewe-emoji.png' },
    { id: 'fly', name: 'Fly', price: 3000, imageUrl: 'https://img.icons8.com/emoji/48/fly-emoji.png' },
    { id: 'fox', name: 'Fox', price: 15000, imageUrl: 'https://img.icons8.com/emoji/48/fox-emoji.png' },
    { id: 'goat', name: 'Goat', price: 7000, imageUrl: 'https://img.icons8.com/emoji/48/goat-emoji.png' },
    { id: 'gorilla', name: 'Gorilla', price: 25000, imageUrl: 'https://img.icons8.com/emoji/48/gorilla-emoji.png' },
    { id: 'hatching-chick', name: 'Hatching Chick', price: 75000, imageUrl: 'https://img.icons8.com/emoji/48/hatching-chick--v2.png' },
    { id: 'hibiscus', name: 'Hibiscus', price: 20000, imageUrl: 'https://img.icons8.com/emoji/48/hibiscus.png' },
    { id: 'kangaroo', name: 'Kangaroo', price: 6000, imageUrl: 'https://img.icons8.com/emoji/48/kangaroo-emoji.png' },
    { id: 'lotus', name: 'Lotus', price: 1000, imageUrl: 'https://img.icons8.com/emoji/48/lotus-emoji.png' },
    { id: 'monkey', name: 'Monkey', price: 50000, imageUrl: 'https://img.icons8.com/emoji/48/monkey--v1.png' },
    { id: 'mouse', name: 'Mouse', price: 15000, imageUrl: 'https://img.icons8.com/emoji/48/mouse-body-emoji.png' },
    { id: 'parrot', name: 'Parrot', price: 3000, imageUrl: 'https://img.icons8.com/emoji/48/parrot-emoji.png' },
    { id: 'penguin', name: 'Penguin', price: 30000, imageUrl: 'https://img.icons8.com/emoji/48/penguin--v2.png' },
    { id: 'pig', name: 'Pig', price: 100000, imageUrl: 'https://img.icons8.com/emoji/48/pig-emoji.png' },
    { id: 'rose', name: 'Rose', price: 2000, imageUrl: 'https://img.icons8.com/emoji/48/rose-emoji.png' },
    { id: 'sauropod', name: 'Sauropod', price: 5000, imageUrl: 'https://img.icons8.com/emoji/48/sauropod.png' }
];

export default function TokoPage() {
    const [userBalance, setUserBalance] = useState(250000); 
    const [selectedItem, setSelectedItem] = useState(null);

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
