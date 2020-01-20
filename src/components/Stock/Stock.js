import React from 'react';
import stocklevel from '../../data/stock.json';
import { getIngridient } from '../../utils/ingridients';

export default class Stock extends React.Component {
    renderIngridient(stock) {
        let current = getIngridient(stock.ingridient_id);

        if (current) {
            return (
                <tr>
                    <td>{current.name}</td>
                    <td>{stock.amount}{current.unit}</td>
                </tr>
            );
        }
        return null;
    }

    render() {
        return (
            <div className="stock p-3">
                <h1>Lagerbestand</h1>
                <table className="table">
                    <tbody>
                        {
                            stocklevel.map(
                                (stock) => this.renderIngridient(stock)
                            )
                        }
                    </tbody>
                </table>
            </div >
        );
    }
}