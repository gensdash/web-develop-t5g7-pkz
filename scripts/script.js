console.log("test")
function getURL(uri) {
  var link = window.location.hostname + uri
  console.log(link)
  window.open(link, "_self")
  return false
}