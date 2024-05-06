import { describe, it, expect } from 'vitest'
import { fizzBuzz, max } from '../src/intro'

describe('max', () => {
    it('should return first argument if it is greater', () => {
        expect(max(2, 1)).toBe(2)
    })

    it('should return second argument if it is greater', () => {
        expect(max(1, 2)).toBe(2)
    })

    it('should return first argument if it is equal', () => {
        expect(max(1, 1)).toBe(1)
    })
})

describe('fizzBuzz', () => {
    it('should return FizzBuzz if divisible by 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz')
    })

    it('should return Fizz if divisible by 3', () => {
        expect(fizzBuzz(9)).toBe('Fizz')
    })

    it('should return Buzz if divisible by 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz')
    })

    it('should return number as string if not divisible by 3 or 5', () => {
        expect(fizzBuzz(4)).toBe('4')
    })
})