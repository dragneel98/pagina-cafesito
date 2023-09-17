import { useState } from "react";
import "./css/donationForm.css"

export default function DonationForm() {

    const [cantidad, setCantidad] = useState(1)
    const [total, setTotal] = useState(100)

    // const enviarInfo = (values) => {
    //     console.log(values);
    // }
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
        <form>
            <button type="button" className="donate-button" onClick={() => handleCantidad(3)}> 3 CAFESITOS ☕</button>
            <button type="button" className="donate-button" onClick={() => handleCantidad(5)}> 5 CAFESITOS ☕</button>
            <button type="button" className="donate-button" onClick={() => handleCantidad(10)}> 10 CAFESITOS ☕</button>
            <div className="input-container">
                <input className="donate-input" type="number" min={1} value={cantidad} onChange={changeCantidad} />
                <input type="submit" className="submit-button"></input>
            </div>
            {/* <input type="text" readOnly placeholder={`doname ${cantidad} por un total de ${cantidad > 0 ? total : 0}`} className="contador-cafesitos" {...register("total")} /> */}
            <p className="contador-cafesitos" >{`doname ${cantidad}`} {cantidad > 1 ? "cafesitos" : "cafesito"} por {total} </p>
        </form>
    )
}
