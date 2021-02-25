import React, { Component } from 'react'
import { getRoute, deleteRoute, updateRoute } from './api-utils.js';
export default class DetailPage extends Component {
    state = {
        route_name: '',
        route_rating: 1,
        is_toprope: false,
        location_id: 1,
        locations: [] 
    }

    componentDidMount = async () => {

    
        const route = await getRoute(this.props.match.params.id);

        this.setState({
            ...route,
        })
    }

    handleNameChange = (e) => this.setState({ route_name: e.target.value })

    handleRatingChange = (e) => this.setState({ route_rating: Number(e.target.value) })

    handleIsTopRopeChange = () => {
        this.setState({ 
        is_toprope: !this.state.is_toprope,
     })
    }

    handleLocationChange = (e) => this.setState({           
        location_id: Number(e.target.value),
     })


    handleSubmit = async (e) => {
        e.preventDefault();

        await updateRoute(this.props.match.params.id, this.state);

        this.props.history.push('/routes');
    }

    handleDeleteChange = async () => {
       await deleteRoute(this.props.match.params.id);

       this.props.history.push('/routes');
    }

    render() {
        return (
            <div>
                <h2>Route Details and Edit</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Route name
                        <input value={this.state.route_name} onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Route Rating
                        <input value={this.state.route_rating} type="number" onChange={this.handleRatingChange} />
                    </label>
                    <label>
                        Is Top Rope?
                        <input value={this.state.is_toprope} type="checkbox" onChange={this.handleIsTopRopeChange} checked={this.state.is_toprope}/>
                    </label>
                    <label>
                        <select value={this.state.location_id} onChange={this.handleLocationChange}>
                            <option value={1} selected={this.state.category_id === 1}>Smith Rocks</option>
                            <option value={2} selected={this.state.category_id === 2}>Yosemite</option>
                            <option value={3} selected={this.state.category_id === 3}>Red Rocks</option>
                        </select>
                    </label>
                    <button>Update</button>
                </form>
                <button onClick={this.handleDeleteChange}>Delete Route</button>
            </div>
        )
    }
}