const Body = () => {
    return ( 
        <div>
            <h1>Ini adalah body</h1>
            <p> nama : Ridho </p>
            <p> nim : 1122102034 </p>
            <p>   matakuliah : Front-end Development </p>
            <Button />
        </div>
     );
}

const Button = () => {
    return( 
        <button style={{
            backgroundColor: 'red',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            margin: '0 5px'
        }}
        >Clik
        </button>
    )
}

export default Body;