import './App.css'

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];
let SearchBar = ()=>{
  return(
    <>
    <form className='form'>
      <input type="text" placeholder='Search....'></input>
      <label><input type='checkbox' ></input>only Show Products in stock</label>
    </form>
    </>
  )
}
function ProductHeader(){
  return(
    <>
        <td>Name</td>
        <td >Price</td>
    </>
  )
}

function ProductCategoryTable(PRODUCTS){
  let categories = []
  PRODUCTS.map((product)=>{
    
  })
  return(
    <>
        <th></th>
    </>
  )
}

function ProductTable(PRODUCTS){
  return(
    <>
    <table border={"2"}>
      <th>
        <ProductHeader />
      </th>
      <tr>
        <ProductCategoryTable />
      </tr>
    </table>
    </>
  )
}
function App() {

  return (
    <>
    <div className='main'>
    <SearchBar />
    <ProductTable />
    </div>
    </>
  )
}




export default App
