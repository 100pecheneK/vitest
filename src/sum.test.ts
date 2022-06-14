import sum from './sum'
import { describe, expect, it } from 'vitest'

describe('#sum', () => {
  it('returns 0 with no numbers', () => {
    expect(sum()).toBe(0)
  })
	it('returns same number with one number', ()=>{
		expect(sum(4)).toBe(4)
	})
	it("return sum with multiple numbers", ()=>{
		expect(sum(1, 2, 3)).toBe(6)
	})
})
