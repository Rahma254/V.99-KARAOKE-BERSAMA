// Komponen ini bertanggung jawab untuk menampilkan satu kartu item
function ItemCard({ item, onClick, formatRupiah }) {
    return (
        <div className="item-card" onClick={() => onClick(item.id)}>
            <img src={item.imageUrl} alt={item.name} />
            <div className="item-name">{item.name}</div>
            <div className="item-price">{formatRupiah(item.price)}</div>
        </div>
    );
}

// Komponen ini adalah kontainer untuk semua kartu item
export default function ItemGallery({ items, onItemClick, formatRupiah }) {
    return (
        <div className="gallery-container">
            {items.map(item => (
                <ItemCard key={item.id} item={item} onClick={onItemClick} formatRupiah={formatRupiah} />
            ))}
        </div>
    );
}
