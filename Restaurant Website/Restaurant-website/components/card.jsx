import '../src/App.css'

export default function Card ({data}){
    const {id, name, category, image, description} = data
    return(
        <>
        <div className='card-container' key={id}>
            <div className='id'>{id}</div>
            <div className='type'>{category}</div>
            <h2 className='title'>{name}</h2>
            <span className='description'>{description}</span>
            <img src={image}/>
            <button>Order Now</button>
        </div>

        </>
    )
}