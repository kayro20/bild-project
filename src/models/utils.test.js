import {
  getAreaUtil,
  getFormattedString,
  getListInfo,
  getPrimeInfo,
  getSuites,
  hasInvalidUsableAreas,
  hasValidGeolocation,
  hasValidBusinessRules,
  isEmpty,
  isPrimeLocation
} from './utils'

const product = {
  units: {
    usable_areas: [98],
    en_suites: [3, 4]
  },
  address: {
    geo_location: {latitude: -21.268, longitude: -47.856}
  }
}

const product2 = {
  units: {
    usable_areas: [98],
    en_suites: []
  },
  address: {
    geo_location: {latitude: -21.268, longitude: -47.856}
  }
}

test('generate a string from array', () => {
  expect(getFormattedString([1, 3, 5])).toBe('1, 3 e 5')
})

test('return if an array is empty', () => {
  expect(isEmpty([])).toBe(true)
  expect(isEmpty([0])).toBe(false)
})

test('return if is a prime location', () => {
  expect(isPrimeLocation({latitude: -21.268, longitude: -47.856})).toBe(true)
  expect(isPrimeLocation({latitude: -21.270, longitude: -47.856})).toBe(false)
  expect(isPrimeLocation({latitude: -21.268, longitude: -47.858})).toBe(false)
})

test('return string with usable areas', () => {
  expect(getAreaUtil(10.8)).toBe('Apartamentos de 11m²')
  expect(getAreaUtil([65.3, 89, 125])).toBe('Apartamentos de 65, 89 e 125m²')
})

test('return string with available suites', () => {
  expect(getSuites([2, 3])).toBe('2 e 3 suítes')
  expect(getSuites(4)).toBe('4 suítes')
})

test('return prime location strin', () => {
  expect(getPrimeInfo({latitude: -21.268, longitude: -47.856})).toBe('Localização privilegiada')
  expect(getPrimeInfo({latitude: -21.270, longitude: -47.856})).toBe(null)
})

test('return info about a product', () => {
  expect(getListInfo(product)).toStrictEqual({
    areaUtil: {
      text: 'Apartamentos de 98m²',
      icon: 'key'
    },
    suites: {
      text: '3 e 4 suítes',
      icon: 'bed'
    },
    isPrime: {
      text: 'Localização privilegiada',
      icon: 'pin'
    }
  })
})

test('return if product has invalid usable areas', () => {
  expect(hasInvalidUsableAreas([0, 10, 85])).toBe(0)
  expect(hasInvalidUsableAreas([55, 85])).toBe(undefined)
})

test('check if product has geolocation', () => {
  expect(hasValidGeolocation()).toBe(false)
  expect(hasValidGeolocation({latitude: -15, longitude: 9})).toBe(true)
})

test('product complies with business rules', () => {
  expect(hasValidBusinessRules(product)).toBe(true)
  expect(hasValidBusinessRules(product2)).toBe(true)
})