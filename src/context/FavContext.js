import React, { createContext, useState, useEffect } from 'react';

export const FavContext = createContext();

const FavProvider = (props) => {
    const initialFav = localStorage.getItem("favoritos") ? JSON.parse(localStorage.getItem("favoritos")) : [];

    const [proyectos, setProyectos] = useState()
    const [favoritos, setFav] = useState(initialFav);

    console.log("Favoritos: " ,favoritos)
    function manejarFavorito(proyecto) { 
        const index = favoritos.findIndex((p) => p.id === proyecto.id); 
        console.log(index)
        if (index < 0) {
            let newProyecto = JSON.parse(JSON.stringify(proyecto))
            newProyecto.favorito = true;
            setFav([
                ...favoritos,
                newProyecto,
            ])

        }else{
            let newProyecto = JSON.parse(JSON.stringify(proyecto))
            newProyecto.favorito = false;
            console.log("NewProyecto: ",newProyecto)
            const newList = favoritos.filter((p) => p.id !== proyecto.id)
            setFav(newList) 
        }  
    }
    
    const ExisteFavorito= (id)=>{

        const index = favoritos.findIndex((p) => p.id === id); 
        if(index<0){
            console.log("no existe")
            return false;
        }else{
            console.log("existe")
            return true;
        }
        
    }
    
    useEffect(() => {
        localStorage.setItem("favoritos", JSON.stringify(favoritos))      
    }, [favoritos])

    return (
        <FavContext.Provider
            value={{
                favoritos,
                manejarFavorito,
                ExisteFavorito
            }}
        >
            {props.children}
        </FavContext.Provider>
    )
}

export default FavProvider;