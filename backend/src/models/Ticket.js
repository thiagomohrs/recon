const { Schema, model } = require('mongoose');

const TicketSchema = new Schema({
    reporter: {
        type: String,
        required: true
    },
    car_plate: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    description: String,
    file: {
        type: String,
        required: true
    }
},{
    timestamps: true,
});

module.exports = model('Ticket', TicketSchema);