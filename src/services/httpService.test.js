import * as axios from 'axios'

jest.mock('axios')

test('request with a ok response', async() => {
  const asyncMock = axios.get.mockResolvedValue({
    data: [
      {
        products: [
          {
            name: 'Mock product',
            address: {
              city: 'Mock city',
              district: 'Mock district',
              geo_location: {latitude: -18.9634, longitude: -48.2715}
            },
            photos: ['urlMock1', 'urlMock2'],
            units: {
              en_suites: [1, 2, 3],
              usable_areas: [93, 100]
            }
          }
        ]
      }
    ]
  })

  const response = await asyncMock()
  const data = response.data[0].products[0]
  expect(data.name).toBe('Mock product')
  expect(data.address).toStrictEqual({
    city: 'Mock city',
    district: 'Mock district',
    geo_location: {latitude: -18.9634, longitude: -48.2715}
  })
  expect(data.photos).toStrictEqual(['urlMock1', 'urlMock2'])
  expect(data.units).toStrictEqual({
    en_suites: [1, 2, 3],
    usable_areas: [93, 100]
  })
})