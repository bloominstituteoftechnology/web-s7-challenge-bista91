import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Sprint 7 Challenge Learner Tests', () => {

  function sum(a, b) {
    a = Number(a)
    b = Number(b)
    if (isNaN(a) || isNaN(b)) {
      throw new Error('pass valid numbers')
    }
    return a + b
  }

  test('sum() throws an error "pass valid numbers"', () => {
    expect(() => sum()).toThrow('pass valid numbers')
  })

  test('sum(2, "seven") throws an error "pass valid numbers"', () => {
    expect(() => sum(2, 'seven')).toThrow('pass valid numbers')
  })

  test('sum(1, 3) returns 4', () => {
    expect(sum(1, 3)).toBe(4)
  })

  test('sum("1", 2) returns 3', () => {
    expect(sum('1', 2)).toBe(3)
  })

  test('sum("10", "3") returns 13', () => {
    expect(sum('10', '3')).toBe(13)
  })

  test('renders links and text in HelloWorld component', () => {
    render(<HelloWorld />)

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()

    expect(screen.getByText('The Truth')).toBeInTheDocument()
    expect(screen.getByText('JavaScript is pretty awesome')).toBeInTheDocument()

    expect(screen.getByText(/javaScript is pretty/i)).toBeInTheDocument()
  })
})

function HelloWorld() {
  return (
    <div>
      <h1>Hello World Component</h1>
      <nav>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Blog</a>
      </nav>
      <main>
        <section>
          <h2>The Truth</h2>
          <p>JavaScript is pretty awesome</p>
        </section>
      </main>
    </div>
  )
}