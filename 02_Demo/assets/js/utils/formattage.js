export function formaterPrix(prix) {
    return new Intl.NumberFormat("fr-CA", {
        style: "currency",
        currency: "CAD",
    }).format(prix);
}

export function formaterDate(date) {
    return new Intl.DateTimeFormat("fr-CA").format(date);
}
