import { expect, test } from 'vitest'
import { generateKey } from './helper.ts'

test('generate key : salut-1', () => {
  expect(generateKey('salut',1)).toBe("salut-1")
})