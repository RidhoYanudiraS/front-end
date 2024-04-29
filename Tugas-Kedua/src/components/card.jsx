const Card = ({data}) => {
    console.log(data);
    return ( 
        <div
            style={{
                backgroundColor: 'red',
                padding: '5px',
                borderRadius: '5px',
                margin: '10px',
                color: 'black'
            }}
        >
            <h1>BIODATA</h1>
            <p> nama : {data.name} </p>
            <p> nim : {data.nim} </p>
            <p> matakuliah : {data.matakuliah} </p>
            <Button />
        </div>
     );
}

const Button = () => {
    return( 
        <button style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            margin: '0 5px'
        }}
        >LANJUT
        </button>
    )
}
 
export default Card;