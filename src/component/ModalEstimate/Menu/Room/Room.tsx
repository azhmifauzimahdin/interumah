import React from "react"
import Button from "../../../Button/Button"
import "./Room.css"

const Room: React.FC = () => {
    return (
        <section className="room">
            <header className="room-title">Saya ingin menghitung estimasi ruangan...</header>
            <section className="room-radioWrapper">
                <section className="room-radioWrapper-One">
                    <section className="room-radiobox">
                        <input type="radio" name="ruang" id="RuangTamu" value="Ruang Tamu" />
                        <label htmlFor="RuangTamu">Ruang Tamu</label>
                    </section>
                    <section className="room-radiobox">
                        <input type="radio" name="ruang" id="Dapur" value="Dapur" />
                        <label htmlFor="Dapur">Dapur</label>
                    </section>
                    <section className="room-radiobox">
                        <input type="radio" name="ruang" id="Lainnya" value="Lainnya" />
                        <label htmlFor="Lainnya">Lainnya</label>
                    </section>
                </section>
                <section className="room-radioWrapper-Two">
                    <section className="room-radiobox">
                        <input type="radio" name="ruang" id="RuangKeluarga" value="Ruang Keluarga" />
                        <label htmlFor="RuangKeluarga">Ruang Keluarga</label>
                    </section>
                    <section className="room-radiobox">
                        <input type="radio" name="ruang" id="kamarTidur" value="Kamar Tidur" />
                        <label htmlFor="kamarTidur">Kamar Tidur</label>
                    </section>
                    <section className="room-radiobox">
                        <select name="ruang" className="room-select">
                            <option value="Ruang Kerja">Ruang Kerja</option>
                            <option value="Fitnes">Fitnes</option>
                            <option value="Restoran">Restoran</option>
                        </select>
                    </section>
                </section>
            </section>
            <section className="room-button">
                <Button size="sm" fontSize="sm">Kirim</Button>
            </section>
        </section>
    )
}

export default Room