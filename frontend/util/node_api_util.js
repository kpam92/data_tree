
export const fetchNode = (id) => {
  return $.ajax({
    method: 'GET' ,
    url: `api/nodes/${id}`
  })
}
export const fetchChildren = (id) => {
  return $.ajax({
    method: 'GET' ,
    url: `api/nodes/${id}/children`
  })
}
