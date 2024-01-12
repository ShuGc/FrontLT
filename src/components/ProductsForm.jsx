import React, { useState } from "react";

export const ProductsForm = () => {
    const tipoMoneda = [
        {
            id: 1,
            nombre: "COP"
        },
        {
            id: 2,
            nombre: "USD"
        },
        {
            id: 3,
            nombre: "EUR"
        }
    ];
    
    const [moneda, setMoneda] = useState(tipoMoneda[0].id);

    const handleTipoMonedaChange = (e) => {
        setMoneda(e.target.value);
    }

    return (
        <div className="h-full flex flex-col justify-center items-center border border-gray-400 m-2 p-4">
            <h2 className="text-3xl font-semibold">Producto</h2>
            <form action="#" className="w-full max-w-xl">
                <div className="mt-3">
                    <input name="id" required type="number" placeholder="Código del Producto" className="border border-gray-400 rounded-md py-1 px-2 w-full text-xl" />
                </div>
                <div className="mt-3">
                    <input name="nombre" required type="text" placeholder="Nombre" className="border border-gray-400 rounded-md py-1 px-2 w-full text-xl" />
                </div>
                <div className="mt-3">
                    <input name="caracteristicas" required type="text" placeholder="Caracteristicas" className="block p-4 border border-gray-400 rounded-md py-1 px-2 w-full text-xl" />
                </div>
                <div className="mt-3 flex space-x-2">
                    <input name="precio" required type="number" inputMode="numeric" pattern="[0-9]*" placeholder="Precio" className="border border-gray-400 rounded-md py-1 px-2 w-full text-xl" />
                    <select value={moneda} onChange={handleTipoMonedaChange} className="border border-gray-400 rounded-md py-1 px-2 w-1/5 text-xl">
                    {tipoMoneda.map((tipoMoneda) => (
                        <option key={tipoMoneda.id} value={tipoMoneda.id}>
                            {tipoMoneda.nombre}
                        </option>
                    ))}
                </select>
                </div>
                <div className="mt-3">
                    <input name="empresa" required type="tel" inputMode="numeric" pattern="[0-9]*" placeholder="Empresa" className="border border-gray-400 rounded-md py-1 px-2 w-full text-xl" />
                </div>
                <div>
                    <button className="bg-amber-600 text-white w-full py-2 xl:mt-2 mt-5 text-center rounded-xl xl:text-xl text-xl font-semibold">Enviar</button>
                </div>
            </form>
        </div>
    );
}