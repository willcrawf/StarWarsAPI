import React, { Component } from 'react';
import { getAllStarships } from '../../services/api-calls'
import { Link } from 'react-router-dom'

class AllStarships extends Component {
    constructor(){
        super()
        this.state = {
            allStarships: []
        }
    }
    async componentDidMount() {
        const allStarships = await getAllStarships();
        console.log(allStarships)
        //API Call Goes he
        this.setState({allStarships: allStarships.results})
    }

    render() {
        return (
            <>
                {this.state.allStarships.map((starship, idx) =>
                <div key = {idx}>
                    <Link
                        to={{
                            pathname: '/starship',
                            starshipState: { starship }
                        }}
                        >
                    {starship.name}
                    </Link>
                </div>
                )}
            </>
        )
    }
}

export default AllStarships