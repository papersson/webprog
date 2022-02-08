const url = 'http://localhost:8080'

const safeFetch = url => {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${url} returned status ${response.status}`)
    }
    return response.json()
  })
}
const fetchIngredient = (category, ingredient) => {
  return safeFetch(`${url}/${category}/${ingredient}`)
}

const fetchCategory = (category, inventory) => {
  return safeFetch(`${url}/${category}`).then(async ingredients => {
    for (const ingredient of ingredients) {
      inventory[ingredient] = await fetchIngredient(category, ingredient)
    }
  })
}

async function fetchAll(inventory) {
  await Promise.all([
    fetchCategory('foundations', inventory),
    fetchCategory('proteins', inventory),
    fetchCategory('extras', inventory),
    fetchCategory('dressings', inventory),
  ])
}

async function postOrder(url = '', data = []) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  return response.json()
}

export { fetchAll, postOrder }
