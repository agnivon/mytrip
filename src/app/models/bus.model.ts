import * as moment from 'moment';

export interface Bus {
    id: number
    bus_name: string
    source: string,
    destination: string,
    dept_time: number
    coach_type: string
    seats_available: number
    fare: string
}

export interface BusSearchParams {
    source: string
    destination: string
    startDate: moment.Moment
}

export interface Seat {
    seatIndex: number
    fare: number
    class: string
}

export interface PassengerInfo {
    username: string
    mobile: string
    email: string
}

export interface ConfirmBookingData {
    source: string
    destination: string
    dept_time: number
    bus_name: string
    coach_type: string
    seats: string
}

export interface Booking {
    bus: Bus,
    passengerInfo: PassengerInfo,
    seats: string,
    ticketId: string,
    totalFare: number
    bookingDate: number
}