import Card from "./card";

const Body = () => {
    const users = [
        {
            name : 'Ridho Yanudira Saputra',
            nim : '1122102034',
            matakuliah : 'Front-end Development'
        },
        {
            name : 'Ridho',
            nim : '1122102035',
            matakuliah : 'Back-end Development'
        },
        {
            name : 'putra',
            nim : '1122102036',
            matakuliah : 'Front-end Development'
        },
        {
            name : 'dira',
            nim : '1122102037',
            matakuliah : 'Back-end Development'
        },
        {
            name : 'Yanu',
            nim : '1122102038',
            matakuliah : 'Front-end Development'
        }
    ]

    return (
        <>
        {
            users.map((user, index) => (
                <Card key={index} data={user}/>
            ))
        }
        </>
    );
}

export default Body;