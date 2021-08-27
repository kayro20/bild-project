const minLat = -21.269
const minLng = -47.857
const maxLat = -21.211
const maxLng = -47.780

export const isPrimeLocation = (coordinates) => {
  const lat = coordinates.latitude
  const lng = coordinates.longitude

  return (lat > minLat) && (lng > minLng) &&
    (lat < maxLat) && (lng < maxLng)
}

export const getFormattedString = values => {
  const formattedString = values.reduce((prevString, nextValue, index, src) =>
    index !== src.length - 1
      ? `${prevString}, ${nextValue}`
      : `${prevString} e ${nextValue}`
  )

  return formattedString
}

export const getAreaUtil = boundings => {
  const usableAreas = Array.isArray(boundings)
    ? getFormattedString(boundings.map(bound => Math.round(bound)))
    : Math.round(boundings)

  return `Apartamentos de ${usableAreas}m²`
}

export const getSuites = suites => {
  const availableSuites = Array.isArray(suites) && !isEmpty(suites)
    ? getFormattedString(suites.filter(suite => suite >= 1)) : suites

  return (!!suites && !isEmpty(suites))
    ? `${availableSuites} suítes`
    : null
}

export const getPrimeInfo = (coordinates) =>
  isPrimeLocation(coordinates) ? 'Localização privilegiada' : null

export const hasInvalidUsableAreas = usableAreas =>
  Array.isArray(usableAreas)
    ? usableAreas.find(usableArea => usableArea <= 10)
    : usableAreas <= 10

export const hasValidGeolocation = geolocation =>
  !!geolocation && !!geolocation.latitude && !!geolocation.longitude

export const hasValidBusinessRules = product =>
  hasValidGeolocation(product.address.geo_location)
  && !hasInvalidUsableAreas(product.units.usable_areas)

export const getListInfo = product => {
  return {
    areaUtil: {
      text: getAreaUtil(product.units.usable_areas),
      icon: 'key'
    },
    suites: {
      text: getSuites(product.units.en_suites),
      icon: 'bed'
    },
    isPrime: {
      text: getPrimeInfo(product.address.geo_location),
      icon: 'pin'
    }
  }
}

export const isEmpty = value => value.length <= 0
