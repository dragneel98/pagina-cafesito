import { useState } from "react";
import "./css/donationForm.css"
import { useForm } from "react-hook-form";

export default function DonationForm() {

    const [cantidad, setCantidad] = useState(0)
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
    });
    const enviarInfo = (values) => {
        console.log(errors);
        console.log(values);
    }
    const handleCantidad = () => {
        setCantidad(cantidad + 1)
    }
    return (
        <form onSubmit={handleSubmit(enviarInfo)}>
            <button className="donate-button" {...register("3")}> 3 CAFESITOS ☕</button>
            <button className="donate-button" {...register("5")}> 5 CAFESITOS ☕</button>
            <button className="donate-button" onClick={handleCantidad} {...register(`cantidad:${cantidad}`)}> 10 CAFESITOS ☕</button>
            <div className="input-container">
                <input className="donate-input" type="number" min="1" placeholder="introduce una cantidad"
                    {...register("10")} />
                <input type="submit" className="submit-button"></input>
            </div>
        </form>
    )
}
