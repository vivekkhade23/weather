import { RestaurantCard } from "./RestaurantCard"

function RestaurantTable({data}){
    // console.log("data",data)
    return (
            <table  border="1px">
                <thead className="tablehead">
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Type</th>
                        <th>Number of Votes</th>
                        <th>Price Starts From</th>
                    </tr>
                </thead>
                <tbody>
                    {/* map through the data */}
                    {data?.map((item) => {
                        return(
<RestaurantCard 
key={item.id}
name={item.name}
rating={item.rating}
type={item.type}
number_of_votes={item.number_of_votes}
price_starts_from={item.price_starts_from}
id={item.id}

/>
                        )
                    })}
                </tbody>
            </table>
    )
}

export default RestaurantTable