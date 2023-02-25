import { costFactory } from "./cost.factory"

describe('Cost factory', () => {
    it('should return 1.90 if call is from São Paulo to Barrinhas', () => {
        const dddPlace = {
            from: '011',
            to: '016'
        }
        const cost = costFactory(dddPlace.from, dddPlace.to);

        expect(cost).toBe(1.90)
    })

    it('should return 2.90 if call is from Barrinhas to São Paulo', () => {
        const dddPlace = {
            from: '016',
            to: '011'
        }
        const cost = costFactory(dddPlace.from, dddPlace.to);

        expect(cost).toBe(2.90)
    })

    it('should return 1.70 if call is from São Paulo to Altair', () => {
        const dddPlace = {
            from: '011',
            to: '017'
        }
        const cost = costFactory(dddPlace.from, dddPlace.to);

        expect(cost).toBe(1.70)
    })

    it('should return 1.70 if call is from São Paulo to Altair', () => {
        const dddPlace = {
            from: '011',
            to: '017'
        }
        const cost = costFactory(dddPlace.from, dddPlace.to);

        expect(cost).toBe(1.70)
    })

    it('should return 2.70 if call is from Altair to São Paulo', () => {
        const dddPlace = {
            from: '017',
            to: '011'
        }
        const cost = costFactory(dddPlace.from, dddPlace.to);

        expect(cost).toBe(2.70)
    })

    it('should return 0.90 if call is from São Paulo to Adamantina', () => {
        const dddPlace = {
            from: '011',
            to: '018'
        }
        const cost = costFactory(dddPlace.from, dddPlace.to);

        expect(cost).toBe(0.90)
    })

    it('should return 1.90 if call is from Adamantina to São Paulo', () => {
        const dddPlace = {
            from: '018',
            to: '011'
        }
        const cost = costFactory(dddPlace.from, dddPlace.to);

        expect(cost).toBe(1.90)
    })
})