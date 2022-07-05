export const encodeForGoogle = string => string.split(" ").join("+")

export const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const pageRegex = /\/about|\/contact/

export const handleNetlifyFormSubmit = (props, e) => {
  fetch("/#success", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      ...props.values,
    }),
  })
    .then(() => {
      props.setSubmitting(false)
    })
    .catch(error => {
      props.setSubmitting(false)
    })
}
