import test from 'ava'
import request from 'supertest'
import app from '../../server.js'

test('Invalid endpoint', async t => {
  const response = await request(app).get('/api/searchs').query({text: ''})

  t.is(response.status, 404)
  t.is(response.error.text, 'Not Found')
})

test('Checking empty response', async t => {
  const response = await request(app).get('/api/search').query({text: ''})

  t.is(response.status, 200)
  t.deepEqual(response.body, {})
})

test('Checking empty response | No parameter', async t => {
  const response = await request(app).get('/api/search')

  t.is(response.status, 200)
  t.deepEqual(response.body, {})
})

test('Checking invalid request', async t => {
  const response = await request(app).get('/api/search').query({text: { foo: 'foo' }})

  t.is(response.status, 400)
  t.deepEqual(response.body, { error: 'Text should be a string' })
})

test('Checking Contacts => Organization', async t => {
  const text = 'OSC Bremerhaven'
  const response = await request(app).get('/api/search').query({text})

  t.is(response.status, 200)
  // Assuming that at least one contact belongs to a organization
  console.log('MAIA' + response.body.contacts.data.length)
  t.true(response.body.contacts.data.length >= 1)
})

test('Testing limit', async t => {
  const text = 'a'
  const response = await request(app).get('/api/search').query({text, limit : 10})

  t.is(response.status, 200)
  // Assuming that there is more than five items returned when searching for 'a'
  t.true(response.body.contacts.data.length <= 10)
})
