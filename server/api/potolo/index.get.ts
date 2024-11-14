export default defineEventHandler( event => {

    interface potolo {
        color :string;
        cantidad : number;
    }

    const potolos : potolo[] = [
        {
            cantidad: 3,
            color: 'Pintón'
        },
        {
            cantidad: 5,
            color: 'Maduro'
        },
        {
            cantidad: 6,
            color: 'Verde'
        },
        {
            cantidad: 2,
            color: 'Biche'
        },
    ]

    return potolos;

})