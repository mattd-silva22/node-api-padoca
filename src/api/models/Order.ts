class Order {
    id_client:number;
    id_itens:number;
    create_at:Date;
}

class OrderItens {
    id_order:number;
    id_product:number;
    id_amount:number;
}

export { Order , OrderItens}