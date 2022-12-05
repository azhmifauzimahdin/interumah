import React from "react"
import Button from "../../../Button/Button"
import "./RoomSpecifications.css"

const RoomSpecifications: React.FC = props => {
    return (
        <section className="roomSpecifications">
            <header className="roomSpecifications-title">Input Spesifikasi Ruangan</header>
            <form>
                <label htmlFor="panjang" className="roomSpecifications-label">Panjang Bangunan (meter)</label>
                <input type="number" name="panjang" className="roomSpecifications-input" />
                <label htmlFor="lebar" className="roomSpecifications-label">Lebar Bangunan (meter)</label>
                <input type="number" name="lebar" className="roomSpecifications-input" />
                <label htmlFor="tinggi" className="roomSpecifications-label">Tinggi Bangunan (meter)</label>
                <input type="number" name="tinggi" className="roomSpecifications-input" />
                <label htmlFor="kualitas" className="roomSpecifications-label">Kualitas Bahan Ruangan</label>
                <select name="kualitas" className="roomSpecifications-input">
                    <option value="Low budhet">Low Budget</option>
                    <option value="Normal" selected>Normal</option>
                    <option value="Premium">Premium</option>
                </select>
            </form>
            <section className="roomSpecifications-button">
                <Button size="sm" fontSize="sm">Kirim</Button>
            </section>
        </section>
    )
}

export default RoomSpecifications