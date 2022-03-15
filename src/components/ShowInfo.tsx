type ShowInfoType = {
    name: string,
    age: number
}

const ShowInfo = (props:ShowInfoType)=> {
    return <div>
        {props.name} <br /> {props.age}


    </div>
}

export default ShowInfo