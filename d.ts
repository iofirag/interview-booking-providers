export interface Provider {
    name: string,
    specialties: string[],
    availableDates: AvailableDates[]
    score: number
}

export interface AvailableDates {
    from: number,
    to: number,
}