import ingridients from '../data/ingridients.json';
import stock from '../data/stock';

export function getIngridient(value) {
    return ingridients.find(({ id }) => {
        return id === value;
    });
}

export function isInStock(id, amount) {
    let level = stock.find(({ ingridient_id }) => {
        return ingridient_id === id;
    });

    return level.amount >= amount;
}