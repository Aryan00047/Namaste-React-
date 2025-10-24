const Grocery = () => {

    return(
        <div>
            <div>
               <h1>Have groceries delieverd to you in 10 mins!</h1>
                <button> Add Grocery</button> 
            </div>
            <div>
                <form>
                    <label>Name:</label>
                    <input placeholder="name" type="text"/>
                    <br/>
                    <label>Card Details</label>
                    <input type="text"/>
                    <button type="submit">submit</button>
                </form>
            </div>
        </div>
    )
}

export default Grocery;