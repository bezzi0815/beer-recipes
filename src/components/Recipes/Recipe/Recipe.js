import React from 'react';

import Ingridient from '../Ingridient/Ingridient';

export default class Recipe extends React.Component {
    brew(event) {
        console.log({ event });
        alert("Grainfather go!");
    }

    render() {
        return (
            <div className="card recipe mr-3" style={{ width: 25 + 'rem' }} >
                <div className="card-body">
                    <h5 className="card-title">{this.props.data.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.data.type}</h6>
                    <table className="table">
                        {
                            this.props.data.ingridients.map((ingridient) =>
                                <Ingridient key={`${this.props.data.name}_ingridient_${ingridient.id}`} data={ingridient}></Ingridient>
                            )
                        }
                    </table>
                    <button onClick={this.brew} className="btn btn-primary">Jetzt brauen!</button>
                </div>
            </div>

        );
    }
}