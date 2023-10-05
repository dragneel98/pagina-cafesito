import { useState } from "react";
import "./css/donationForm.css"
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from "axios"

const apiKey = import.meta.MERCADO_PAGO_KEY
initMercadoPago(apiKey);

export default function DonationForm() {

    const [cantidad, setCantidad] = useState(1)
    const [total, setTotal] = useState(100)
    const [preferenceId, setPreferenceId] = useState()

    const createPreference = async () => {
        try {
            const response = await axios.post("http://localhost:8080/create_preference", {
                description: "gracias por los cafesitos",
                price: total,
                quantity: 1,
            })
            const { id } = response.data

            return id

        } catch (error) {
            console.log(error);
        }
    }

    const handleBuy = async () => {
        const id = await createPreference()
        if (id) {
            setPreferenceId(id)
        }
    }

    const handleCantidad = (cafesitos) => {
        if (cantidad >= 1) {
            setCantidad(cafesitos)
            setTotal(cafesitos * 100)
        }
    }
    const changeCantidad = (e) => {
        if (e.target.value >= 1) {
            setCantidad(e.target.value)
            setTotal(e.target.value * 100)
        }
    }

    return (
        <div>
            <button type="button" className="donate-button" onClick={() => handleCantidad(3)}> 3 CAFESITOS ☕</button>
            <button type="button" className="donate-button" onClick={() => handleCantidad(5)}> 5 CAFESITOS ☕</button>
            <button type="button" className="donate-button" onClick={() => handleCantidad(10)}> 10 CAFESITOS ☕</button>
            <div className="input-container">
                <input className="donate-input" type="number" min={1} value={cantidad} onChange={changeCantidad} />
                <button className="submit-button" onClick={handleBuy}> donar </button>
            </div>
            {/* <input type="text" readOnly placeholder={`doname ${cantidad} por un total de ${cantidad > 0 ? total : 0}`} className="contador-cafesitos" {...register("total")} /> */}
            <p className="contador-cafesitos" >{`doname ${cantidad}`} {cantidad > 1 ? "cafesitos" : "cafesito"} por {total} </p>
            {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} />}
        </div>
    )
}
