function calculateMoney(ticketSale) {
    const ticketPrice=120;
    const caretaker=500;
    const staffLunch= 8*50;
    if (ticketSale<=0) {
        return "Please input positive number."
    }
    const totalTaka=((ticketSale*ticketPrice)-(caretaker+staffLunch));
    return totalTaka;
    }
    console.log(calculateMoney(10))