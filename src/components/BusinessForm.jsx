import React from "react";

export const BusinessForm = () => {
    return (
        <div className="h-full flex flex-col justify-center items-center border border-gray-400 m-2 p-4">
            <h2 className="text-3xl font-semibold">Empresa</h2>
            <form action="#" className="w-full max-w-xl">
                <div className="mt-3">
                    <input name="id" required type="number" placeholder="NIT" className="border border-gray-400 rounded-md py-1 px-2 w-full text-xl" />
                </div>
                <div className="mt-3">
                    <input name="nombre" required type="text" placeholder="Nombre de la Empresa" className="border border-gray-400 rounded-md py-1 px-2 w-full text-xl" />
                </div>
                <div className="mt-3">
                    <input name="direccion" required type="text" placeholder="Dirección de la Empresa" className="border border-gray-400 rounded-md py-1 px-2 w-full text-xl" />
                </div>
                <div className="mt-3">
                    <input name="telefono" required type="tel" inputMode="numeric" pattern="[0-9]*" placeholder="Télefono de la Empresa" className="border border-gray-400 rounded-md py-1 px-2 w-full text-xl" />
                </div>
                <div>
                    <button className="bg-amber-600 text-white w-full py-2 xl:mt-2 mt-5 text-center rounded-xl xl:text-xl text-xl font-semibold">Enviar</button>
                </div>
            </form>
        </div>
    );
}