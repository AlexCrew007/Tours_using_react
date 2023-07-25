import Cards from "./Cards";
function Tours({tours, removeTour}){
    return (
        <div className="container">
            <div>
                <h2 className="title">Plan With Love</h2>
            </div>
            <div className="cards">
            {
                tours.map((data) => {
                    return <Cards key={data.id} {...data} removeTour={removeTour}></Cards>
                })
            }
            </div>
        </div>
    );
}

export default Tours;