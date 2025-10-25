import { useEffect, useState } from "react"

function UseCurrency(currency) {
    const [data, setData] = useState({});

    useEffect(() => {


        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
            .then((resp) => resp.json())
            .then((json) => {
                setData(json.rates);
            })


    }, [currency])

    
    return data;


}

export default UseCurrency;