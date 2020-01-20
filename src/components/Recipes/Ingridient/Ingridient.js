import React from 'react';

import './Ingridient.scss';
import { getIngridient, isInStock } from '../../../utils/ingridients';

export default class Ingridient extends React.Component {

    render() {
        let current = getIngridient(this.props.data.ingridient_id);
        let inStock = isInStock(this.props.data.ingridient_id, this.props.data.amount);

        return (
            <tr>
                <td>{current.name}</td>
                <td> {this.props.data.amount}{current.unit}</td>
                <td>
                    {
                        inStock ?
                            <span class="badge badge-success">Lagernd</span> :
                            <span className="badge badge-danger">Nachkaufen</span>
                    }
                </td>
            </tr>
        );
    }
}