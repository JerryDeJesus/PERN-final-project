import AllShoes from "../Components/AllShoes.js";

function Index() {
    // const handleFilter = (search) => {
    //     const result = AllShoes.filter((shoes) => { shoes.name.includes(search) })
    // }

    return(
        <div>
            <h1>Your Shoes</h1>
            <AllShoes />
        </div>
    )
}

export default Index;