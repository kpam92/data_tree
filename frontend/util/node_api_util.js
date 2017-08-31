export const fetchChildren = (id) => {
  return $.ajax({
    method: 'GET' ,
    url: `api/nodes/${id}/children`
  })
}
