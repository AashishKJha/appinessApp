export interface BaseModel {
    get_created_at(): Date
    set_created_at(date: Date): void
    get_updated_at(): Date
    set_updated_at(date: Date): void
    toString(): string
}