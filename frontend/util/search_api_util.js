export const newSearch = (search_string) => {
  return $.ajax({
    method: 'GET',
    url: `/api/nodes/${search_string}`
  })
}
