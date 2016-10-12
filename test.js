import test from 'ava'
import isTrue from './'

test('true', t => {
  const values = ['true', true]
  t.plan(values.length)
  values.forEach(value => {
    let actual = isTrue(value)
    t.true(actual)
  })
})

test('should return false', t => {
  const values = [undefined, '', 123, {},
    [], null, isFinite, false
  ]
  t.plan(values.length)
  values.forEach(value => {
    let actual = isTrue(value)
    t.false(actual)
  })
})
